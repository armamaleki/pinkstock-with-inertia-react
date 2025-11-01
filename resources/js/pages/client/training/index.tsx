import Paginate from '@/components/paginate';
import HomeLayout from '@/layouts/home-layout';
import { home } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Clock, User } from 'lucide-react';

export default function ({ trainingLists }) {
    console.log(trainingLists);
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
                {trainingLists.data.map((training, index) => (
                    <div
                        key={index}
                        className="group space-y-4 rounded-xl bg-purple-100 dark:bg-gray-800 p-2 shadow shadow-pink-800">
                        <div className="overflow-hidden relative w-fit h-fit -mt-15 rounded-xl ">
                            <Link href={'d'}>
                                <img
                                    src={training.avatar}
                                    className="transition group-hover:scale-110 ease-in-out"/>
                                <div className="absolute bottom-2 w-full px-2 flex justify-between transition group-hover:text-pink-100">
                                    <span className="flex gap-1 items-center">
                                   <Clock className="size-4"/>
                                   <span>{training.created}</span>
                               </span>
                                    <span className="flex gap-1 items-center">
                                   <User className="size-4"/>
                                   <span>{training.creator}</span>
                               </span>
                                </div>
                            </Link>
                        </div>
                        <Link href={'dsa'} className={'transition group-hover:text-pink-800 text-xl font-bold'}>
                            {training.name}
                        </Link>
                        <p className={'text-justify'}>
                            {training.short_description}
                        </p>
                    </div>
                ))}
            </div>
            <Paginate meta={trainingLists.meta} />
        </HomeLayout>
    );
}
