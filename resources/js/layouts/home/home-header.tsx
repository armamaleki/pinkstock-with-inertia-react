import { Link, usePage } from '@inertiajs/react';
import logo from './logo.webp'
import {
    Calculator,
    Grid2x2Plus,
    Home,
    LayoutDashboard,
    ReplaceAll,
    ShoppingCart,
    Store,
} from 'lucide-react';
import SearchBox from '@/layouts/home/search-box';
import { dashboard, login, register } from '@/routes';
import type { SharedData } from '@/types';



export default function() {
    const { auth } = usePage<SharedData>().props;

    return (
             <>
                 <div className={`hidden md:flex justify-between w-full items-center mt-2`}>
                     <div className={`flex gap-2 items-center w-full`}>
                         <Link href={`/`}>
                             <img src={logo} alt="فروشگاه اینترنتی پینک استوک" />
                         </Link>
                         <div className={`flex items-center gap-1`}>
                             <Link
                                 className={`flex gap-1 items-center`}
                                 href={'/store'}>
                                 <Store className={`size-6`}/>
                                 فروشگاه
                             </Link>
                             <Link
                                 className={`flex gap-1 items-center`}
                                 href={'/laptop-price-estimate'}>
                                 <Calculator className={`size-6`}/>
                                 تخمین قیمت لپ تاپ
                             </Link>
                             <Link
                                 className={`flex gap-1 items-center`}

                                 href={'/repairs'}>
                                 <ReplaceAll className={`size-6`}/>
                                 تعمیر لپ تاپ
                             </Link>
                             <Link
                                 className={`flex gap-1 items-center`}
                                 href={'/product-category'}>
                                 <Grid2x2Plus className={`size-6`}/>
                                 دسته بندی محصولات
                             </Link>
                         </div>
                     </div>
                     <div className={`flex items-center gap-4 w-full`}>
                         <SearchBox/>
                         {auth.user ? (
                             <Link
                                 href={dashboard()}
                                 className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                             >
                                 Dashboard
                             </Link>
                         ) : (
                             <>
                                 <Link
                                     href={login()}
                                     className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                 >
                                     Log in
                                 </Link>
                                 <Link
                                     href={register()}
                                     className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                 >
                                     Register
                                 </Link>
                             </>
                         )}
                     </div>
                 </div>
                 <div
                     className={`  md:hidden w-full fixed bottom-0 bg-gray-800 shadow border-t border-pink-300 shadow-pink-300 z-20 p-2 flex justify-around divide-x divide-pink-400`}>
                     <Link
                         className={`flex flex-col items-center text-center w-full text-[10px] `}
                         href={'/'}>
                         <Home className={`size-8`}/>
                         <h3>پینک استوک</h3>
                     </Link>
                     <Link
                         className={`flex flex-col items-center text-center w-full text-[10px] `}
                         href={'/product-category'}>
                         <Grid2x2Plus className={`size-8`}/>
                         <h3>دسته بندی ها</h3>
                     </Link>
                     <Link
                         className={`flex flex-col items-center text-center w-full text-[10px] `}
                         href={'/store'}>
                         <Store className={`size-8`}/>
                         <h3>فروشگاه</h3>
                     </Link>
                     <Link
                         className={`flex flex-col items-center text-center w-full text-[10px] `}
                         href={'/'}>
                         <ShoppingCart className={`size-8`}/>
                         <h3>سبد خرید</h3>
                     </Link>
                     <Link
                         className={`flex flex-col items-center text-center w-full text-[10px] `}
                         href={'/dashboard'}>
                         <LayoutDashboard className={`size-8`}/>
                         <h3>حساب کاربری</h3>
                     </Link>

                 </div>
             </>
    )
}
