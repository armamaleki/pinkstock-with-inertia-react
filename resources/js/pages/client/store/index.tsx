import { Head, Link } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';
import type { BreadcrumbItem } from '@/types';
import { home } from '@/routes';
import { ArrowDown01, ArrowDownNarrowWide, ArrowUpNarrowWide } from 'lucide-react';
import Paginate from '@/components/paginate';
import SingleProduct from '@/components/single-product';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'پینک',
        href: home(),
    },
    {
        title: 'فروشگاه پینک ',
        href: "",
    },
];
export default function Index({productLists}) {
    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head>
                <title>فروشگاه اینترنتی پینک | خرید آنلاین انواع کالا با بهترین قیمت</title>
                <meta
                    name="description"
                    content="فروشگاه اینترنتی پینک، جایی برای خرید مطمعن! از لوازم دیجیتال گرفته تا لوازم خانگی و زیبایی. خرید آنلاین با بهترین قیمت، ارسال سریع و پشتیبانی 7/24."
                />
                <meta name="author" content="پینک" />
                <meta name="creator" content="پینک" />
                <meta name="application-name" content="پینک" />
                <meta name="category" content="فروشگاه آنلاین کالاهای متنوع" />

                {/* Canonical */}
                <link rel="canonical" href="https://pink.net/store" />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="فروشگاه اینترنتی پینک | خرید آنلاین انواع کالا با بهترین قیمت"
                />
                <meta
                    property="og:description"
                    content="در فروشگاه بزرگ پینک، هر چیزی که دنبالش هستی پیدا می‌کنی! از گوشی و لپ‌تاپ تا لوازم خانه، مد، زیبایی و بیشتر. تجربه خرید راحت، مطمئن و سریع با پینک."
                />
                <meta property="og:url" content="https://pink.net/store" />
                <meta property="og:site_name" content="پینک" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/images/pink-store.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="فروشگاه اینترنتی پینک - خرید همه‌چیز در یک جا" />

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
                <meta name="twitter:image" content="/assets/images/pink-store.png" />

                {/* Robots */}
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            </Head>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div
                    className="border hidden md:block border-gray-400 rounded-xl bg-gray-800 h-screen  overflow-scroll p-3 shadow-lg shadow-sky-400">
                    <p className="text-2xl font-bold mb-3">
                        فیلتر ها
                    </p>
                </div>
                <div className="col-span-1 md:col-span-3 lg:col-span-4 space-y-4">
                    <div className="border-y p-2  gap-1 items-center flex overflow-x-scroll">
                        <p className="hidden md:block">مرتب سازی بر اساس:</p>
                        <Link href={'#'}
                           className="flex text-nowrap gap-2 items-center  ">
                            <ArrowDownNarrowWide/>
                            جدیدترین
                        </Link>
                        <Link href="#"
                           className="flex text-nowrap gap-2 items-center  ">
                            <ArrowUpNarrowWide/>
                            بیشترین قیمت
                        </Link>
                        <Link href="#"
                           className="flex text-nowrap gap-2 items-center">
                            <ArrowDown01/>
                            کمترین قیمت
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
                        {productLists.data.map((productitem , index)=>(
                            <SingleProduct key={index} prodcutItem={productitem}/>
                        ))}
                    </div>
                    <Paginate meta={productLists.meta}/>
                </div>
            </div>
        </HomeLayout>
    );
}
