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
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Eye, Pen, Plus } from 'lucide-react';
import ManagerSearchBox from '@/components/manager-search-box';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ButtonGroup } from '@/components/ui/button-group';
import Paginate from '@/components/paginate';
import article from '@/routes/manager/article';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'مدیریت',
        href: manager.index(),
    },
    {
        title: 'مقالات',
        href: '#',
    },
];
export default function Manager({articleList}) {
    return(
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className={'bg-gray-800 shadow shadow-pink-400'}>
                <CardHeader className="flex flex-row items-center justify-between p-2">
                    <CardTitle className={`w-fit`}>لیست مقالات</CardTitle>
                    <div
                        className={`flex items-center gap-4 rounded-md bg-gray-900 p-2 shadow shadow-pink-400`}
                    >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button asChild>
                                    <Link href={article.create()}>
                                        <Plus />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>اضافه کردن کاربر جدید</p>
                            </TooltipContent>
                        </Tooltip>
                        <ManagerSearchBox action={article.index()} />
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
                                    آواتار
                                </TableHead>
                                <TableHead className="text-right">
                                    نام مقاله
                                </TableHead>
                                <TableHead className="text-right">
                                    وضعیت
                                </TableHead>
                                <TableHead className="text-right">
                                    نویسنده
                                </TableHead>
                                <TableHead className="text-right">
                                    زمان ایجاد
                                </TableHead>
                                <TableHead className="text-right">
                                    زمان ویرایش
                                </TableHead>
                                <TableHead className="text-right">#</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {articleList.data.map((articleItem, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-right">
                                        <Avatar >
                                            <AvatarImage src={articleItem.avatar} />
                                            <AvatarFallback>NO</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {articleItem?.name}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {articleItem?.status}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {articleItem?.creator}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {articleItem?.created}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {articleItem?.updated}
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <ButtonGroup>
                                            <Button
                                                asChild>
                                                <Link href={article.show(articleItem.slug)}>
                                                    <Eye />
                                                </Link>
                                            </Button>
                                            <Button asChild>
                                                <Link href={article.edit(articleItem.slug)}>
                                                    <Pen />
                                                </Link>
                                            </Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <Paginate meta={articleList.meta} />
                </CardFooter>
            </Card>
        </ManagerLayout>
    )
}
