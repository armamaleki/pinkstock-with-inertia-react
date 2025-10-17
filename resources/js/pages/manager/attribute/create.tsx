import ManagerLayout from '@/layouts/manager-layout';
import type { BreadcrumbItem } from '@/types';
import manager from '@/routes/manager';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'ویژگی ها',
        href: '#',
    },
];
export default function create() {
    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            dsadas
        </ManagerLayout>
    )
}
