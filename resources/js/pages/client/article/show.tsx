import { Head } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';

export default function Show({articleItem}) {
    return (
        <HomeLayout>
            <Head>
                <title>
                    خرید لپ تاپ استوک و دست دوم با قیمت مناسب | پینک استوک
                </title>
                <meta
                    name="description"
                    content="پینک استوک فروشگاه تخصصی خرید لپ تاپ استوک و دست دوم تست شده و کارکرده با ضمانت 30 روزه سلامت و تعویض. عرضه انواع لپ تاپ‌ برندهای معتبر لنوو، اچ پی و دل با بهترین قیمت."
                />
                <meta name="author" content="پینک استوک" />
                <meta name="creator" content="پینک استوک" />
                <meta name="application-name" content="پینک استوک" />
                <meta
                    name="category"
                    content="فروشگاه لپ تاپ استوک و دست دوم"
                />
                <link rel="canonical" href="https://pinkstock.net" />
                <meta
                    property="og:title"
                    content="خرید لپ تاپ استوک و دست دوم با قیمت مناسب | پینک استوک"
                />
                <meta
                    property="og:description"
                    content="پینک استوک فروشگاه تخصصی خرید لپ تاپ استوک و دست دوم تست شده و کارکرده با ضمانت 30 روزه سلامت و تعویض. عرضه انواع لپ تاپ‌ برندهای معتبر لنوو، اچ پی و دل با بهترین قیمت."
                />
                <meta property="og:url" content="https://pinkstock.net" />
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
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="خرید لپ تاپ استوک و دست دوم با قیمت مناسب | پینک استوک"
                />
                <meta
                    name="twitter:description"
                    content="پینک استوک فروشگاه تخصصی خرید لپ تاپ استوک و دست دوم تست شده و کارکرده با ضمانت 30 روزه سلامت و تعویض. عرضه انواع لپ تاپ‌ برندهای معتبر لنوو، اچ پی و دل با بهترین قیمت."
                />
                <meta
                    name="twitter:image"
                    content="/assets/images/laptop.png"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            </Head>
            <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 `}>
                <div className={`col-span-1 md:col-span-2 lg:col-span-3  bg-gray-800 p-4 rounded-xl`}>
                    <div className={`space-y-4 `}>
                        <img
                            src={articleItem.data?.avatar || '/assets/images/articlePlaceHolder.jpg'}
                            width={800}
                            height={400}
                            alt={articleItem.data?.name}
                            className={`w-full rounded-lg `}
                        />
                        <h1 className={`text-2xl font-bold`}>
                            {articleItem.data?.name}
                        </h1>
                        <div className={`border-y border-dotted p-1 flex justify-between`}>
                            <div className={`flex text-nowrap`}>
                                نویسنده:
                                {articleItem.data?.creator}
                            </div>
                            <div className={`flex text-nowrap`}>
                                تاریخ انتشار:
                                {articleItem.data?.created}
                            </div>
                        </div>
                        <div
                            className={`editor`}
                            dangerouslySetInnerHTML={{
                                __html: (articleItem.data?.description)
                                    .replace(/&zwnj;|&zwj;|&nbsp;|&shy;|&thinsp;|&ensp;|&emsp;|&hairsp;/g, " ")
                                    .replace(/[\u200C\u200D\u00A0\u00AD\u200A\u2000\u2001\u2002\u2003]/g, " ")
                                    .replace(/\s+/g, " ")
                                    .trim()
                            }}

                        />
                    </div>

                </div>
                {/*<ArticleSidebar/>*/}
            </div>
        </HomeLayout>
    );
}
