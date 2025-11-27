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
    validateWhatsapp,
    validateEmail,
    validateAddress,
    validateCity,
    validateEconomicCode,
    validateInPersonBuy,
    validateNationalId,
    validatePostalCode,
    validateShippingMethods,
    validateState,
    validateWebsite,
    validateWorkingDays,
    validatePhone,
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
        if (name === 'phone') error= validatePhone(value);
        if (name === 'whatsapp') error= validateWhatsapp(value);
        if (name === 'email') error= validateEmail(value);
        if (name === 'website') error= validateWebsite(value);
        if (name === 'address') error= validateAddress(value);
        if (name === 'city') error= validateCity(value);
        if (name === 'state') error= validateState(value);
        if (name === 'postal_code') error= validatePostalCode(value);
        if (name === 'in_person_buy') error= validateInPersonBuy(value);
        if (name === 'working_days') error= validateWorkingDays(value);
        if (name === 'shipping_methods') error= validateShippingMethods(value);
        if (name === 'national_id') error= validateNationalId(value);
        if (name === 'economic_code') error= validateEconomicCode(value);

        setLocalErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearErrors();
        setLocalErrors({});
        const errors = {
            store_name: validateStoreName(data.store_name),
            slug: validateSlug(data.slug),
            about: validateAbout(data.about),
            phone: validatePhone(data.phone),
            whatsapp: validateWhatsapp(data.whatsapp),
            email: validateEmail(data.email),
            website: validateWebsite(data.website),
            address: validateAddress(data.address),
            city: validateCity(data.city),
            state: validateState(data.state),
            postal_code: validatePostalCode(data.postal_code),
            in_person_buy: validateInPersonBuy(data.in_person_buy),
            working_days: validateWorkingDays(data.working_days),
            shipping_methods: validateShippingMethods(data.shipping_methods),
            national_id: validateNationalId(data.national_id),
            economic_code: validateEconomicCode(data.economic_code),
        };
        const hasError = Object.values(errors).some((err) => err !== null && err !== '');

        if (hasError) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setLocalErrors(errors);
            return;
        }
        console.log("Form submitted successfully");
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
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="phone">
                                    شماره همراه فروشگاه
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="phone"
                                        value={data.phone}
                                        onChange={(e) =>
                                            handleChange('phone', e.target.value)
                                        }
                                        type="text"
                                        placeholder="اجباری در سایت نمایش داده میشود 11 کارکتر و حتما با 09 شروع شود "
                                    />
                                    <InputError
                                        message={
                                            errors.phone || localErrors.phone
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="whatsapp">
                                    شماره واتس اپ فروشگاه
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="whatsapp"
                                        value={data.whatsapp}
                                        onChange={(e) =>
                                            handleChange('whatsapp', e.target.value)
                                        }
                                        type="text"
                                        placeholder="اجباری در سایت نمایش داده میشود 11 کارکتر و حتما با 09 شروع شود "
                                    />
                                    <InputError
                                        message={
                                            errors.whatsapp || localErrors.whatsapp
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="email">
                                    آدرس ایمیل
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            handleChange('email', e.target.value)
                                        }
                                        type="email"
                                        placeholder="از ایمیل معتبری استفاده کنید example@gmail.com"
                                    />
                                    <InputError
                                        message={
                                            errors.email || localErrors.email
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="website">
                                    آدرس وبسایت
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="website"
                                        value={data.website}
                                        onChange={(e) =>
                                            handleChange('website', e.target.value)
                                        }
                                        type="url"
                                        placeholder="example.com"
                                    />
                                    <InputError
                                        message={
                                            errors.website || localErrors.website
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="address">
                                    آدرس فروشگاه
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="address"
                                        value={data.address}
                                        onChange={(e) =>
                                            handleChange('address', e.target.value)
                                        }
                                        type="text"
                                        placeholder="تهران پلاک 1"
                                    />
                                    <InputError
                                        message={
                                            errors.address || localErrors.address
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="city">
                                    شهر
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="city"
                                        value={data.city}
                                        onChange={(e) =>
                                            handleChange('city', e.target.value)
                                        }
                                        type="text"
                                        placeholder="تهران"
                                    />
                                    <InputError
                                        message={
                                            errors.city || localErrors.city
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="state">
                                    استان
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="state"
                                        value={data.state}
                                        onChange={(e) =>
                                            handleChange('state', e.target.value)
                                        }
                                        type="text"
                                        placeholder="تهران"
                                    />
                                    <InputError
                                        message={
                                            errors.state || localErrors.state
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="postal_code">
                                    کد پستی
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="postal_code"
                                        value={data.postal_code}
                                        onChange={(e) =>
                                            handleChange('postal_code', e.target.value)
                                        }
                                        type="text"
                                        placeholder="کد پستی"
                                    />
                                    <InputError
                                        message={
                                            errors.postal_code || localErrors.postal_code
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                                <Label htmlFor="national_id">
                                    کد ملی
                                </Label>
                                <div className="col-span-1 md:col-span-3">
                                    <Input
                                        name="postal_codestate"
                                        value={data.national_id}
                                        onChange={(e) =>
                                            handleChange('national_id', e.target.value)
                                        }
                                        type="text"
                                        placeholder="کد ملی"
                                    />
                                    <InputError
                                        message={
                                            errors.national_id || localErrors.national_id
                                        }
                                    />
                                </div>
                            </div>

                            <Button className={'w-full'}>
                                ثبت اطلاعات فروشگاه
                            </Button>
                        </form>

                        in_person_buy
                        working_days
                        shipping_methods

                        economic_code
                    </CardContent>
                </Card>
            )}
        </AppLayout>
    );
}
