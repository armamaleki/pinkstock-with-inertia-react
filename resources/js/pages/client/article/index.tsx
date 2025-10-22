import HomeLayout from '@/layouts/home-layout';
import { Head } from '@inertiajs/react';
import SingleArticle from '@/components/single-article';
import Paginate from '@/components/paginate';

export default function Article({ArticlesList}) {
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
