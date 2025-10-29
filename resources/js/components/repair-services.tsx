import dotShape from './images/dotShape.png'
import repaired2 from './images/repaired2.jpg'
import repaired1 from './images/repaired1.jpg'
import { Backpack, CreditCard, FileX } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { repairs } from '@/routes';
export default function RepairServices() {
return(
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-4`}>
        <div className={`relative lg:p-16`}>
            <img
                className={`rounded-2xl lg:rounded-[130px]`}
                src={repaired1}
                alt={'تعمیر لپتاپ در محل'}/>
            <img
                className={`hidden lg:block absolute bottom-5  right-0 border-20 rounded-[80px] border-pink-100 h-120`}
                src={repaired2}
                alt={'تعمیر لپتاپ در محل'}/>
            <img
                className={`hidden lg:block absolute bottom-0 left-0 -z-10 animate-pulse`}
                src={dotShape}
                alt={'تعمیر لپتاپ در محل'}/>

        </div>
        <div className={`space-y-4`}>
            <div className={`flex gap-2 items-center`}>
                    <span className="relative flex size-3">
                      <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-pink-600"></span>
                    </span>
                <h2 className={`text-4xl font-bold`}>تعمیر لپتاپ</h2>
            </div>
            <h3 className={`font-bold`}>
                از مشکل تا راه حل، فقط یک تماس فاصله داری
            </h3>
            <p>
                برای هر مشکل سخت‌افزاری یا نرم‌افزاری، نیازی به جابه‌جایی دستگاه نیست.
                <br/>
                خدمات تخصصی تعمیر لپتاپ و کامپیوتر، نصب و تعویض ویندوز و راه‌اندازی نرم‌افزارها را مستقیما در منزل
                یا محل کار شما انجام می‌دهیم.
                <br/>
                تیم ما با تجهیزات کامل و گارانتی خدمات، اطمینان می‌دهد که دستگاه شما در کوتاه‌ترین زمان دوباره آماده
                کار باشد.
            </p>
            <Button variant={'outline'} asChild>
                <Link href={repairs()}>
                    سفارش تعمیر لپتاپ
                    <FileX/>
                </Link>
            </Button>
            <div className={`p-4 rounded-4xl border border-gray-600 divide-y`}>
                <div className={`flex gap-1 items-center p-2`}>
                    <div className={`bg-pink-500 rounded-full p-2`}>
                        <Backpack className={`size-12`}/>
                    </div>
                    <div>
                        <h4 className={`font-bold`}>تعمیر در محل بدون جابه‌جایی دستگاه</h4>
                        <p>
                            همیشه نیازی به بردن لپتاپ یا کامپیوتر به تعمیرگاه نیست و خدمات مستقیماً در خانه یا محل
                            کار شما انجام میشود.
                        </p>
                    </div>
                </div>
                <div className={`flex gap-1 items-center p-2`}>
                    <div className={`bg-pink-500 rounded-full p-2`}>
                        <CreditCard className={`size-12`}/>
                    </div>
                    <div>
                        <h4 className={`font-bold`}>قیمت منصفانه</h4>
                        <p>
                            مشتریان، خدمات تخصصی تعمیر در محل را با کیفیت بالا و
                            هزینه‌ای که کاملاً متناسب با خدمات دریافت شده است تجربه می‌کنند، بدون پرداخت های اضافه یا
                            هزینه های پنهان.
                        </p>
                    </div>
                </div>

            </div>
            {/*<LinkButton href={'/repairs'} >سفارش تعمیر لپتاپ  در محل </LinkButton>*/}
        </div>
    </div>
);
}
