import { Link } from '@inertiajs/react';
import {
    ChartCandlestick,
    Gauge,
    GraduationCap,
    Grid2x2Plus,
    ListOrderedIcon,
    MessageCircleCode,
    Newspaper,
    ShieldAlert,
    ShoppingBasket,
    SwatchBook,
    User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import manager from '@/routes/manager';
import value from '@/routes/manager/value';

export default function ManagerSidebar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {menuOpen && (
                <div
                    className={'fixed top-4 z-40 right-4 h-4/5 w-80 space-y-4 overflow-auto rounded-xl bg-gray-800 p-4 shadow-lg shadow-pink-400'}>
                    <div>
                        <Link
                            className={
                                'flex items-center gap-1 border-b border-pink-400 p-2'
                            }
                            href={manager.index()}>
                            <Gauge />
                            داشبورد
                        </Link>
                    </div>
                    <p className={'text-sm font-thin'}>مدیریت کاربران</p>
                    <div>
                        <div>
                            <Link
                                className={
                                    'flex items-center gap-1 border-b border-pink-400 p-2'
                                }
                                href={manager.user.index()}>
                                <User />
                                کاربران
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={
                                    'flex items-center gap-1 border-b border-pink-400 p-2'
                                }
                                href={manager.role.index()}>
                                <ShieldAlert />
                                دسترسی ها
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={
                                    'flex items-center gap-1 border-b border-pink-400 p-2'
                                }
                                href={manager.order.index()}>
                                <ListOrderedIcon />
                                سفارشات
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={
                                    'flex items-center gap-1 border-b border-pink-400 p-2'
                                }
                                href={manager.comment.index()}>
                                <MessageCircleCode />
                                پرسش و پاسخ
                            </Link>
                        </div>
                    </div>
                    <p className={'text-sm font-thin'}>مدیریت محصولات</p>
                    <div>
                        <div>
                            <Link
                                className={
                                    'flex items-center gap-1 border-b border-pink-400 p-2'
                                }
                                href={manager.productCategory.index()}>
                                <Grid2x2Plus />
                                دسته بندی محصولات
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={
                                    'flex items-center gap-1 border-b border-pink-400 p-2'
                                }
                                href={manager.attribute.index()}>
                                <SwatchBook />
                                ویژگی محصولات
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={
                                    'flex items-center gap-1 border-b border-pink-400 p-2'
                                }
                                href={value.index()}>
                                <ChartCandlestick />
                                مقدار های ویژگی
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={
                                    'flex items-center gap-1 border-b border-pink-400 p-2'
                                }
                                href={manager.product.index()}>
                                <ShoppingBasket />
                                محصولات
                            </Link>
                        </div>
                    </div>

                    <div>
                        <Link
                            className={
                                'flex items-center gap-1 border-b border-pink-400 p-2'
                            }
                            href={manager.article.index()}>
                            <Newspaper />
                            مقالات
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={
                                'flex items-center gap-1 border-b border-pink-400 p-2'
                            }
                            href={manager.pinkAcademy.index()}>
                            <GraduationCap />
                            پینک آکادمی
                        </Link>
                    </div>
                </div>
            )}

            <Button
                onClick={() => setMenuOpen(!menuOpen)}
                className={'fixed bottom-10 left-10'}>
                {menuOpen ? 'بستن منو' : 'منو'}
            </Button>
        </>
    );
}
