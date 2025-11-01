import Paginate from '@/components/paginate';
import HomeLayout from '@/layouts/home-layout';
import { home } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Clock, User } from 'lucide-react';
import training from '@/routes/training';

export default function ({ trainingLists }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'پینک استوک',
            href: home(),
        },
        {
            title: 'پینک آکادمی',
            href: '',
        },
    ];
    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <div className="grid grid-cols-1 gap-8 space-y-10 md:grid-cols-3 lg:grid-cols-4">
                {trainingLists.data.map((tra, index) => (
                    <div
                        key={index}
                        className="group space-y-4 rounded-xl bg-purple-100 dark:bg-gray-800 p-2 shadow shadow-pink-800">
                        <div className="overflow-hidden relative w-fit h-fit -mt-15 rounded-xl ">
                            <Link href={training.show(tra)}>
                                <img
                                    src={tra.avatar}
                                    className="transition group-hover:scale-110 ease-in-out"/>
                                <div className="absolute bottom-2 w-full px-2 flex justify-between transition group-hover:text-pink-100">
                                    <span className="flex gap-1 items-center">
                                   <Clock className="size-4"/>
                                   <span>{tra.created}</span>
                               </span>
                                    <span className="flex gap-1 items-center">
                                   <User className="size-4"/>
                                   <span>{tra.creator}</span>
                               </span>
                                </div>
                            </Link>
                        </div>
                        <Link href={training.show(tra)} className={'transition group-hover:text-pink-800 text-xl font-bold'}>
                            {tra.name}
                        </Link>
                        <p className={'text-justify'}>
                            {tra.short_description}
                        </p>
                    </div>
                ))}
            </div>
            <Paginate meta={trainingLists.meta} />
        </HomeLayout>
    );
}
