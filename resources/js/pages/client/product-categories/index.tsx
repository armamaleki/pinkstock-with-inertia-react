import HomeLayout from '@/layouts/home-layout';
import type { BreadcrumbItem } from '@/types';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import productCategory from '@/routes/product-category';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'پینک استوک',
        href: home(),
    },
    {
        title: 'دسته بندی محصولات پینک',
        href: '',
    },
];
export default function ({ productCategoriesList }) {
    console.log(productCategoriesList);
    return (
        <HomeLayout breadcrumbs={breadcrumbs}>
            <h1 className="font-bold">دسته بندی لپتاپ دست دوم</h1>
            <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-3 lg:grid-cols-4">
                {productCategoriesList.data.map((categoryItem, index) => (
                    <Link
                        key={index}
                        href={productCategory.show(categoryItem?.slug)}
                        className="group flex flex-col items-center p-2 text-center"
                    >
                        <img
                            src={categoryItem?.avatar}
                            className={`origin-top rounded-full transition delay-150 duration-300 group-hover:scale-50`}
                            alt={categoryItem?.name}
                        />
                        <div className="transition delay-150 duration-300 origin-top group-hover:-translate-y-30 ">
                            <h2 className="font-bold">
                                {categoryItem?.name}
                            </h2>
                            <p className="transition delay-150 duration-300 opacity-0  group-hover:opacity-100">
                                {categoryItem?.short_description}
                            </p>
                        </div>
                    </Link>

                ))}
            </div>
        </HomeLayout>
    );
}
