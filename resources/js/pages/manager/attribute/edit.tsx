import ManagerLayout from '@/layouts/manager-layout';
import type { BreadcrumbItem } from '@/types';
import manager from '@/routes/manager';
import attribute from '@/routes/manager/attribute';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import article from '@/routes/manager/article';
import { Button } from '@/components/ui/button';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'ویژگی ها',
        href: attribute.index(),
    },
    {
        title: 'ویرایش ویژگی',
        href: '#',
    },
];
export default function edit({attributeItem}) {

    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
    const { data, setData, patch, processing, errors, reset, clearErrors } =
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useForm({
            name: attributeItem.data.name || '',
            icon: attributeItem.data.icon || '',
        });
    const newErrors: Record<string, string> = {};
    const  handleSubmit = (e)=>{
        e.preventDefault();
        setLocalErrors({});
        clearErrors();
        if (!data.name) {
            newErrors.name = 'نام الزامیست';
        }
        if (!data.icon) {
            newErrors.icon = 'ایکون الزامیست';
        }
        if (Object.keys(newErrors).length > 0) {
            setLocalErrors(newErrors);
            return;
        }
        // @ts-ignore
        patch(attribute.update(attributeItem.data.id), {
            onSuccess: () => reset('name', 'icon'),
        });
    }
    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className="bg-gray-800">
                <CardHeader>اضافه کردن ویژگی جدید</CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="name">نام ویژگی</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    type="text"
                                    placeholder=" به طور مثال : جنس ویا نوع بدنه {اجباری}"
                                />
                                <InputError
                                    message={errors.name || localErrors.name}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="icon">ایکون ویژگی</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="icon"
                                    id="icon"
                                    value={data.icon}
                                    onChange={(e) =>
                                        setData('icon', e.target.value)
                                    }
                                    type="text"
                                    placeholder=" حمتما ایکون svg از سایت هایی heroicon ویا ریاکت ایکون  {اجباری}"
                                />
                                <InputError
                                    message={errors.icon || localErrors.icon}
                                />
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="w-full relative"
                            disabled={processing}
                        >
                            {processing ? 'در حال ذخیره...' : 'ذخیره'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </ManagerLayout>
    )
}
