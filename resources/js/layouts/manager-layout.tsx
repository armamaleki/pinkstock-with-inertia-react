import ManagerHeader from '@/layouts/manager/manager-header';
import ManagerSidebar from '@/layouts/manager/manager-sidebar';
import type { BreadcrumbItem } from '@/types';
import { type ReactNode, useEffect } from 'react';

interface ManagerLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}
export default function ManagerLayout({
    children,
    breadcrumbs,
    ...props
}: ManagerLayoutProps) {
    useEffect(() => {
        document.documentElement.lang = 'fa';
        document.documentElement.dir = 'rtl';
    }, []);
    return (
        <>
            <ManagerSidebar />
            <ManagerHeader />
            <section className="container mx-auto space-y-4" {...props}>
                {children}
            </section>
        </>
    );
}
