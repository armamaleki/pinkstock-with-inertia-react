import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ManagerLayout from '@/layouts/manager-layout';
import user from '@/routes/manager/user';
import { useForm } from '@inertiajs/react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { FormEvent, useEffect, useState } from 'react';
import type { BreadcrumbItem } from '@/types';
import manager from '@/routes/manager';

// ---------- Types ----------
interface Role {
    name: string;
}

interface RolesList {
    data: Role[];
}

interface UserData {
    id: number;
    name: string;
    phone: string;
    role: string;
}

interface UserItem {
    data: UserData;
}

// ---------- Component ----------
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
        title: 'ویرایش کاربر',
        href: '#',
    },
];
export default function EditUser({
    rolesList,
    userItem,
}: {
    rolesList: RolesList;
    userItem: UserItem;
}) {
    console.log(userItem);
    const { data, setData, patch, processing, errors, clearErrors } =
        useForm({
            name: userItem.data.name || '',
            phone: userItem.data.phone || '',
            role: userItem.data.role || '',
        });

    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        // در صورت تغییر داده‌های سرور، ورودی‌ها هم بروز می‌شن
        setData({
            name: userItem.data.name || '',
            phone: userItem.data.phone || '',
            role: userItem.data.role || '',
        });
    }, [userItem]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLocalErrors({});
        clearErrors();

        const newErrors: Record<string, string> = {};

        if (!data.phone) {
            newErrors.phone = 'شماره موبایل الزامی است.';
        } else if (!/^09\d{9}$/.test(data.phone)) {
            newErrors.phone =
                'فرمت شماره موبایل معتبر نیست (باید با 09 شروع شود و 11 رقم باشد).';
        }

        if (!data.role) {
            newErrors.role = 'انتخاب نقش الزامی است.';
        }

        if (Object.keys(newErrors).length > 0) {
            setLocalErrors(newErrors);
            return;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        patch(user.update(userItem.data.id), {
            preserveScroll: true,
        });
    };

    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className="bg-gray-800">
                <CardHeader>ویرایش اطلاعات کاربر</CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* نام کاربر */}
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="name">نام کاربر</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    type="text"
                                    placeholder="نام کاربر (اختیاری، حداکثر ۲۵۰ کاراکتر)"
                                />
                                <InputError
                                    message={errors.name || localErrors.name}
                                />
                            </div>
                        </div>

                        {/* شماره موبایل */}
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="phone">تلفن همراه</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="phone"
                                    id="phone"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData('phone', e.target.value)
                                    }
                                    type="text"
                                    placeholder="تلفن همراه | عدد انگلیسی | ۱۱ رقم | یکتا"
                                    required
                                />
                                <InputError
                                    message={errors.phone || localErrors.phone}
                                />
                            </div>
                        </div>

                        {/* نقش کاربر */}
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="role">دسترسی کاربر</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Select
                                    dir="rtl"
                                    value={data.role}
                                    onValueChange={(value) =>
                                        setData('role', value)
                                    }
                                >
                                    <SelectTrigger className="bg-gray-900">
                                        <SelectValue placeholder="انتخاب دسترسی کاربر (برای مشتری‌ها User انتخاب شود)" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>دسترسی</SelectLabel>
                                            {rolesList.data.map(
                                                (item, index) => (
                                                    <SelectItem
                                                        key={index}
                                                        value={item.name}
                                                    >
                                                        {item.name}
                                                    </SelectItem>
                                                ),
                                            )}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <InputError
                                    message={errors.role || localErrors.role}
                                />
                            </div>
                        </div>

                        {/* دکمه ثبت */}
                        <Button
                            type="submit"
                            className="relative w-full"
                            disabled={processing}
                        >
                            {processing ? 'در حال ذخیره...' : 'ذخیره تغییرات'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </ManagerLayout>
    );
}
