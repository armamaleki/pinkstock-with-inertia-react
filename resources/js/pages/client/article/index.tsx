import HomeLayout from '@/layouts/home-layout';
import { Head } from '@inertiajs/react';
import SingleArticle from '@/components/single-article';
import Paginate from '@/components/paginate';
import type { BreadcrumbItem } from '@/types';
import { home } from '@/routes';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'پینک استوک',
        href: home(),
    },
    {
        title: 'مقالات پینک',
        href: "",
    },
];

export default function Article({ArticlesList}) {
    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head>
                <title>مقالات آموزشی و راهنمای خرید لپ تاپ استوک | پینک استوک</title>

                {/* Description */}
                <meta
                    name="description"
                    content="در بخش مقالات پینک استوک، نکات کاربردی درباره خرید لپ تاپ استوک، بررسی مدل‌های محبوب، مقایسه برندها و راهنمای انتخاب لپ تاپ کارکرده را بخوانید. خریدی آگاهانه و مطمئن با پینک استوک."
                />

                {/* Author & App Info */}
                <meta name="author" content="پینک استوک" />
                <meta name="creator" content="پینک استوک" />
                <meta name="application-name" content="پینک استوک" />
                <meta name="category" content="فروشگاه لپ تاپ استوک و دست دوم" />

                {/* Canonical */}
                <link rel="canonical" href="https://pinkstock.net/articles" />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="مقالات آموزشی و راهنمای خرید لپ تاپ استوک | پینک استوک"
                />
                <meta
                    property="og:description"
                    content="در بخش مقالات پینک استوک، نکات کاربردی درباره خرید لپ تاپ استوک، بررسی مدل‌های محبوب، مقایسه برندها و راهنمای انتخاب لپ تاپ کارکرده را بخوانید. خریدی آگاهانه و مطمئن با پینک استوک."
                />
                <meta property="og:url" content="https://pinkstock.net/articles" />
                <meta property="og:site_name" content="پینک استوک" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/images/laptop.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="فروشگاه لپ‌تاپ استوک و دست دوم پینک استوک"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="مقالات آموزشی و راهنمای خرید لپ تاپ استوک | پینک استوک"
                />
                <meta
                    name="twitter:description"
                    content="در بخش مقالات پینک استوک، نکات کاربردی درباره خرید لپ تاپ استوک، بررسی مدل‌های محبوب، مقایسه برندها و راهنمای انتخاب لپ تاپ کارکرده را بخوانید. خریدی آگاهانه و مطمئن با پینک استوک."
                />
                <meta name="twitter:image" content="/assets/images/laptop.png" />

                {/* Robots */}
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            </Head>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ArticlesList.data.map((articleItem , index)=>(
                            <SingleArticle key={index} articleValue={articleItem}/>
                        ))}
                    </div>
                </div>
            </div>
            <Paginate meta={ArticlesList.meta}/>
        </HomeLayout>
    );
}
