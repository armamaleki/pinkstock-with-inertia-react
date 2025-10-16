import ManagerLayout from '@/layouts/manager-layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useForm } from '@inertiajs/react';
import user from '@/routes/manager/user';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useState, FormEvent } from 'react';
import type { BreadcrumbItem } from '@/types';
import manager from '@/routes/manager';
interface Role {
    name: string;
}
interface RolesList {
    data: Role[];
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'کاربران',
        href: user.index(),
    },
    {
        title: 'اضافه کردن کاربر جدید',
        href: user.create(),
    },
];
export default function CreateUser({ rolesList }: { rolesList: RolesList }) {
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        name: '',
        phone: '',
        role: '',
    });
    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLocalErrors({});
        clearErrors();
        const newErrors: Record<string, string> = {};
        if (!data.phone) {
            newErrors.phone = 'شماره موبایل الزامی است.';
        } else if (!/^09\d{9}$/.test(data.phone)) {
            newErrors.phone = 'فرمت شماره موبایل معتبر نیست (باید با 09 شروع شود و 11 رقم باشد).';
        }
        if (!data.role) {
            newErrors.role = 'انتخاب نقش الزامی است.';
        }
        if (Object.keys(newErrors).length > 0) {
            setLocalErrors(newErrors);
            return;
        }
        post(user.store(), {
            onSuccess: () => reset('name', 'phone', 'role'),
        });
    };

    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className="bg-gray-800">
                <CardHeader>اضافه کردن کاربر جدید</CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <Label htmlFor="name">نام کاربر</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    type="text"
                                    placeholder="نام کاربر می‌تونه خالی باشه، بیشتر از ۲۵۰ کاراکتر نباشه"
                                />
                                <InputError message={errors.name || localErrors.name} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <Label htmlFor="phone">تلفن همراه</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="phone"
                                    id="phone"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    type="text"
                                    placeholder="تلفن همراه | عدد انگلیسی | ۱۱ رقم | یکتا"
                                    required
                                />
                                <InputError message={errors.phone || localErrors.phone} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <Label htmlFor="role">دسترسی کاربر</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Select
                                    dir="rtl"
                                    value={data.role}
                                    onValueChange={(value) => setData('role', value)}
                                >
                                    <SelectTrigger className="bg-gray-900">
                                        <SelectValue placeholder="انتخاب دسترسی کاربر (برای مشتری‌ها User انتخاب شود)" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>دسترسی</SelectLabel>
                                            {rolesList.data.map((item, index) => (
                                                <SelectItem key={index} value={item.name}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.role || localErrors.role} />
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
    );
}
