import dashboard from '@/routes/dashboard';
import type { BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.index(),
    },
];

export default function ({requestStatus}) {

    const { props } = usePage();
    const { success, error } = props.flash || {};
    useEffect(() => {
        if (success) {
            toast.success(success);
        }

        if (error) {
            toast.error(error);
        }
    }, [success, error]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="درخواست فروشنده شدن" />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="flex items-center justify-center h-screen">
                {requestStatus === null && (
                    <Link
                        href={dashboard.vendorRequest.request()}
                        method="post"
                        as="button"
                        className="px-6 py-3 bg-pink-600 text-white rounded-lg"
                    >
                        درخواست فروشنده شدن
                    </Link>
                )}

                {requestStatus === 'pending' && (
                    <div className="text-yellow-600 text-xl">
                        درخواست شما در حال بررسی است...
                    </div>
                )}

                {requestStatus === 'approved' && (
                    <div className="text-green-600 text-xl">
                        درخواست شما تأیید شده است 🎉
                    </div>
                )}

                {requestStatus === 'rejected' && (
                    <div className="text-red-600 text-xl">
                        درخواست شما رد شده است.
                    </div>
                )}
            </div>

        </AppLayout>
    );
}
