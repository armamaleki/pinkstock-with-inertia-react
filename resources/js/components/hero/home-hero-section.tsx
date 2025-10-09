import laptop from './laptop.webp'
export default function HomeHeroSection() {
    return(
        <div className={`space-y-2 grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-4`}>
            <div
                className={`relative overflow-hidden`}>
                <div
                    className={`absolute  size-40 sm:size-50 md:size-50  lg:size-80  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  gradient -z-10`}></div>
                <img src={laptop} alt="خرید لپتاپ استوک" />
            </div>
            <div className={`space-y-4`}>
                <h1 className={`text-2xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-l from-pink-500 from-10% to-pink-100 w-fit bg-clip-text text-transparent`}>
                    خرید لپتاپ
                    <br/>
                    استوک
                </h1>
                <div className={`flex gap-2 items-center`}>
                    <span className="relative flex size-3">
                      <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-pink-600"></span>
                    </span>
                    <h2 className={`font-thin`}>بهترین سایت خرید لپ تاپ استوک</h2>
                </div>
                <p>
                    لپتاپ استوک اصل، با قدرتی مثل نو و قیمتی که هیچ جایی پیدا نمیکنی! تست شده، آماده استفاده با ۳۰
                    روز مهلت تست بیقید و شرط. تجربه‌ای حرفه‌ای، اقتصادی و هوشمندانه برای دانشجو، کاربر خانگی و
                    حرفه‌ای ها همین حالا انتخاب کنید و از تکنولوژی واقعی لذت ببرید!
                </p>
                {/*<LinkButton href="/store">خرید لپتاپ استوک</LinkButton>*/}
            </div>
        </div>
    );
}
