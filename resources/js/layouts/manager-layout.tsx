import ManagerHeader from '@/layouts/manager/manager-header';
import ManagerSidebar from '@/layouts/manager/manager-sidebar';
import type { BreadcrumbItem } from '@/types';
import { type ReactNode, useEffect } from 'react';
import { ToastContainer ,toast } from 'react-toastify';
import { usePage } from '@inertiajs/react';

interface ManagerLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}
export default function ManagerLayout({
    children,
    breadcrumbs,
    ...props
}: ManagerLayoutProps) {
    const { props: pageProps } = usePage();
    useEffect(() => {
        document.documentElement.lang = 'fa';
        document.documentElement.dir = 'rtl';
    }, []);
    useEffect(() => {
        if (pageProps.flash?.success) {
            toast.success(pageProps.flash.success, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }

        if (pageProps.flash?.error) {
            toast.error(pageProps.flash.error, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }
    }, [pageProps.flash]);
    return (
        <>
            <ManagerSidebar />
            <ToastContainer />
            <ManagerHeader />
            <section className="container mx-auto space-y-4" {...props}>
                {children}
            </section>

        </>
    );
}
