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
import { Eye, Pen, Plus } from 'lucide-react';
import Paginate from '@/components/paginate';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import attribute from '@/routes/manager/attribute';
import article from '@/routes/manager/article';
import { ButtonGroup } from '@/components/ui/button-group';
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
    // console.log(attributeLists);
    return(
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className={'bg-gray-800 shadow shadow-pink-400'}>
                <CardHeader className="flex flex-row items-center justify-between p-2">
                    <CardTitle className={`w-fit`}>لیست ویژگی ها</CardTitle>
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
                                    نام ویژگی
                                </TableHead>
                                <TableHead className="text-right">
                                    ایکون ویژگی
                                </TableHead>

                                <TableHead className="text-right">#</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {attributeLists.data.map((commentItem, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-right">
                                        {commentItem?.name}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div dangerouslySetInnerHTML={{ __html: commentItem.icon }} />
                                    </TableCell>
                                    <TableCell>
                                        <ButtonGroup>
                                            <Button
                                                asChild>
                                                <Link href={attribute.show(commentItem.id)}>
                                                    <Eye />
                                                </Link>
                                            </Button>
                                            <Button asChild>
                                                <Link href={attribute.edit(commentItem.id)}>
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
                    <Paginate meta={attributeLists.meta} />
                </CardFooter>
            </Card>
        </ManagerLayout>
    )
}
