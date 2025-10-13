import { Form } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Button } from '@headlessui/react';
import { LoaderCircle } from 'lucide-react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group';

// @ts-ignore
export default function ManagerSearchBox({action}) {
    return(
        <Form
            method="post"
            action={action}
            resetOnSuccess={['title']} >
            {({ processing, errors }) => (
                <div className={`flex gap-1 w-fit items-center`}>
                    <div className={`w-90 `}>
                        <Input
                            id="q"
                            className={`bg-gray-900`}
                            name="q"
                            placeholder="جستجو.."
                            required
                        />
                        <InputError message={errors.q} />
                    </div>
                    <Button
                        type="submit"
                        className="mt-2 bg-gray-900 w-fit p-2"
                        disabled={processing}>
                        {processing ? (
                            <>
                                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                درحال جستجو...
                            </>
                        ) : (
                            'جستجو'
                        )}
                    </Button>
                    <InputGroup>
                        <InputGroupInput placeholder="Type to search..." />
                        <InputGroupAddon align="inline-end">
                            <InputGroupButton variant="secondary">Search</InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            )}

        </Form>
    );
}
