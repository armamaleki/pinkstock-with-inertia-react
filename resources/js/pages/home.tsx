import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import HomeLayout from '@/layouts/home-layout';
import { Head } from '@inertiajs/react';
import HomeHeroSection from '@/components/hero/home-hero-section';
import CategoriesIconsHome from '@/components/hero/categories-icons-home';
import RepairServices from '@/components/repair-services';
import SingleArticle from '@/components/single-article';

export default function Home({ArticlesList}) {
    console.log(ArticlesList);
    return (
        <HomeLayout breadcrumbs={{}}>
            <Head>
                <title>
                    خرید محصولات دیجیتال، لپ تاپ، موبایل و لوازم جانبی با بهترین قیمت | پینک
                </title>

                <meta
                    name="description"
                    content="فروشگاه اینترنتی پینک، مرجع خرید انواع محصولات دیجیتال، لپ تاپ، موبایل، کامپیوتر، گجت و لوازم جانبی با بهترین قیمت و ضمانت اصالت کالا. تجربه خرید مطمئن و اقتصادی از پینک."
                />

                <meta name="author" content="پینک" />
                <meta name="creator" content="پینک" />
                <meta name="application-name" content="پینک" />
                <meta
                    name="category"
                    content="فروشگاه اینترنتی چندمنظوره محصولات دیجیتال"
                />

                <link rel="canonical" href="https://pinkstock.net" />

                <meta
                    property="og:title"
                    content="خرید محصولات دیجیتال، لپ تاپ، موبایل و لوازم جانبی با بهترین قیمت | پینک"
                />
                <meta
                    property="og:description"
                    content="فروشگاه اینترنتی پینک، مرجع خرید انواع محصولات دیجیتال، لپ تاپ، موبایل، گجت و لوازم جانبی با ضمانت اصالت و قیمت رقابتی. همین حالا خرید کن!"
                />
                <meta property="og:url" content="https://pinkstock.net" />
                <meta property="og:site_name" content="پینک" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/images/main-banner.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="فروشگاه اینترنتی پینک | خرید محصولات دیجیتال و لپ تاپ"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="خرید محصولات دیجیتال، لپ تاپ، موبایل و لوازم جانبی با بهترین قیمت | پینک"
                />
                <meta
                    name="twitter:description"
                    content="فروشگاه اینترنتی پینک، عرضه‌کننده انواع محصولات دیجیتال و استوک با ضمانت اصالت و قیمت مناسب."
                />
                <meta name="twitter:image" content="/assets/images/main-banner.png" />

                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            </Head>

            <HomeHeroSection />
            <CategoriesIconsHome />
            <RepairServices/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ArticlesList.data.map((articleItem , index)=>(
                    <SingleArticle key={index} articleValue={articleItem}/>
                ))}
            </div>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>لپ تاپ استوک چیست</AccordionTrigger>
                    <AccordionContent>
                        لپ تاپ استوک یعنی دستگاهی که قبلا استفاده شده یا از مرجع
                        شرکتی برگشت خورده ولی تعمیر و تست شده و قابل استفاده
                        مجدده. این مدل‌ها اغلب با قیمت به مراتب پایین‌تر از نو
                        عرضه میشن و برای کسایی که دنبال صرفه اقتصادی هستن انتخاب
                        عالیه. مهم اینه بدونی از کجا خرید میکنی و چه گارانتی یا
                        امکان تستی بهت میدن.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        بهترین سایت خرید لپ تاپ استوک
                    </AccordionTrigger>
                    <AccordionContent>
                        بهترین سایت خرید لپ تاپ استوک سایتیه که تنوع مدل داشته
                        باشه، مشخصات سخت افزاری رو کامل بزاره، وضعیت سلامت قطعات
                        رو شفاف اعلام کنه و پشتیبانی بعد از فروش قوی داشته باشه.
                        معیارها شامل امکان تست قبل از ارسال، گارانتی تعویض یا
                        بازگشت و توضیح دقیق درباره منشا دستگاه هستند.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        مرکز خرید لپ تاپ استوک تهران
                    </AccordionTrigger>
                    <AccordionContent>
                        اگه تهران هستی، مرکز خرید لپ تاپ استوک تهران یه مزیت
                        بزرگه چون میتونی حضوری امتحان کنی و از نزدیک وضعیت ظاهری
                        و عملکرد رو بررسی کنی. فروشندگان معتبر در این مراکز
                        معمولا مشاوره میدن و امکان تست سخت افزاری رو فراهم میکنن
                        تا خیال خریدار راحت باشه.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>لپ تاپ استوک بانه</AccordionTrigger>
                    <AccordionContent>
                        لپ تاپ استوک بانه به خاطر تنوع و قیمت رقابتی شناخته شده.
                        اگر دنبال مدل‌های مختلفی مثل لپ تاپ با پردازنده core i7
                        یا نمونه‌های اروپایی هستی، بانه میتونه گزینه‌ای باشه که
                        انتخاب‌های بیشتری پیش روت بذاره. البته باید دقت کنی
                        فروشنده معتبر باشه و شرایط بازگشت یا گارانتی روشن باشه.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>لیست قیمت لپ تاپ استوک</AccordionTrigger>
                    <AccordionContent>
                        داشتن یک لیست قیمت لپ تاپ استوک به روز بهت کمک میکنه
                        برندها و کانفیگ‌ها رو با هم مقایسه کنی. قیمت به
                        فاکتورهایی مثل نسل پردازنده، میزان رم، نوع هارد و سلامت
                        باتری بستگی داره. همیشه از چند فروشنده استعلام بگیر و
                        مشخصات فنی رو تطبیق بده تا بهترین معامله رو پیدا کنی.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        فروش عمده لپ تاپ استوک اروپایی
                    </AccordionTrigger>
                    <AccordionContent>
                        برای فروشگاه‌ها یا خریداران عمده، بازار فروش عمده لپ تاپ
                        استوک اروپایی جذابه چون دستگاه‌ها اغلب از استاندارد
                        بالاتری برخوردارن و میشه با قیمت رقابتی تهیه‌شون کرد. در
                        خرید عمده حتما منبع واردات، شرایط گمرک و وضعیت مرمت
                        دستگاه‌ها رو چک کن
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>
                        قیمت لپ تاپ استوک core i7
                    </AccordionTrigger>
                    <AccordionContent>
                        اگر دنبال لپ تاپ قوی‌تری هستی، مدل‌های مجهز به پردازنده
                        core i7 گزینه مناسبیه. این دستگاه‌ها برای کارهای سنگین،
                        تدوین و برنامه نویسی مناسبن و در نمونه استوک میشه با
                        هزینه معقولی تهیه‌شون کرد. دقت کن که نسل پردازنده و
                        وضعیت خنک کننده رو بررسی کنی چون این فاکتورها تاثیر
                        زیادی روی عملکرد دارن.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>
                        خرید کالای استوک و مزایا
                    </AccordionTrigger>
                    <AccordionContent>
                        خرید کالای استوک فقط محدود به لپ تاپ نیست؛ از مانیتور
                        گرفته تا قطعات جانبی هم شامل میشه. مزایای اصلی شامل قیمت
                        پایین‌تر، امکان دسترسی به مدل‌های حرفه‌ای و کاهش هدررفت
                        منابعه. اگر دنبال صرفه جویی هوشمندانه‌ای، خرید کالای
                        استوک میتونه راه درست باشه
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                    <AccordionTrigger>
                        کانال فروش لپ تاپ دست دوم و استوک{' '}
                    </AccordionTrigger>
                    <AccordionContent>
                        بعضی فروشنده‌ها کانال فروش لپ تاپ دست دوم دارن که توی
                        اونجا موجودی و تخفیف‌های لحظه‌ای رو اعلام میکنن؛ دنبال
                        کانال‌های معتبر باش که اطلاعات تماس و امکان تست رو فراهم
                        کنن. همچنین «استوک لند» به عنوان اسم تجاری در بین چند
                        فروشنده شناخته شده و میتونه یک مرجع اولیه برای بررسی
                        باشه، اما همیشه قبل از خرید از صحت گارانتی و اصالت کالا
                        مطمئن شو.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                    <AccordionTrigger>
                        نکات نهایی برای خرید مطمئن
                    </AccordionTrigger>
                    <AccordionContent>
                        قبل از خرید حتما مشخصات فنی رو بخون، از فروشنده بخواه
                        دستگاه رو روشن کنه، باتری و شرایط سلامت هارد رو بررسی کن
                        و اگر ممکنه از گارانتی یا تضمین بازگشت استفاده کن. در
                        خرید اینترنتی عکس‌ها و ویدیوهای واقعی از دستگاه رو بخواه
                        و رسیدهای مربوط به تعمیرات قبلی رو چک کن.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </HomeLayout>
    );
}
