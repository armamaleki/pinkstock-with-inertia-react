import type { BreadcrumbItem } from '@/types';
import { home } from '@/routes';
import { Head } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';
import productCategory from '@/routes/product-category';
import SingleProduct from '@/components/single-product';

export default function({productCategoryItem}) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'پینک استوک',
            href: home(),
        },
        {
            title: 'دسته بندی محصولات پینک',
            href: productCategory.index(),
        },
        {
            title: productCategoryItem.data.name,
            href: '',
        },
    ];
    return(
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head>
                <title>خرید لپ تاپ استوک و کارکرده با قیمت مناسب | فروشگاه پینک استوک</title>

                <meta
                    name="description"
                    content={productCategoryItem.data?.meta_description}
                />

                {/* Author & App Info */}
                <meta name="author" content="پینک استوک" />
                <meta name="creator" content="پینک استوک" />
                <meta name="application-name" content="پینک استوک" />
                <meta name="category" content="فروشگاه لپ تاپ استوک و دست دوم" />

                {/* Canonical */}
                <link rel="canonical" href={`https://pinkstock.net/product-categories/${productCategoryItem.data?.slug}`} />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content={productCategoryItem.data?.meta_title}
                />
                <meta
                    property="og:description"
                    content={productCategoryItem.data?.meta_description}
                />
                <meta property="og:url" content={`https://pinkstock.net/product-categories/${productCategoryItem.data?.slug}`} />
                <meta property="og:site_name" content="پینک استوک" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/images/laptop.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content={productCategoryItem.data?.meta_title}
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={productCategoryItem.data?.meta_title}
                />
                <meta
                    name="twitter:description"
                    content={productCategoryItem.data?.meta_description}
                />
                <meta name="twitter:image" content={productCategoryItem.data?.avatar} />

                {/* Robots */}
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            </Head>

            <h1 className="font-bold">{productCategoryItem.data?.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
                {productCategoryItem.data.products.map((productitem , index)=>(
                    <SingleProduct key={index} prodcutItem={productitem}/>
                ))}
            </div>
            <div
                className={`editor text-justify`}
                dangerouslySetInnerHTML={{
                    __html: (productCategoryItem.data?.description)
                        .replace(/&zwnj;|&zwj;|&nbsp;|&shy;|&thinsp;|&ensp;|&emsp;|&hairsp;/g, " ")
                        .replace(/[\u200C\u200D\u00A0\u00AD\u200A\u2000\u2001\u2002\u2003]/g, " ")
                        .replace(/\s+/g, " ")
                        .trim()
                }}

            />
        </HomeLayout>
    );
}
