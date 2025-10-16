import ManagerSearchBox from '@/components/manager-search-box';
import Paginate from '@/components/paginate';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import ManagerLayout from '@/layouts/manager-layout';
import manager from '@/routes/manager';
import role from '@/routes/manager/role';
import user from '@/routes/manager/user';
import type { BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'دسترسی ها',
        href: role.index(),
    },
];
export default function Manager({ roleList }) {
    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className={'bg-gray-800 shadow shadow-pink-400'}>
                <CardHeader className="flex flex-row items-center justify-between p-2">
                    <CardTitle className={`w-fit`}>لیست کل کاربران</CardTitle>
                    <div
                        className={`flex items-center gap-4 rounded-md bg-gray-900 p-2 shadow shadow-pink-400`}
                    >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button asChild>
                                    <Link href={user.create()}>
                                        <Plus />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>اضافه کردن کاربر جدید</p>
                            </TooltipContent>
                        </Tooltip>
                        <ManagerSearchBox action={user.index()} />
                    </div>
                </CardHeader>
                <CardContent className={'bg-gray-900'}>
                    <Table>
                        <TableCaption>
                            A list of your recent invoices.
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-right">
                                    نام کاربر
                                </TableHead>
                                <TableHead className="text-right">
                                    تلفن همراه
                                </TableHead>
                                <TableHead className="text-right">
                                    زمان ثبت نام
                                </TableHead>
                                <TableHead className="text-right">
                                    دسترسی
                                </TableHead>
                                <TableHead className="text-right">#</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {roleList.data.map((roleItem, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-right">
                                        {roleItem?.name}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <Paginate meta={roleList.meta} />
                </CardFooter>
            </Card>
        </ManagerLayout>
    );
}
