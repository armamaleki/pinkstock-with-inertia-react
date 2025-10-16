import ManagerLayout from '@/layouts/manager-layout';
import type { BreadcrumbItem } from '@/types';
import manager from '@/routes/manager';
import user from '@/routes/manager/user';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'کاربران',
        href: user.index(),
    },
    {
        title: 'نمایش کاربر',
        href: '#',
    },
];
export default function({userItem}){
    return (
      <ManagerLayout breadcrumbs={breadcrumbs}>
          {userItem.data.phone}
      </ManagerLayout>
    );
}
