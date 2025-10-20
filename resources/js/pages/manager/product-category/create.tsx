import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ManagerLayout from '@/layouts/manager-layout';
import manager from '@/routes/manager';
import type { BreadcrumbItem } from '@/types';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import Select from 'react-select';
import CkEditor from '@/components/CkEditor';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'دسته بندی محصولات',
        href: manager.productCategory.index(),
    },
    {
        title: 'اضافه کردن دسته بندی',
        href: '#',
    },
];

export default function Create({ productCategoriesLists }) {
    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
    const { data, setData, post, processing, errors, reset, clearErrors } =
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useForm({
            name: '',
            slug: '',
            parent_id: '',
            meta_title: '',
            meta_description: '',
            short_description: '',
            description: '',
        });
    const newErrors: Record<string, string> = {};
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalErrors({});
        clearErrors();
        if (!data.name) {
            newErrors.name = 'نام دسته‌بندی الزامی است';
        } else if (data.name.length > 250) {
            newErrors.name = 'نام دسته‌بندی نباید بیشتر از ۲۵۰ کاراکتر باشد';
        }

        if (!data.slug) {
            newErrors.slug = 'آدرس اینترنتی الزامیست';
        } else if (data.slug.length > 250) {
            newErrors.slug = 'آدرس اینترنتی نباید بیشتر از ۲۵۰ کاراکتر باشد';
        }

        if (!data.meta_title) {
            newErrors.meta_title = 'تیتر متا الزامیست';
        } else if (data.meta_title.length < 50) {
            newErrors.meta_title = 'تیتر متا نباید کمتر از 50 کاراکتر باشد';
        } else if (data.meta_title.length > 65) {
            newErrors.meta_title = 'تیتر متا نباید بیشتر از 65 کاراکتر باشد';
        }

        if (!data.meta_description) {
            newErrors.meta_description = 'توضیحات متا الزامیست';
        } else if (data.meta_description.length < 120) {
            newErrors.meta_description =
                'توضیح متا نباید کمتر از 120 کاراکتر باشد';
        } else if (data.meta_description.length > 155) {
            newErrors.meta_description =
                'توضیح متا نباید بیشتر از 155 کاراکتر باشد';
        }

        if (!data.short_description) {
            newErrors.short_description = 'توضیحات کوتاه الزامیست';
        } else if (data.short_description.length > 250) {
            newErrors.short_description =
                'توضیح کوتاه نباید بیشتر از 155 کاراکتر باشد';
        }

        if(!data.description){
            newErrors.description = 'توضیحات الزامیه '
        }

        if (Object.keys(newErrors).length > 0) {
            setLocalErrors(newErrors);
            return;
        }
        // @ts-ignore
        post(manager.productCategory.store(), {
            onSuccess: () => reset('name'),
        });
    };

    const categoryOptions = productCategoriesLists.data.map((category) => ({
        value: category.id,
        label: category.name,
    }));
    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className="bg-gray-800">
                <CardHeader>اضافه کردن مقدار جدید</CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="name">نام دسته بندی</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    type="text"
                                    placeholder=" به طور مثال : کارت گرافیک {اجباری و منحصر به فرد باشه بین دسته بندی ها نهایتا 250 کارکتر قبوله}"
                                />
                                <InputError
                                    message={errors.name || localErrors.name}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="slug">آدرس اینترنتی دست بندی</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="slug"
                                    id="slug"
                                    value={data.slug}
                                    onChange={(e) =>
                                        setData('slug', e.target.value)
                                    }
                                    type="text"
                                    placeholder=" به طور مثال : کارت گرافیک {اجباری و منحصر به فرد باشه بین دسته بندی ها نهایتا 250 کارکتر قبوله}"
                                />
                                <InputError
                                    message={errors.slug || localErrors.slug}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="slug">
                                دسته بندی والد (اجباری نیست)
                            </Label>
                            <div className="col-span-1 md:col-span-3">
                                <Select
                                    id="patent_id"
                                    placeholder="یک دسته بندی را انتخاب کنید..."
                                    options={categoryOptions}
                                    value={categoryOptions.find(
                                        (opt) => opt.value === data.parent_id,
                                    )}
                                    onChange={(selected) =>
                                        setData(
                                            'parent_id',
                                            selected ? selected.value : null,
                                        )
                                    }
                                    className="text-black"
                                />
                                <InputError
                                    message={
                                        errors.parent_id ||
                                        localErrors.parent_id
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="meta_title">تیتر متا</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="meta_title"
                                    id="meta_title"
                                    value={data.meta_title}
                                    onChange={(e) =>
                                        setData('meta_title', e.target.value)
                                    }
                                    type="text"
                                    placeholder="[کلمه کلیدی اصلی] + [مزیت یا نتیجه] + [کلمه احساسی/تحریکی] {اجباری بین 50 تا 65 کارکتر}"
                                />
                                <InputError
                                    message={
                                        errors.meta_title ||
                                        localErrors.meta_title
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="meta_description">
                                توضیحات متا
                            </Label>
                            <div className="col-span-1 md:col-span-3">
                                <Textarea
                                    name="meta_description"
                                    id="meta_description"
                                    className={'bg-gray-800'}
                                    value={data.meta_description}
                                    onChange={(e) =>
                                        setData(
                                            'meta_description',
                                            e.target.value,
                                        )
                                    }
                                    placeholder="[کلمه کلیدی اصلی] + [توضیح ساده از محتوا یا مزیت] + [نتیجه یا فایده برای کاربر] + [دعوت به اقدام (CTA)] {اجباری بین 120 تا 150 کارکتر}"
                                />
                                <InputError
                                    message={
                                        errors.meta_description ||
                                        localErrors.meta_description
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="short_description">
                                توضیحات کوتاه
                            </Label>
                            <div className="col-span-1 md:col-span-3">
                                <Textarea
                                    name="short_description"
                                    id="short_description"
                                    className={'bg-gray-800'}
                                    value={data.short_description}
                                    onChange={(e) =>
                                        setData(
                                            'short_description',
                                            e.target.value,
                                        )
                                    }
                                    placeholder="[کلمه کلیدی اصلی] + [توضیح فایده یا کاربرد محتوا] + [نتیجه یا حس مثبت کاربر] {اجباری نهایتا 250 کارکتر}"
                                />
                                <InputError
                                    message={
                                        errors.short_description ||
                                        localErrors.short_description
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="message">
                                توضیحات دسته بندی
                                <InputError
                                    message={
                                        errors.description ||
                                        localErrors.description
                                    }
                                />
                            </Label>
                            <CkEditor
                                value={data.description}
                                onChange={(value) =>
                                    setData('description', value)
                                }
                            />
                            <InputError message={errors.description} />
                        </div>
                        <Button
                            type="submit"
                            className="relative w-full"
                            disabled={processing}
                        >
                            {processing ? 'در حال ذخیره...' : 'ذخیره'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </ManagerLayout>
    );
}
