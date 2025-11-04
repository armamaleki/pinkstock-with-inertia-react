import type { BreadcrumbItem } from '@/types';
import dashboard from '@/routes/dashboard';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Orders() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'حساب کاربری',
            href: dashboard.index(),
        },
        {
            title: 'سفارشات',
            href: dashboard.index(),
        },
    ];
    return(
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="سفارشات" />

        </AppLayout>
    );
}
