import SearchBox from '@/layouts/home/search-box';
import { dashboard, laptopPriceEstimate, login, repairs } from '@/routes';
import type { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
    Calculator,
    Grid2x2Plus,
    Home,
    LayoutDashboard,
    ReplaceAll,
    ShoppingCart,
    Store,
} from 'lucide-react';
import logo from './logo.webp';
import productCategory from '@/routes/product-category';

export default function () {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <div
                className={`mt-2 hidden w-full items-center justify-between md:flex`}
            >
                <div className={`flex w-full items-center gap-2`}>
                    <Link href={`/`}>
                        <img src={logo} alt="فروشگاه اینترنتی پینک استوک" />
                    </Link>
                    <div className={`flex flex-wrap items-center gap-1`}>
                        <Link
                            className={`flex items-center gap-1`}
                            href={'/store'}
                        >
                            <Store className={`size-6`} />
                            فروشگاه
                        </Link>
                        <Link
                            className={`flex items-center gap-1`}
                            href={laptopPriceEstimate()}
                        >
                            <Calculator className={`size-6`} />
                            تخمین قیمت لپ تاپ
                        </Link>
                        <Link
                            className={`flex items-center gap-1`}
                            href={repairs()}
                        >
                            <ReplaceAll className={`size-6`} />
                            تعمیر لپ تاپ
                        </Link>
                        <Link
                            className={`flex items-center gap-1`}
                            href={productCategory.index()}
                        >
                            <Grid2x2Plus className={`size-6`} />
                            دسته بندی محصولات
                        </Link>
                    </div>
                </div>
                <div className={`flex w-full items-center gap-4`}>
                    <SearchBox />
                    {auth.user ? (
                        <Link
                            href={dashboard()}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            حساب کاربری
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={login()}
                                className="flex rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-nowrap text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                            >
                                ورود|ثبت نام
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div
                className={`fixed -bottom-4 z-20 flex w-full justify-around divide-x divide-pink-400 border-t border-pink-300 bg-gray-800 p-2 shadow shadow-pink-300 md:hidden`}
            >
                <Link
                    className={`flex w-full flex-col items-center text-center text-[10px]`}
                    href={'/'}
                >
                    <Home className={`size-8`} />
                    <h3>پینک</h3>
                </Link>
                <Link
                    className={`flex w-full flex-col items-center text-center text-[10px]`}
                    href={'/product-category'}
                >
                    <Grid2x2Plus className={`size-8`} />
                    <h3>دسته بندی ها</h3>
                </Link>
                <Link
                    className={`flex w-full flex-col items-center text-center text-[10px]`}
                    href={'/store'}
                >
                    <Store className={`size-8`} />
                    <h3>فروشگاه</h3>
                </Link>
                <Link
                    className={`flex w-full flex-col items-center text-center text-[10px]`}
                    href={'/'}
                >
                    <ShoppingCart className={`size-8`} />
                    <h3>سبد خرید</h3>
                </Link>
                <Link
                    className={`flex w-full flex-col items-center text-center text-[10px]`}
                    href={'/dashboard'}
                >
                    <LayoutDashboard className={`size-8`} />
                    <h3>حساب کاربری</h3>
                </Link>
            </div>
        </>
    );
}
