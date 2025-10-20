import ManagerLayout from '@/layouts/manager-layout';
import type { BreadcrumbItem } from '@/types';
import manager from '@/routes/manager';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'دسته بندی محصولات',
        href: '#',
    },
];

export default function Manager({productCategoriesLists}) {
    return(
        <ManagerLayout breadcrumbs={breadcrumbs}>
            user
        </ManagerLayout>
    )
}
