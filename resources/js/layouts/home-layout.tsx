import { type BreadcrumbItem } from '@/types';
import { type ReactNode, useEffect } from 'react';
import HomeHeader from '@/layouts/home/home-header';
import HomeFooter from '@/layouts/home/home-footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Head } from '@inertiajs/react';
import ContactAction from '@/layouts/home/ContactAction';

interface HomeLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function HomeLayout({
    children,
    breadcrumbs,
    ...props
}: HomeLayoutProps) {
    useEffect(() => {
        AOS.init();
    }, []);
    useEffect(() => {
        document.documentElement.lang = 'fa';
        document.documentElement.dir = 'rtl';
        // document.body.classList.add('my-body-class');

        // return () => {
        //     document.body.classList.remove('my-body-class');
        // };
    }, []);

    return (
        <section className="container mx-auto space-y-4" {...props}>
            <div
                className={
                    'fixed  top-4 right-2 z-50 rounded-md bg-red-400 animate-bounce p-2'
                }
            >
                به دلیل به روز رسانی سایت فروش تنها از طریق تماس تلفنی صورت
                میگیرد
            </div>
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    href={'/assets/images/logo.png'}
                />
            </Head>
            <HomeHeader />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            {children}
            <HomeFooter />
            <ContactAction />
        </section>
    );
}
