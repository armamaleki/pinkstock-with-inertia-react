import ManagerLayout from '@/layouts/manager-layout';
import type { BreadcrumbItem } from '@/types';
import manager from '@/routes/manager';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import ManagerSearchBox from '@/components/manager-search-box';
import comment from '@/routes/manager/comment';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Eye, Plus } from 'lucide-react';
import Paginate from '@/components/paginate';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import attribute from '@/routes/manager/attribute';
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
export default function AttributeList({attributeLists}) {
    console.log(attributeLists);
    return(
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className={'bg-gray-800 shadow shadow-pink-400'}>
                <CardHeader className="flex flex-row items-center justify-between p-2">
                    <CardTitle className={`w-fit`}>لیست کامنت ها</CardTitle>
                    <div
                        className={`flex items-center gap-4 rounded-md bg-gray-900 p-2 shadow shadow-pink-400`}
                    >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button asChild>
                                    <Link href={attribute.create()}>
                                        <Plus />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>اضافه کردن کاربر جدید</p>
                            </TooltipContent>
                        </Tooltip>
                        <ManagerSearchBox action={attribute.index()} />
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
                                    کاربر
                                </TableHead>
                                <TableHead className="text-right">
                                    متن نظر
                                </TableHead>
                                <TableHead className="text-right">
                                    وضعیت
                                </TableHead>
                                <TableHead className="text-right">
                                    زمان ایجاد
                                </TableHead>
                                <TableHead className="text-right">#</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {attributeLists.data.map((commentItem, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-right">
                                        {commentItem?.user}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {commentItem?.body}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {commentItem?.status}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {commentItem?.created}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            asChild>
                                            <Link href={comment.show(commentItem.id)}>
                                                <Eye />
                                            </Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <Paginate meta={attributeLists.meta} />
                </CardFooter>
            </Card>
        </ManagerLayout>
    )
}
