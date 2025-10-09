import { type BreadcrumbItem } from '@/types';
import { type ReactNode, useEffect } from 'react';
import HomeHeader from '@/layouts/home/home-header';

interface HomeLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function HomeLayout({ children, breadcrumbs, ...props }: HomeLayoutProps) {
    useEffect(() => {
        document.documentElement.lang = 'fa';
        document.documentElement.dir = 'rtl';
        // document.body.classList.add('my-body-class');

        // return () => {
        //     document.body.classList.remove('my-body-class');
        // };
    }, []);

    return (
        <section className="container mx-auto" {...props}>
            <HomeHeader />
            {children}
        </section>
    );
}
