import ManagerSearchBox from '@/components/manager-search-box';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import ManagerLayout from '@/layouts/manager-layout';
import manager from '@/routes/manager';
import comment from '@/routes/manager/comment';
import type { BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'کامنت ها',
        href: '#',
    },
];
export default function CommentLists({ commentsLists }) {
    return (
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className={'bg-gray-800 shadow shadow-pink-400'}>
                <CardHeader className="flex flex-row items-center justify-between p-2">
                    <CardTitle className={`w-fit`}>لیست کامنت ها</CardTitle>
                    <div
                        className={`flex items-center gap-4 rounded-md bg-gray-900 p-2 shadow shadow-pink-400`}
                    >
                        <ManagerSearchBox action={comment.index()} />
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
                            {commentsLists.data.map((commentItem, index) => (
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
            </Card>
        </ManagerLayout>
    );
}
