import { Form, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group';
import { RouteDefinition } from '@/wayfinder';

interface ManagerSearchBoxProps {
    action?: RouteDefinition<"get">
}
export default function ManagerSearchBox({ action }:ManagerSearchBoxProps) {
    const { url } = usePage();
    const params = new URLSearchParams(url.split('?')[1]);
    const q = params.get('q') || '';
    return(
        <Form
            method="post"
            action={action}
            resetOnSuccess={['title']} >
            {({ processing }) => (
                <div className={`flex gap-1 w-fit items-center`}>
                    <InputGroup>
                        <InputGroupInput
                            name={'q'}
                            defaultValue={q}
                            placeholder="جستجو..." />
                        <InputGroupAddon
                            align="inline-end">
                            <InputGroupButton
                                disabled={processing}
                                variant="ghost">
                                {processing ? (
                                    <>
                                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                        درحال جستجو...
                                    </>
                                ) : (
                                    'جستجو'
                                )}
                            </InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            )}

        </Form>
    );
}
