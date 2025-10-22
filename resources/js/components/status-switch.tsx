import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { router } from '@inertiajs/react';

export default function StatusSwitch({ status, link }) {
    const options = [
        { name: 'تغییر وضعیت به فعال', value: 'active' },
        { name: 'تغییر وضعیت به در انتظار بازبینی', value: 'check' },
        { name: 'تغییر وضعیت به غیر فعال', value: 'deactivate' },
    ];

    const handleStatusChange = async (newStatus) => {
        router.patch(link, { status: newStatus }, {
            preserveScroll: true,
            onSuccess: () => {
                console.log('✅ وضعیت با موفقیت تغییر کرد');
            },
            onError: (errors) => {
                console.error('❌ خطا در تغییر وضعیت:', errors);
            },
        });
    };
    return (
        <Select
            dir={'rtl'}
            defaultValue={status}
            onValueChange={(value) => handleStatusChange(value)}
        >
            <SelectTrigger
                className={`${status === 'active' ? 'bg-green-500' : ''}${status === 'check' ? 'bg-yellow-500' : ''}`}
            >
                <SelectValue placeholder="وضعیت" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>یک وضعیت را انتخاب کنید</SelectLabel>
                    {options.map((option, index) => (
                        <SelectItem key={index} value={option.value}>
                            {option.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
