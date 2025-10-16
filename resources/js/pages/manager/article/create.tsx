import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ManagerLayout from '@/layouts/manager-layout';
import manager from '@/routes/manager';
import article from '@/routes/manager/article';
import type { BreadcrumbItem } from '@/types';
import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import CkEditor from '@/components/CkEditor';
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
export default function CreateArticle() {
    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            name: '',
            slug: '',
            meta_title: '',
            meta_description: '',
            short_description: '',
            description: '',
        });
    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
    const [avatar, setAvatar] = useState<string | null>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLocalErrors({});
        clearErrors();
        const newErrors: Record<string, string> = {};

        if (!data.name) {
            newErrors.name = 'نام الزامیست';
        }
        if (!data.slug) {
            newErrors.slug = 'آدرس اینترنتی الزامیست';
        }
        if (!data.meta_title) {
            newErrors.meta_title = 'تیتر متا الزامیست';
        } else if (data.meta_title.length > 65) {
            newErrors.meta_title =
                'تیتر متا نمی‌تواند بیشتر از 65 کاراکتر باشد';
        }

        if (!data.meta_description) {
            newErrors.meta_description = 'توضیح متا الزامیست';
        } else if (data.meta_description.length > 150) {
            newErrors.meta_description =
                'توضیح متا نمی‌تواند بیشتر از 150 کاراکتر باشد';
        }

        if (!data.short_description) {
            newErrors.short_description = 'توضیح کوتاه الزامیست';
        } else if (data.short_description.length > 250) {
            newErrors.short_description =
                'توضیح کوتاه نمی‌تواند بیشتر از 250 کاراکتر باشد';
        }

        if (Object.keys(newErrors).length > 0) {
            setLocalErrors(newErrors);
            return;
        }
        // @ts-ignore
        post(article.store(), {
            onSuccess: () => reset('name', 'phone', 'role'),
        });
    };

    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className="bg-gray-800">
                <CardHeader>اضافه کردن مقاله جدید</CardHeader>
                <CardContent>
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
                                    message={errors.meta_title || localErrors.meta_title}
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
                                        setData('meta_description', e.target.value)
                                    }
                                    placeholder="[موضوع اصلی] + [مزیت یا نتیجه برای کاربر] + [دعوت به اقدام یا جذابیت]"
                                />
                                <InputError
                                    message={errors.meta_description || localErrors.meta_description}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="short_description">توضیح کوتاه</Label>
                            <div className="col-span-1 md:col-span-3">
                                <Textarea
                                    name="short_description"
                                    id="short_description"
                                    value={data.short_description}
                                    onChange={(e) =>
                                        setData('short_description', e.target.value)
                                    }
                                    placeholder="[موضوع اصلی] + [مزیت یا نتیجه برای کاربر] + [دعوت به اقدام یا جذابیت]"
                                />
                                <InputError
                                    message={errors.short_description || localErrors.short_description}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-4">
                            <Label htmlFor="short_description">آواتار مقاله</Label>
                            {/*<ImageCropper*/}
                            {/*    aspect={16/9}*/}
                            {/*    url={''}*/}
                            {/*    onSuccess={()=>{*/}
                            {/*        console.log('dd');}}*/}
                            {/*/>*/}
                        </div>
                        <div>
                            <Label htmlFor="message">متن مقاله</Label>
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
