import ManagerSearchBox from '@/components/manager-search-box';
import Paginate from '@/components/paginate';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
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
import user from '@/routes/manager/user';
import { Link } from '@inertiajs/react';
import { Eye, Pen, Plus } from 'lucide-react';

interface User {
    id: number;
    name: string;
    phone: string;
    created: string;
    userRole: string;
}
interface UserListResponse {
    data: User[];
}
interface UserListProps {
    usersList: UserListResponse;
}
export default function Manager({ usersList }: UserListProps) {
    return (
        <ManagerLayout>
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
                            {usersList.data.map((userItem, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-right">
                                        {userItem?.name}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {userItem?.phone}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {userItem?.created}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        قخمث
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <ButtonGroup>
                                            <Button
                                                asChild>
                                                <Link href={user.show(userItem)}>
                                                    <Eye />
                                                </Link>
                                            </Button>
                                            <Button asChild>
                                                <Link href={'/'}>
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
                    <Paginate meta={usersList.meta} />
                </CardFooter>
            </Card>
        </ManagerLayout>
    );
}
