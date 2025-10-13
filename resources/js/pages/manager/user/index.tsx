import ManagerLayout from '@/layouts/manager-layout';
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
} from "@/components/ui/table"
import ManagerSearchBox from '@/components/manager-search-box';
import user from '@/routes/manager/user';

export default function Manager() {
    return (
        <ManagerLayout>
            <Card className={'bg-gray-800 shadow shadow-pink-400'}>
                <CardHeader className={`flex justify-between`}>
                    <CardTitle className={`w-fit`}>لیست کل کاربران</CardTitle>
                    <ManagerSearchBox action={user.index()}/>
                </CardHeader>
                <CardContent className={'bg-gray-900'}>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    اینجا صفحه بندی رو بزار
                </CardFooter>
            </Card>
        </ManagerLayout>
    );
}
