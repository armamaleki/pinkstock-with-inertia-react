import ManagerLayout from '@/layouts/manager-layout';
import manager from '@/routes/manager';
import type { BreadcrumbItem } from '@/types';
import comment from '@/routes/manager/comment';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'کامنت ها',
        href: comment.index(),
    },
    {
        title: 'نمایش کامنت',
        href: '#',
    },
];
export default function ShowComment({ commentItem }) {
    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            {commentItem.data.body}
        </ManagerLayout>
    );
}
