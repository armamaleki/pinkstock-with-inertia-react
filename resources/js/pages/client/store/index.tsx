import { Head, Link } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';
import type { BreadcrumbItem } from '@/types';
import { home } from '@/routes';
import {
    ArrowDown01,
    ArrowDown10,
    ArrowDownNarrowWide,
    ArrowUpNarrowWide,
} from 'lucide-react';
import Paginate from '@/components/paginate';
import SingleProduct from '@/components/single-product';
import store from '@/routes/store';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'پینک',
        href: home(),
    },
    {
        title: 'فروشگاه پینک ',
        href: '',
    },
];
export default function Index({ productLists, attributeLists }) {
    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head>
                <title>
                    فروشگاه اینترنتی پینک | خرید آنلاین انواع کالا با بهترین
                    قیمت
                </title>
                <meta
                    name="description"
                    content="فروشگاه اینترنتی پینک، جایی برای خرید مطمعن! از لوازم دیجیتال گرفته تا لوازم خانگی و زیبایی. خرید آنلاین با بهترین قیمت، ارسال سریع و پشتیبانی 7/24."
                />
                <meta name="author" content="پینک" />
                <meta name="creator" content="پینک" />
                <meta name="application-name" content="پینک" />
                <meta name="category" content="فروشگاه آنلاین کالاهای متنوع" />
                <link rel="canonical" href="https://pinkstock.net/store" />
                <meta
                    property="og:title"
                    content="فروشگاه اینترنتی پینک | خرید آنلاین انواع کالا با بهترین قیمت"
                />
                <meta
                    property="og:description"
                    content="در فروشگاه بزرگ پینک، هر چیزی که دنبالش هستی پیدا می‌کنی! از گوشی و لپ‌تاپ تا لوازم خانه، مد، زیبایی و بیشتر. تجربه خرید راحت، مطمئن و سریع با پینک."
                />
                <meta property="og:url" content="https://pinkstock.net/store" />
                <meta property="og:site_name" content="پینک" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="/assets/images/pink-store.png"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="فروشگاه اینترنتی پینک - خرید همه‌چیز در یک جا"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="فروشگاه اینترنتی پینک | خرید آنلاین انواع کالا با بهترین قیمت"
                />
                <meta
                    name="twitter:description"
                    content="در پینک، از لوازم دیجیتال تا پوشاک و لوازم خانه، هر چی بخوای هست! با ارسال سریع، قیمت مناسب و پشتیبانی واقعی."
                />
                <meta
                    name="twitter:image"
                    content="/assets/images/pink-store.png"
                />

                {/* Robots */}
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            </Head>
            <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-4 lg:grid-cols-5">
                <div className="hidden h-screen overflow-auto rounded-xl border border-gray-400 bg-gray-800 p-3 shadow-lg shadow-pink-400 md:block">
                    <p className="mb-3 text-2xl font-bold">فیلتر ها</p>
                    <Accordion
                        className={'divide-y divide-pink-400'}
                        type="multiple"

                    >
                        {attributeLists?.data?.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>
                                    <div className={'flex items-center gap-1'}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item?.icon || '',
                                            }}
                                        />
                                        {item?.name}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className={'space-y-2'}>
                                    {item?.values.map((value, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3">
                                            <Checkbox
                                                className={'border border-pink-400'}
                                                id={`item-${i}`} />
                                            <Label htmlFor={`item-${i}`}>
                                                {value?.name}
                                            </Label>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div className="col-span-1 space-y-4 md:col-span-3 lg:col-span-4">
                    <div className="flex items-center gap-1 overflow-x-scroll border-y p-2">
                        <p className="hidden md:block">مرتب سازی بر اساس:</p>
                        <Link
                            href={store.index()}
                            data={{ sort: 'date-desc' }}
                            className="flex items-center gap-2 text-nowrap"
                        >
                            <ArrowDownNarrowWide />
                            جدیدترین
                        </Link>

                        <Link
                            href={store.index()}
                            data={{ sort: 'date-asc' }}
                            className="flex items-center gap-2 text-nowrap"
                        >
                            <ArrowUpNarrowWide />
                            قدیمی‌ترین
                        </Link>

                        <Link
                            href={store.index()}
                            data={{ sort: 'price-desc' }}
                            className="flex items-center gap-2 text-nowrap"
                        >
                            <ArrowDown10 />
                            بیشترین قیمت
                        </Link>

                        <Link
                            href={store.index()}
                            data={{ sort: 'price-asc' }}
                            className="flex items-center gap-2 text-nowrap"
                        >
                            <ArrowDown01 />
                            کمترین قیمت
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {productLists.data.map((productItem, index) => (
                            <SingleProduct
                                key={index}
                                productItem={productItem}
                            />
                        ))}
                    </div>
                    <Paginate meta={productLists.meta} />
                </div>
            </div>
        </HomeLayout>
    );
}
