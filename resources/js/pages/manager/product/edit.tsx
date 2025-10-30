import CkEditor from '@/components/CkEditor';
import ImageCropper from '@/components/image-cropper';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ManagerLayout from '@/layouts/manager-layout';
import manager from '@/routes/manager';
import product from '@/routes/manager/product';
import type { BreadcrumbItem } from '@/types';
import { useForm } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

export default function ({ productCategoriesLists, productItem ,attributesList }) {
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
            title: 'ویرایش کردن محصول',
            href: '#',
        },
    ];
    const { data, setData, patch, processing, errors, reset, clearErrors } =
        useForm({
            name: productItem.data.name || '',
            slug: productItem.data.slug || '',
            price: productItem.data.price || '',
            quantity: productItem.data.quantity || '',
            meta_title: productItem.data.meta_title || '',
            meta_description: productItem.data.meta_description || '',
            short_description: productItem.data.short_description || '',
            description: productItem.data.description || '',
            category: productItem.data.categories?.map(category => category.id) || [],
            attributes: [],
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

        patch(product.update(productItem.data.slug), {
            onSuccess: () => reset(),
        });
    };
    const initialAttributes = productItem.data.attributes?.length
        ? productItem.data.attributes.map(attr => ({
            name: attr.name,
            value: attr.value
        }))
        : [{ name: null, value: null }];
    const [attributes, setAttributes] = useState(initialAttributes);
    const [valuesOptions, setValuesOptions] = useState({});

    const attributeOptions = attributesList.data.map(item => ({
        value: item.name,
        label: item.name
    }));
    useEffect(() => {
        async function loadValues() {
            for (const attr of initialAttributes) {
                if (attr.name) {
                    const res = await axios.get(`/manager/attribute/${attr.name}/values`);
                    const formattedValues = res.data.values.map(v => ({ label: v, value: v }));
                    setValuesOptions(prev => ({
                        ...prev,
                        [attr.name]: formattedValues,
                    }));
                }
            }
            setData("attributes", initialAttributes);
        }
        loadValues();
    }, []);

    const handleAttributeChange = async (selected: any, index: number) => {
        const newAttributes = [...attributes];
        newAttributes[index].name = selected.value;
        newAttributes[index].value = null; // مقدار قبلی پاک شود
        setAttributes(newAttributes);
        setData('attributes', newAttributes);

        try {
            const res = await axios.get(`/manager/attribute/${selected.value}/values`);
            const formattedValues = res.data.values.map((v: string) => ({ label: v, value: v }));
            setValuesOptions(prev => ({ ...prev, [selected.value]: formattedValues }));
        } catch (err) {
            console.error(err);
            setValuesOptions(prev => ({ ...prev, [selected.value]: [] }));
        }
    };

    const handleAttributeValueChange = (selected: any, index: number) => {
        const newAttributes = [...attributes];
        newAttributes[index].value = selected.value;
        setAttributes(newAttributes);
        setData('attributes', newAttributes);
    };

    const removeAttribute = (index: number) => {
        const newAttributes = attributes.filter((_, i) => i !== index);
        setAttributes(newAttributes);
        setData('attributes', newAttributes);
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
                        <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-4">
                            <div className="flex justify-between items-center">
                                <Label>ویژگی های محصول</Label>
                                <Button type="button" variant="destructive" onClick={() => {
                                    const newAttrs = [...attributes, { name: null, value: null }];
                                    setAttributes(newAttrs);
                                    setData('attributes', newAttrs);
                                }}>ویژگی جدید</Button>
                            </div>
                            <div className="space-y-2 col-span-1 md:col-span-3">
                                {attributes.map((attr, index) => (
                                    <div key={index} className="grid grid-cols-3 gap-4 bg-gray-700 p-3 rounded">
                                        <Select
                                            placeholder="عنوان ویژگی"
                                            value={attr.name ? { label: attr.name, value: attr.name } : null}
                                            onChange={selected => handleAttributeChange(selected, index)}
                                            options={attributeOptions}
                                            className="text-black"
                                        />

                                        <Select
                                            placeholder="مقدار ویژگی"
                                            value={attr.value ? { label: attr.value, value: attr.value } : null}
                                            onChange={selected => handleAttributeValueChange(selected, index)}
                                            options={valuesOptions[attr.name] || []}
                                            className="text-black"
                                        />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            className="w-full"
                                            onClick={() => removeAttribute(index)}
                                        >
                                            حذف
                                        </Button>
                                    </div>
                                ))}
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
                                    message={
                                        errors.quantity || localErrors.quantity
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

                    <ImageCropper url={product.avatar(productItem.data.slug)} />
                    <img src={productItem.data.avatar} alt="" />
                    <ImageCropper
                        text={'آپلود گالری'}
                        url={product.gallery(productItem.data.slug)}
                    />
                    <div className={'flex flex-wrap'}>
                        {productItem.data.galleries.map((gallery, index) => (
                            <img key={index} src={gallery} alt="" />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </ManagerLayout>
    );
}
