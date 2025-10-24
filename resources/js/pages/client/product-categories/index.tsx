import HomeLayout from '@/layouts/home-layout';
import type { BreadcrumbItem } from '@/types';
import { home } from '@/routes';
import { Head, Link } from '@inertiajs/react';
import productCategory from '@/routes/product-category';
import Paginate from '@/components/paginate';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'پینک استوک',
        href: home(),
    },
    {
        title: 'دسته بندی محصولات پینک',
        href: '',
    },
];
export default function ({ productCategoriesList }) {
    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head>
                {/* Title */}
                <title>خرید لپ تاپ استوک و کارکرده با قیمت مناسب | فروشگاه پینک استوک</title>

                {/* Description */}
                <meta
                    name="description"
                    content="خرید انواع لپ تاپ استوک و دست دوم از برندهای معتبر مانند لنوو، اچ‌پی و دل با بهترین قیمت و ضمانت ۳۰ روزه سلامت و تعویض در پینک استوک. انتخابی هوشمندانه برای صرفه‌جویی و کیفیت بالا."
                />

                {/* Author & App Info */}
                <meta name="author" content="پینک استوک" />
                <meta name="creator" content="پینک استوک" />
                <meta name="application-name" content="پینک استوک" />
                <meta name="category" content="فروشگاه لپ تاپ استوک و دست دوم" />

                {/* Canonical */}
                <link rel="canonical" href="https://pinkstock.net/product-categories" />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="خرید لپ تاپ استوک و کارکرده با قیمت مناسب | فروشگاه پینک استوک"
                />
                <meta
                    property="og:description"
                    content="خرید انواع لپ تاپ استوک و دست دوم از برندهای معتبر مانند لنوو، اچ‌پی و دل با بهترین قیمت و ضمانت ۳۰ روزه سلامت و تعویض در پینک استوک. انتخابی هوشمندانه برای صرفه‌جویی و کیفیت بالا."
                />
                <meta property="og:url" content="https://pinkstock.net/product-categories" />
                <meta property="og:site_name" content="پینک استوک" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/images/laptop.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="نمایش لپ‌تاپ‌های استوک و کارکرده موجود در فروشگاه پینک استوک"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="خرید لپ تاپ استوک و کارکرده با قیمت مناسب | فروشگاه پینک استوک"
                />
                <meta
                    name="twitter:description"
                    content="خرید انواع لپ تاپ استوک و دست دوم از برندهای معتبر با بهترین قیمت و ضمانت سلامت در فروشگاه پینک استوک."
                />
                <meta name="twitter:image" content="/assets/images/laptop.png" />

                {/* Robots */}
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            </Head>

            <h1 className="font-bold">دسته بندی محصولات</h1>
            <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-3 lg:grid-cols-4">
                {productCategoriesList.data.map((categoryItem, index) => (
                    <Link
                        key={index}
                        href={productCategory.show(categoryItem?.slug)}
                        className="group flex flex-col items-center p-2 text-center"
                    >
                        <img
                            src={categoryItem?.avatar}
                            className={`origin-top rounded-full transition delay-150 duration-300 group-hover:scale-50`}
                            alt={categoryItem?.name}
                        />
                        <div className="transition delay-150 duration-300 origin-top group-hover:-translate-y-30 ">
                            <h2 className="font-bold">
                                {categoryItem?.name}
                            </h2>
                            <p className="transition delay-150 duration-300 opacity-0  group-hover:opacity-100">
                                {categoryItem?.short_description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <Paginate meta={productCategoriesList.meta}/>
        </HomeLayout>
    );
}
