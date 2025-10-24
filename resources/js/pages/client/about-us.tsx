import type { BreadcrumbItem } from '@/types';
import { home } from '@/routes';
import { Head } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';

export default function ContactUs() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'پینک استوک',
            href: home(),
        },
        {
            title: 'درباره ما',
            href: '',
        },
    ];
    return(
        <HomeLayout breadcrumbs={breadcrumbs}>
            <Head>
                <title>تماس با پینک | ارتباط با پشتیبانی و واحد فروش</title>

                {/* Description */}
                <meta
                    name="description"
                    content="سوالی داری یا نیاز به راهنمایی؟ از طریق صفحه تماس با پینک می‌تونی با تیم پشتیبانی، فروش و خدمات مشتریان در ارتباط باشی. پاسخگو و همراهت هستیم!"
                />

                {/* Author & App Info */}
                <meta name="author" content="پینک" />
                <meta name="creator" content="پینک" />
                <meta name="application-name" content="پینک" />
                <meta
                    name="category"
                    content="فروشگاه اینترنتی و خدمات مشتریان"
                />

                {/* Canonical */}
                <link rel="canonical" href="https://pink.net/contact" />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="تماس با پینک | ارتباط با پشتیبانی و واحد فروش"
                />
                <meta
                    property="og:description"
                    content="از طریق صفحه تماس با ما، می‌تونی سوالات، پیشنهادها یا مشکلات خودت رو با تیم پینک در میان بذاری. پشتیبانی سریع و پاسخ‌گو در کنارته."
                />
                <meta property="og:url" content="https://pink.net/contact" />
                <meta property="og:site_name" content="پینک" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="/assets/images/contact-pink.png"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="تماس با فروشگاه اینترنتی پینک"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="تماس با پینک | ارتباط با پشتیبانی و واحد فروش"
                />
                <meta
                    name="twitter:description"
                    content="پشتیبانی پینک همیشه پاسخگوست! از طریق تماس تلفنی، ایمیل یا فرم ارتباط با ما، سوالات و درخواست‌هات رو ارسال کن."
                />
                <meta
                    name="twitter:image"
                    content="/assets/images/contact-pink.png"
                />

                {/* Robots */}
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            </Head>
        </HomeLayout>
    );
}
