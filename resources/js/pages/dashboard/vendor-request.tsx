import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import {
    validateAbout,
    validateSlug,
    validateStoreName,
} from '@/lib/validators';
import dashboard from '@/routes/dashboard';
import type { BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'حساب کاربری',
        href: dashboard.index(),
    },
    {
        title: 'درخواست فروشنده',
        href: '#',
    },
];

export default function ({ requestStatus }: any) {
    const { props } = usePage();
    const { success, error } = props.flash || {};
    useEffect(() => {
        if (success) {
            toast.success(success);
        }

        if (error) {
            toast.error(error);
        }
    }, [success, error]);
    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            store_name: '',
            slug: '',
            about: '',
            phone: '',
            whatsapp: '',
            email: '',
            website: '',
            address: '',
            city: '',
            state: '',
            postal_code: '',
            latitude: '',
            longitude: '',
            in_person_buy: '',
            working_days: '',
            shipping_methods: '',
            national_id: '',
            economic_code: '',
        });

    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
    const handleChange = (name: string, value: string) => {
        setData(name, value);

        let error = '';

        if (name === 'store_name') error = validateStoreName(value);
        if (name === 'slug') error = validateSlug(value);
        if (name === 'about') error = validateAbout(value);

        setLocalErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearErrors();
        setLocalErrors({});

        const store_name_err = validateStoreName(data.store_name);
        const slug_err = validateSlug(data.slug);
        const about_err = validateAbout(data.about);

        if (store_name_err || slug_err || about_err) {
            setLocalErrors({
                store_name: store_name_err,
                slug: slug_err,
                about: about_err,
            });
            return;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="درخواست فروشنده شدن" />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {requestStatus === null && (
                <div className="flex h-screen items-center justify-center">
                    <Link
                        href={dashboard.vendorRequest.request()}
                        method="post"
                        as="button"
                        className="rounded-lg bg-pink-600 px-6 py-3 text-white"
                    >
                        درخواست فروشنده شدن
                    </Link>
                </div>
            )}

            {requestStatus === 'pending' && (
                <div className="flex h-screen items-center justify-center">
                    <div className="text-xl text-yellow-600">
                        درخواست شما در حال بررسی است...
                    </div>
                </div>
            )}
            {requestStatus === 'rejected' && (
                <div className="flex h-screen items-center justify-center">
                    <div className={'flex flex-col items-center space-y-4'}>
                        <div className="text-xl text-red-600">
                            درخواست شما رد شده است.
                        </div>
                        <Link
                            href={dashboard.vendorRequest.request()}
                            method="post"
                            as="button"
                            className="rounded-lg bg-pink-600 px-6 py-3 text-white"
                        >
                            ارسال مجدد درخواست
                        </Link>
                    </div>
                </div>
            )}
            {requestStatus === 'approved' && (
                <Card className="m-3">
                    <CardHeader>
                        برای ارسال درخواست فیلد های زیر را پر کنید.
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="store_name">نام فروشگاه</Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="store_name"
                                        value={data.store_name}
                                        onChange={(e) =>
                                            handleChange(
                                                'store_name',
                                                e.target.value,
                                            )
                                        }
                                        type="text"
                                        placeholder="(اجباری) {فقط حروف فارسی}{بین 10 تا 50 کارکتر} {از کلمه پینک نمیتونید استفاده کنید}{منحصر به فرد باید باشه}"
                                    />
                                    <InputError
                                        message={
                                            errors.store_name ||
                                            localErrors.store_name
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="store_name">
                                    آدرس اینترنتی
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="slug"
                                        value={data.slug}
                                        onChange={(e) =>
                                            handleChange('slug', e.target.value)
                                        }
                                        type="text"
                                        placeholder="اسلاگ انگلیسی (unique) مثل: digital bartar"
                                    />
                                    <InputError
                                        message={
                                            errors.slug || localErrors.slug
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="about">
                                    توضیح مختصر و کوتاهی در مورد فروشگاه خودتان
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Textarea
                                        name="about"
                                        value={data.about}
                                        onChange={(e) =>
                                            handleChange(
                                                'about',
                                                e.target.value,
                                            )
                                        }
                                        placeholder={'بین 5 تا 10 کارکتر فقط حروف فارسی به طور مثال:عرضه مستقیم تجهیزات امنیتی در در تهران'}
                                    />
                                    <InputError
                                        message={
                                            errors.about || localErrors.about
                                        }
                                    />
                                </div>
                            </div>
                            <Button className={'w-full'}>
                                ثبت اطلاعات فروشگاه
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            )}
        </AppLayout>
    );
}
