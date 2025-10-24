import HomeLayout from '@/layouts/home-layout';
import { home } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { PhoneCall } from 'lucide-react';

export default function ContactUs() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'پینک استوک',
            href: home(),
        },
        {
            title: 'تماس با پینک',
            href: '',
        },
    ];
    return (
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
            <div className={`relative`}>
                <img
                    className={`opacity-50 rounded-2xl`}
                    src="/assets/images/laptop-human.jpg"  />
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                    <div
                        className={`grid grid-cols-1 justify-items-center gap-4 md:grid-cols-3`}>
                        <a href={'tel:+989125918435'} className={`flex flex-col items-center text-center bg-gray-800 p-4 rounded-2xl space-y-2`}>
                            <PhoneCall className={`size-8`}/>
                            <p>09125918435</p>
                        </a>
                        <a href={'mailto:contact@pinkstock.net'} className={`flex flex-col items-center text-center bg-gray-800 p-4 rounded-2xl space-y-2`}>
                            <PhoneCall className={`size-8`}/>
                            <p>contact@pinkstock.net</p>
                        </a>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
