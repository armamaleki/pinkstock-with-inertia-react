import InputError from '@/components/input-error';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ManagerLayout from '@/layouts/manager-layout';
import manager from '@/routes/manager';
import product from '@/routes/manager/product';
import type { BreadcrumbItem } from '@/types';
import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import CkEditor from '@/components/CkEditor';
import Select from 'react-select';

export default function ({ productCategoriesLists }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'مدیریت',
            href: manager.index(),
        },
        {
            title: 'محصولات',
            href: product.index(),
        },
        {
            title: 'اضافه کردن محصول جدید',
            href: '#',
        },
    ];

    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            name: '',
            slug: '',
            price: '',
            quantity: '',
            meta_title: '',
            meta_description: '',
            short_description: '',
            description: '',
            category: [],
        });
    const categoryOptions = productCategoriesLists.data.map((category)=>({
        value:category.id,
        label:category.name,
    }))
    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLocalErrors({});
        clearErrors();
        const newErrors: Record<string, string> = {};

        if (!data.name) {
            newErrors.name = 'نام محصول الزامی است';
        } else if (data.name.length > 250) {
            newErrors.name = 'نام محصول نباید بیشتر از ۲۵۰ کاراکتر باشد';
        }
        if (!data.slug) {
            newErrors.slug = 'آدرس اینترنتی الزامی است';
        } else if (data.slug.length > 250) {
            newErrors.slug = 'آدرس اینترنتی نباید بیشتر از ۲۵۰ کاراکتر باشد';
        }
        if (!data.quantity) {
            newErrors.quantity = 'موجودی الزامیست';
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
                'توضیح کوتاه نباید بیشتر از 250 کاراکتر باشد';
        }

        if (!data.description) {
            newErrors.description = 'توضیحات الزامیه ';
        }

        if (!data.category.length) {
            newErrors.category = 'حداقل یک دسته بندی انتخاب کنید';
        }


        if (Object.keys(newErrors).length > 0) {
            setLocalErrors(newErrors);
            return;
        }
        post(product.store(), {
            onSuccess: () => reset(),
        })
    };
    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className="bg-gray-800">
                <CardHeader>اضافه کردن محصول جدید</CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="name">نام محصول</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    type="text"
                                    placeholder="[نوع محصول] + [برند] + [ویژگی کلیدی یا مدل] + [ویژگی خاص یا مزیت]{اجباری}"
                                />
                                <InputError
                                    message={errors.name || localErrors.name}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="slug">آدرس اینترنتی</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="slug"
                                    id="slug"
                                    value={data.slug}
                                    onChange={(e) =>
                                        setData('slug', e.target.value)
                                    }
                                    type="text"
                                    placeholder="[نوع محصول] + [برند] + [ویژگی کلیدی یا مدل] + [ویژگی خاص یا مزیت]{اجباری , ترجیها انگلیسی باشد}"
                                />
                                <InputError
                                    message={errors.slug || localErrors.slug}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="category">دسته بندی محصول</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Select
                                    id="category"
                                    isMulti
                                    placeholder="چند دسته بندی انتخاب کنید..."
                                    options={categoryOptions}
                                    value={categoryOptions.filter(opt => data.category.includes(opt.value))}
                                    onChange={(selected) =>
                                        setData('category', selected ? selected.map(opt => opt.value) : [])
                                    }
                                    className="text-black"
                                />
                                <InputError message={errors.category || localErrors.category} />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="price">قیمت محصول</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="price"
                                    id="price"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData('price', e.target.value)
                                    }
                                    type="text"
                                    placeholder="{درصورت خالی بودن میزنه ناموجود و قابل خرید نیست }"
                                />
                                <InputError
                                    message={errors.price || localErrors.price}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="quantity">موجودی انبار</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="quantity"
                                    id="quantity"
                                    value={data.quantity}
                                    onChange={(e) =>
                                        setData('quantity', e.target.value)
                                    }
                                    type="text"
                                    placeholder="{اجباریه و فقط عدد وارد کنید در سایت نمایش داده میشود}"
                                />
                                <InputError
                                    message={errors.quantity || localErrors.quantity}
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
                                    placeholder="[کلمه کلیدی اصلی] + [مزیت/نتیجه جذاب]"
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
                            <Label htmlFor="meta_description">توضیح متا </Label>
                            <div className="col-span-1 md:col-span-3">
                                <Textarea
                                    name="meta_description"
                                    id="meta_description"
                                    value={data.meta_description}
                                    onChange={(e) =>
                                        setData(
                                            'meta_description',
                                            e.target.value,
                                        )
                                    }
                                    placeholder="[موضوع اصلی] + [مزیت یا نتیجه برای کاربر] + [دعوت به اقدام یا جذابیت]"
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
                                توضیح کوتاه
                            </Label>
                            <div className="col-span-1 md:col-span-3">
                                <Textarea
                                    name="short_description"
                                    id="short_description"
                                    value={data.short_description}
                                    onChange={(e) =>
                                        setData(
                                            'short_description',
                                            e.target.value,
                                        )
                                    }
                                    placeholder="[موضوع اصلی] + [مزیت یا نتیجه برای کاربر] + [دعوت به اقدام یا جذابیت]"
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
                            <Label htmlFor="message">توضیحات محصول</Label>
                            <InputError
                                message={
                                    errors.description ||
                                    localErrors.description
                                }
                            />
                            <CkEditor
                                value={data.description}
                                onChange={(value) =>
                                    setData('description', value)
                                }
                            />

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
