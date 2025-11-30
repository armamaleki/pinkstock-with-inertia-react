import HomeLayout from '@/layouts/home-layout';
import { home } from '@/routes';
import store from '@/routes/store';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';

export default function ShowProduct({ productItem }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'پینک',
            href: home(),
        },
        {
            title: 'فروشگاه پینک ',
            href: store.index(),
        },
        {
            title: productItem.data.name,
            href: '',
        },
    ];
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head>
                <title>{productItem.data.name}</title>
                <meta
                    name="description"
                    content={productItem.data.meta_description}
                />
                <meta name="author" content="پینک" />
                <meta name="creator" content="پینک" />
                <meta name="application-name" content="پینک" />
                <meta name="category" content="فروشگاه آنلاین کالاهای متنوع" />

                {/* Canonical */}
                <link
                    rel="canonical"
                    href={`https://pinkstock.net/store/${productItem.data.slug}`}
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content={productItem.data.meta_title}
                />
                <meta
                    property="og:description"
                    content={productItem.data.meta_title}
                />
                <meta
                    property="og:url"
                    content={`https://pinkstock.net/store/${productItem.data.slug}`}
                />
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
                    content={productItem.data.meta_title}
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={productItem.data.meta_title}
                />
                <meta
                    name="twitter:description"
                    content={productItem.data.meta_description}
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
            <div
                className={
                    'grid grid-cols-1 gap-4 rounded bg-gray-800 p-4 shadow-md shadow-pink-400 md:grid-cols-2'
                }
            >
                <div className={'space-y-3'}>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img
                                className={'w-full rounded-md'}
                                src={productItem.data.avatar}
                            />
                        </SwiperSlide>
                        {productItem.data.galleries.map(
                            (gallery, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        className={'w-full rounded-md'}
                                        src={gallery} />
                                </SwiperSlide>
                            ),
                        )}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className={'rounded-md'} src={productItem.data.avatar_thumb} />
                        </SwiperSlide>
                        {productItem.data.galleries_thumb.map(
                            (gallery, index) => (
                                <SwiperSlide key={index}>
                                    <img className={'rounded-md'} src={gallery} />
                                </SwiperSlide>
                            ),
                        )}
                    </Swiper>
                </div>
                <div>
                    <h1 className={'text-4xl font-bold'}>
                        {productItem.data.name}
                    </h1>
                    <p className="w-full border-b border-gray-300 p-2">
                        {productItem.data.short_description}
                    </p>
                    <div className="border-b p-2">
                        <div className="relative inline-block overflow-x-auto rounded-xl border border-gray-300">
                            <table className="w-fit text-right text-sm">
                                <thead className="border-b border-dotted border-gray-300 text-xs">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ویژگی های کلیدی
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {productItem.data.attributes.map((item , index)=>(
                                    <tr
                                        key={index}
                                        className="border-b border-gray-300">
                                        <th
                                            scope="row"
                                            className="border-l border-gray-300 px-6 py-4">
                                            {item.name}
                                        </th>
                                        <td className="px-6 py-4">{item?.value}</td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="space-y-4 border-b p-2">
                        <div className="flex gap-2">
                            کد کالا: {productItem.data.sku}
                        </div>
                    </div>
                    <div className="flex gap-2 font-bold">
                        امکان خرید حضوری : دارد
                    </div>
                    <a href="tel:09125918435" className="flex gap-2">
                        مشاوره رایگان :
                        <span className="text-sky-500">09125918435</span>
                    </a>
                </div>
            </div>
            <div
                className={`editor editor rounded-xl bg-gray-800 p-2 text-justify shadow-lg shadow-pink-400 ckeditor-content`}
                dangerouslySetInnerHTML={{
                    __html: productItem.data.description
                        .replace(
                            /&zwnj;|&zwj;|&nbsp;|&shy;|&thinsp;|&ensp;|&emsp;|&hairsp;/g,
                            ' ',
                        )
                        .replace(
                            /[\u200C\u200D\u00A0\u00AD\u200A\u2000\u2001\u2002\u2003]/g,
                            ' ',
                        )
                        .replace(/\s+/g, ' ')
                        .trim(),
                }}
            ></div>
        </HomeLayout>
    );
}
