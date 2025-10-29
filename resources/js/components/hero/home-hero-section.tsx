import laptop from './laptop.webp';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import store from '@/routes/store';
import { Store } from 'lucide-react';

export default function HomeHeroSection() {
    return (
        <div
            className={`grid grid-cols-1 items-center gap-4 space-y-2 px-4 md:grid-cols-2`}
        >
            <div className={`relative overflow-hidden`}>
                <div
                    className={`gradient absolute top-1/2 left-1/2 -z-10 size-40 -translate-x-1/2 -translate-y-1/2 transform sm:size-50 md:size-50 lg:size-80`}
                ></div>
                <img src={laptop} alt="خرید لپتاپ استوک" />
            </div>
            <div className={`space-y-4`}>
                <h1
                    className={`w-fit bg-gradient-to-l from-pink-500 from-10% to-pink-100 bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl lg:text-6xl`}
                >
                    خرید لپتاپ
                    <br />
                    استوک
                </h1>
                <div className={`flex items-center gap-2`}>
                    <span className="relative flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-pink-600"></span>
                    </span>
                    <h2 className={`font-thin`}>
                        بهترین سایت خرید لپ تاپ استوک
                    </h2>
                </div>
                <p>
                    لپتاپ استوک اصل، با قدرتی مثل نو و قیمتی که هیچ جایی پیدا
                    نمیکنی! تست شده، آماده استفاده با ۳۰ روز مهلت تست بیقید و
                    شرط. تجربه‌ای حرفه‌ای، اقتصادی و هوشمندانه برای دانشجو،
                    کاربر خانگی و حرفه‌ای ها همین حالا انتخاب کنید و از تکنولوژی
                    واقعی لذت ببرید!
                </p>
                <Button variant={'outline'} asChild>
                    <Link href={store.index()}>
                        خرید لپتاپ
                        <Store/>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
