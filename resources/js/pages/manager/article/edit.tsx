import CkEditor from '@/components/CkEditor';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ManagerLayout from '@/layouts/manager-layout';
import manager from '@/routes/manager';
import article from '@/routes/manager/article';
import type { BreadcrumbItem } from '@/types';
import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import ImageCropper from '@/components/image-cropper';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'مقالات',
        href: article.index(),
    },
    {
        title: 'اضافه کردن مقاله جدید',
        href: '#',
    },
];
export default function CreateArticle({ articleItem }) {
    const { data, setData, patch, processing, errors, reset, clearErrors } =
        useForm({
            name: articleItem.data.name || '',
            slug: articleItem.data.slug || '',
            meta_title: articleItem.data.meta_title || '',
            meta_description: articleItem.data.meta_description || '',
            short_description: articleItem.data.short_description || '',
            description: articleItem.data.description || '',
        });
    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLocalErrors({});
        clearErrors();
        const newErrors: Record<string, string> = {};

        if (!data.name) {
            newErrors.name = 'نام مقاله الزامی است';
        } else if (data.name.length > 250) {
            newErrors.name = 'نام مقاله نباید بیشتر از ۲۵۰ کاراکتر باشد';
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

        if (!data.description) {
            newErrors.description = 'توضیحات الزامیه ';
        }

        if (Object.keys(newErrors).length > 0) {
            setLocalErrors(newErrors);
            return;
        }
        // @ts-ignore
        patch(article.update(articleItem.data.slug), {
            onSuccess: () => reset(),
        });
    };

    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className="bg-gray-800">
                <CardHeader>اضافه کردن مقاله جدید</CardHeader>
                <CardContent className={'space-y-4'}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="name">نام مقاله</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Input
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    type="text"
                                    placeholder="[کلید اصلی موضوع] + [وعده یا مزیت اصلی] + [نوع محتوا یا زاویه نگاه] + (اختیاری: عدد یا کلمه جادویی){اجباری}"
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
                                    placeholder="فقط انگلیسی وارد کنید (تیتر را به انگلیسی ترجمه کنید){اجباری}"
                                />
                                <InputError
                                    message={errors.slug || localErrors.slug}
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
                            <Label htmlFor="message">متن مقاله</Label>
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

                    <ImageCropper
                        url={article.avatar(articleItem.data.slug)}
                        // onSuccess={res => setAvatar(res.url)}
                    />

                    <img src={articleItem.data.avatar} alt="" />

                </CardContent>
            </Card>
        </ManagerLayout>
    );
}
