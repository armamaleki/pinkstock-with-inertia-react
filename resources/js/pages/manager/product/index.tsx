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
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import article from '@/routes/manager/article';
import { Eye, Pen, Plus } from 'lucide-react';
import ManagerSearchBox from '@/components/manager-search-box';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import StatusSwitch from '@/components/status-switch';
import { ButtonGroup } from '@/components/ui/button-group';
import Paginate from '@/components/paginate';
import product from '@/routes/manager/product';


export default function Manager({productList}) {
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
    return(
        <ManagerLayout breadcrumbs={breadcrumbs}>
            <Card className={'bg-gray-800 shadow shadow-pink-400'}>
                <CardHeader className="flex flex-row items-center justify-between p-2">
                    <CardTitle className={`w-fit`}>لیست محصولات</CardTitle>
                    <div
                        className={`flex items-center gap-4 rounded-md bg-gray-900 p-2 shadow shadow-pink-400`}
                    >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button asChild>
                                    <Link href={product.create()}>
                                        <Plus />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>اضافه کردن محصول جدید</p>
                            </TooltipContent>
                        </Tooltip>
                        <ManagerSearchBox action={product.index()} />
                    </div>
                </CardHeader>
                <CardContent className={'bg-gray-900'}>
                    <Table>
                        <TableCaption>
                           لیست محصولات
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-right">
                                    آواتار
                                </TableHead>
                                <TableHead className="text-right">
                                    نام محصول
                                </TableHead>
                                <TableHead className="text-right">
                                    قیمت
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
                                    آخرین زمان ویرایش
                                </TableHead>
                                <TableHead className="text-right">#</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {productList.data.map((productItem, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-right">
                                        <Avatar>
                                            <AvatarImage
                                                src={productItem.avatar}
                                            />
                                            <AvatarFallback>NO</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {productItem?.name}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {productItem?.price}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <StatusSwitch
                                            status={productItem?.status}
                                            link={product.status(productItem?.slug)}
                                        />
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {productItem?.creator}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {productItem?.created}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {productItem?.updated}
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <ButtonGroup>
                                            <Button asChild>
                                                <Link
                                                    href={product.show(
                                                        productItem.slug,
                                                    )}
                                                >
                                                    <Eye />
                                                </Link>
                                            </Button>
                                            <Button asChild>
                                                <Link
                                                    href={product.edit(
                                                        productItem .slug,
                                                    )}
                                                >
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
                    <Paginate meta={productList.meta} />
                </CardFooter>
            </Card>

        </ManagerLayout>
    )
}
