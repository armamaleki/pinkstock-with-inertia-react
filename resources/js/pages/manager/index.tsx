import ManagerLayout from '@/layouts/manager-layout';
import type { BreadcrumbItem } from '@/types';
import manager from '@/routes/manager';
import user from '@/routes/manager/user';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
];
export default function Manager() {
    return(
        <ManagerLayout breadcrumbs={breadcrumbs}>
            index
        </ManagerLayout>
    )
}
