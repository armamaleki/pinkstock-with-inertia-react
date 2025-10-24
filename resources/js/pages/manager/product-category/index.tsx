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
import StatusSwitch from '@/components/status-switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
            <Card className={'bg-gray-800 shadow shadow-pink-400'}>
                <CardHeader className="flex flex-row items-center justify-between p-2">
                    <CardTitle className={`w-fit`}>لیست دسته بندی محصولات</CardTitle>
                    <div
                        className={`flex items-center gap-4 rounded-md bg-gray-900 p-2 shadow shadow-pink-400`}
                    >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button asChild>
                                    <Link href={manager.productCategory.create()}>
                                        <Plus />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>اضافه کردن دسته بندی جدید</p>
                            </TooltipContent>
                        </Tooltip>
                        <ManagerSearchBox action={manager.productCategory.index()} />
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
                                    وضعیت
                                </TableHead>
                                <TableHead className="text-right">
                                    #
                                </TableHead>
                                <TableHead className="text-right">#</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {productCategoriesLists.data.map((categoryItem, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-right">
                                        <Avatar>
                                            <AvatarImage
                                                src={categoryItem.avatar}
                                            />
                                            <AvatarFallback>NO</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {categoryItem?.name}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <StatusSwitch
                                            status={categoryItem?.status}
                                            link={manager.productCategory.status(categoryItem?.slug)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <ButtonGroup>
                                            <Button
                                                asChild>
                                                <Link href={manager.productCategory.show(categoryItem.id)}>
                                                    <Eye />
                                                </Link>
                                            </Button>
                                            <Button asChild>
                                                <Link href={manager.productCategory.edit(categoryItem.slug)}>
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
                    <Paginate meta={productCategoriesLists.meta} />
                </CardFooter>
            </Card>
        </ManagerLayout>
    )
}
