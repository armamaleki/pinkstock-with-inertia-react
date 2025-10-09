import { Head } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';
import DescriptionAtTheBottomOfThePage from '@/components/description-at-the-bottom-of-the-page';
import { Bug, Cog, MapPin, Phone, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typewriter from '@/components/typewriter';

const content = `
<section id="repair-bottom-content" class="w-full max-w-6xl mx-auto px-4 py-8">
  <h1 class="text-2xl md:text-3xl font-bold mb-6">خدمات تعمیر و ارتقا لپ‌تاپ — مرکز تخصصی</h1>

  <h2 class="text-xl font-semibold mt-6 mb-2">تعمیر لپ تاپ در حضور مشتری</h2>
  <p class="text-base leading-7 mb-4">متخصص‌های ما تمام مراحل عیب‌یابی و تعمیر را جلوی چشم شما انجام می‌دهند تا هم از کیفیت کار مطمئن شوید و هم زمانتان حفظ شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">تعمیرات لپ تاپ میدان ولیعصر</h2>
  <p class="text-base leading-7 mb-4">مرکز ما در حوالی میدان ولیعصر آماده ارائه خدمات سخت‌افزاری و نرم‌افزاری با تجهیزات پیشرفته و گارانتی تعمیر است.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">تعمیر لپتاپ تهران</h2>
  <p class="text-base leading-7 mb-4">به عنوان یکی از مراکز معتبر تعمیر لپ‌تاپ در تهران، انواع عیوب از ویندوز و نرم‌افزار تا تعویض مادربرد و قطعات را به‌صورت تخصصی انجام می‌دهیم.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">تعمیر لپ تاپ در محل</h2>
  <p class="text-base leading-7 mb-4">اگر وقت ندارید دستگاه را بیاورید، می‌توانید از سرویس تعمیر در محل استفاده کنید؛ تکنسین‌ها در زمان مشخص شده به محل شما مراجعه و دستگاه را همانجا بررسی و تعمیر می‌کنند.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">تعمیرات لپ تاپ غرب تهران</h2>
  <p class="text-base leading-7 mb-4">خدمات تعمیر برای ساکنین غرب تهران به‌صورت سریع و با همکاری نمایندگی‌های محلی ارائه می‌شود تا نیاز به رفت‌و‌آمد طولانی نباشد.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">بهترین مرکز تعمیر لپ تاپ در تهران</h2>
  <p class="text-base leading-7 mb-4">تیم حرفه‌ای، تجهیزات به‌روز و استانداردهای کیفی بالا باعث شده ما به‌عنوان یکی از بهترین مراکز تعمیر لپ‌تاپ در تهران شناخته شویم.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">تعمیر فوری لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">برای مواقع ضروری که دستگاه باید سریعاً راه‌اندازی شود، سرویس تعمیر فوری ارائه می‌دهیم تا اختلال کسب‌وکار یا کار روزمره‌تان کمتر شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">آموزش تعمیرات تخصصی لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">دوره‌های عملی و تخصصی تعمیر لپ‌تاپ زیر نظر استادان مجرب برگزار می‌شود؛ مناسب برای کسانی که می‌خواهند وارد بازار کار تعمیرات شوند.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">تعمیرات لپ تاپ کرج</h2>
  <p class="text-base leading-7 mb-4">نمایندگی خدمات ما در کرج هم فعال است و ساکنان کرج می‌توانند از ارسال، دریافت و تعمیر تخصصی بهره‌مند شوند.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه ارتقا رم لپ تاپ لنوو</h2>
  <p class="text-base leading-7 mb-4">هزینه ارتقا رم برای لپ‌تاپ‌های لنوو بسته به نوع ماژول و ظرفیت مورد نظر متفاوت است؛ کارشناسان ما مدل دستگاه شما را بررسی و هزینه دقیق را اعلام می‌کنند.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">از کجا بفهمیم رم لپ تاپ قابل ارتقا است</h2>
  <p class="text-base leading-7 mb-4">قابلیت ارتقا رم به مدل مادربرد و اسلات‌های موجود بستگی دارد؛ با ارسال مدل لپ‌تاپ یا مراجعه حضوری، این موضوع به‌صورت رایگان بررسی می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه ارتقا رم لپ تاپ ایسوس</h2>
  <p class="text-base leading-7 mb-4">برای لپ‌تاپ‌های ایسوس نیز امکان ارتقا رم وجود دارد و هزینه نهایی پس از بررسی مدل و نوع RAM تعیین می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">افزایش رم لپ تاپ در ویندوز 10</h2>
  <p class="text-base leading-7 mb-4">ارتقای رم در ویندوز 10 باعث افزایش سرعت اجرای برنامه‌ها و چندوظیفگی بهتر می‌شود؛ ما نصب و پیکربندی رم را همراه با تست عملکرد انجام می‌دهیم.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه ارتقا حافظه لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">تعویض هارد دیسک با SSD یا افزایش ظرفیت حافظه، یکی از موثرترین راه‌ها برای سرعت‌بخشی است؛ هزینه ارتقا حافظه با توجه به نوع SSD و ظرفیت انتخابی محاسبه می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">سایت ارتقا لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">در سایت ما می‌توانید خدمات ارتقا رم، نصب SSD، ارتقای گرافیک (در صورت امکان) و سرویس‌های نرم‌افزاری را مشاهده و سفارش دهید.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه ارتقا رم کامپیوتر</h2>
  <p class="text-base leading-7 mb-4">علاوه بر لپ‌تاپ، خدمات ارتقا رم برای کامپیوترهای رومیزی با قیمت مناسب و نصب امن ارائه می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">قیمت رم 8 گیگ لپ تاپ لنوو</h2>
  <p class="text-base leading-7 mb-4">رم 8 گیگ برای بسیاری از مدل‌های لنوو گزینه‌ای اقتصادی و پُرکاربرد است؛ قیمت دقیق بستگی به نوع DDR و فرکانس دارد که در لحظه استعلام می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه ارتقا رم لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">هزینه کلی شامل قیمت ماژول RAM و هزینه نصب است؛ ما قبل از انجام کار قیمت شفاف ارائه می‌دهیم تا بدون نگرانی ارتقا انجام شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه ارتقا SSD لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">تعویض یا نصب SSD باعث افزایش چشمگیر سرعت بوت و بارگذاری نرم‌افزارها می‌شود؛ هزینه ارتقا SSD بر اساس ظرفیت و نوع (SATA یا NVMe) مشخص می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه سرویس فن لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">سرویس دوره‌ای فن شامل تمیزکاری، تعویض خمیر سیلیکون در صورت نیاز و تست حرارتی است؛ هزینه سرویس فن معمولاً بسیار کمتر از تعمیرات مادربرد است.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه تعمیر لپ تاپ آب خورده</h2>
  <p class="text-base leading-7 mb-4">واکنش سریع درصورت نفوذ مایعات مهم است؛ هزینه تعمیر لپ‌تاپ آب‌خورده بسته به میزان آسیب و قطعات متأثر متفاوت است ولی ما راه‌حل‌های اقتصادی ارائه می‌دهیم.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه نصب ویندوز سال 1403</h2>
  <p class="text-base leading-7 mb-4">نصب ویندوز همراه با درایورها و نرم‌افزارهای پایه در سال 1403 با قیمت رقابتی انجام شده و پشتیبانی اولیه نیز ارائه می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه ارتقا گرافیک لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">ارتقای گرافیک در لپ‌تاپ‌ها معمولاً محدود است و به مدل دستگاه بستگی دارد؛ در صورت امکان، هزینه ارتقا گرافیک و گزینه‌های پیشنهادی توسط متخصص اعلام می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه نصب ویندوز سال 1404</h2>
  <p class="text-base leading-7 mb-4">در سال 1404 نیز نصب ویندوز با آخرین آپدیت‌ها، پیکربندی و نصب درایورها به‌صورت کامل انجام می‌پذیرد و هزینه آن بسته به خدمات همراه متغیر است.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه تعویض ال سی دی لپ تاپ لنوو</h2>
  <p class="text-base leading-7 mb-4">تعویض ال‌سی‌دی لپ‌تاپ لنوو با قطعات اورجینال یا کیفیت بالا و ضمانت انجام می‌شود؛ هزینه بسته به مدل و سایز نمایشگر متفاوت است.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه تعویض ال سی دی لپ تاپ ایسوس</h2>
  <p class="text-base leading-7 mb-4">برای لپ‌تاپ‌های ایسوس تعویض صفحه نمایش با قطعات مطمئن و نصب تخصصی انجام شده و هزینه مطابق مدل صفحه تعیین می‌گردد.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه تعویض ال سی دی لپ تاپ اچ پی</h2>
  <p class="text-base leading-7 mb-4">تعویض ال‌سی‌دی HP با تست نهایی برای نمایش صحیح رنگ و کیفیت انجام می‌شود و هزینه کاملاً شفاف به مشتری اعلام خواهد شد.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه تعویض ال سی دی لپ تاپ دل</h2>
  <p class="text-base leading-7 mb-4">در صورتی که نمایشگر دل آسیب دیده باشد، تعویض با قطعات سازگار انجام و هزینه براساس مدل دستگاه محاسبه می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه تعویض ال سی دی لپ تاپ ایسر</h2>
  <p class="text-base leading-7 mb-4">تعویض نمایشگر ایسر با تضمین کیفیت اجرا می‌شود و هزینه بر اساس قطعه و خدمات نصب تعیین خواهد شد.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">قیمت ال سی دی لپ تاپ لنوو دیجی کالا</h2>
  <p class="text-base leading-7 mb-4">در کنار ارائه خدمات تعمیر و تعویض، ما در تأمین قطعات از منابع معتبر مثل بازار آنلاین نیز کمک می‌گیریم تا قیمت‌ها و موجودی را بررسی و بهترین گزینه را پیشنهاد دهیم.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">تعمیر ال سی دی لپ تاپ دل</h2>
  <p class="text-base leading-7 mb-4">اگر نمایشگر لپ‌تاپ دل فقط خطوط یا لکه دارد، در بسیاری از موارد تعمیر جزئی ممکن است و نیازی به تعویض کامل نباشد؛ ابتدا عیب‌یابی دقیق انجام می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">قیمت ال سی دی لپ تاپ ایسوس</h2>
  <p class="text-base leading-7 mb-4">قیمت ال‌سی‌دی ایسوس متغیر است؛ ما پس از شناسایی مدل دقیق و تأمین قطعه مناسب، قیمت رقابتی و زمان تحویل را اعلام می‌کنیم.</p>

  <!-- موارد اضافه شده -->
  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه تعویض خمیر سیلیکون لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">تعویض خمیر سیلیکون باعث کاهش حرارت و افزایش عمر قطعات می‌شود؛ هزینه آن نسبت به تاثیر بالایی که دارد بسیار مناسب است.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه تعویض هارد لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">اگر هارد قدیمی شما کند یا خراب شده، هزینه تعویض هارد لپ‌تاپ با توجه به نوع HDD یا SSD و ظرفیت انتخابی محاسبه می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">تعرفه تعمیرات لپ تاپ 1403</h2>
  <p class="text-base leading-7 mb-4">تعرفه تعمیرات لپ‌تاپ در سال 1403 بر اساس نوع خدمات و قطعات به‌روز شده و قبل از انجام کار به صورت شفاف به مشتری اعلام می‌شود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه تعویض قاب لپ تاپ لنوو</h2>
  <p class="text-base leading-7 mb-4">در صورت شکستگی یا خط و خش قاب، هزینه تعویض قاب لپ‌تاپ لنوو به مدل دستگاه و کیفیت قاب بستگی دارد.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">هزینه تعمیر پیکسل سوخته لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">در صورت وجود پیکسل‌های سوخته روی نمایشگر، هزینه تعمیر یا تعویض بسته به شدت مشکل و مدل دستگاه متفاوت خواهد بود.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">آموزش سرویس لپ تاپ</h2>
  <p class="text-base leading-7 mb-4">آموزش سرویس لپ‌تاپ شامل تمیزکاری فن، تعویض خمیر سیلیکون و نگهداری اصولی است که به صورت دوره‌ای توصیه می‌شود.</p>
</section>
`;
export default function RepairsPage() {
    return (
        <HomeLayout>
            <Head>
                <title>
                    تعمیر لپ‌تاپ | خدمات تخصصی تعمیر لپ‌تاپ در پینک استوک
                </title>
                <meta
                    name="description"
                    content="خدمات تخصصی تعمیر لپ‌تاپ در پینک استوک. تعمیر انواع لپ‌تاپ‌های ایسوس، لنوو، اچ‌پی، دل و دیگر برندها با قطعات اصلی، گارانتی و قیمت منصفانه."
                />
                <meta name="author" content="پینک استوک" />
                <meta name="creator" content="پینک استوک" />
                <meta name="application-name" content="پینک استوک" />
                <meta name="category" content="خدمات" />
                <link
                    rel="canonical"
                    href="https://pinkstock.net/laptop-repair"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="تعمیر لپ‌تاپ | خدمات تخصصی تعمیر لپ‌تاپ در پینک استوک"
                />
                <meta
                    property="og:description"
                    content="تعمیر انواع لپ‌تاپ با قطعات اصلی، تست تخصصی و گارانتی معتبر در پینک استوک. خدمات سریع و مطمئن برای لپ‌تاپ شما."
                />
                <meta
                    property="og:url"
                    content="https://pinkstock.net/laptop-repair"
                />
                <meta property="og:site_name" content="پینک استوک" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://pinkstock.net/assets/images/logo.png"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="پینک استوک - تعمیر تخصصی لپ‌تاپ"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="تعمیر لپ‌تاپ | خدمات تخصصی تعمیر لپ‌تاپ در پینک استوک"
                />
                <meta
                    name="twitter:description"
                    content="بهترین خدمات تعمیر لپ‌تاپ با قطعات اصلی و گارانتی معتبر در پینک استوک. تعمیر سریع و تخصصی انواع برندهای لپ‌تاپ."
                />
                <meta
                    name="twitter:image"
                    content="https://pinkstock.net/assets/images/logo.png"
                />
                <meta name="robots" content="index, follow, nocache" />
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            </Head>
            <section className={`grid grid-cols-1 items-center gap-4 md:grid-cols-2`}>
                <div className={`space-y-4`}>
                    <h1
                        className={`bg-gradient-to-r from-pink-100 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl`}
                    >
                        تعمیر لپ تاپ{' '}
                    </h1>
                    <h2 className={`font-thin`}>
                        ------------------------------------------{' '}
                    </h2>
                    <p className={`text-justify`}>
                        اگه مشکل لپ تاپ شما ساده باشه، متخصصین ما در محل کار و
                        یا منزل شما حضور پیدا میکنن و همونجا مشکل رو برطرف
                        میکنن. در صورتی که دستگاه نیاز به تعمیرات اساسی داشته
                        باشه، میتونید دستگاه رو برای تعمیر به دفتر ما واقع در
                        پاساژ نور چهارراه طالقانی بیارید و یا با پیک ارسال کنید.
                    </p>
                    <div className={`space-y-4`}>
                        <div>
                            <a
                                className={`flex items-center gap-2`}
                                href="tel:+989125918435"
                            >
                                <Phone className={`size-6`} />
                                09125918435
                            </a>
                        </div>

                        <div className={`flex items-center gap-2`}>
                            <MapPin className={`size-6`} />
                            <span>
                                {' '}
                                آدرس:خیابان ولیعصر تقاطع چهار راه طالقانی پاساژ
                                نور تهران ورودی اداری طبقه دهم اداری واحد۲۲۰۳
                            </span>
                        </div>
                    </div>
                    <Button size="lg" className={'bg-pink-600'} asChild>
                        <a
                            className={`flex gap-1 items-center`}
                            href="tel:09125918435">
                            <Phone />
                            تماس با پشتیبانی
                        </a>
                    </Button>
                </div>
                <div>
                    <img
                        className={`shadow-pink-300 drop-shadow`}
                        style={{
                            objectFit: 'cover',
                            clipPath:
                                'shape(from 94.57% 39.89%,curve to 93.38% 59.58% with 93.72% 50.00%,curve to 87.09% 76.87% with 93.05% 69.17%,curve to 71.36% 85.11% with 81.13% 84.58%,curve to 53.31% 91.37% with 61.58% 85.63%,curve to 36.11% 93.33% with 45.05% 97.10%,curve to 23.36% 80.83% with 27.17% 89.55%,curve to 16.42% 64.96% with 19.56% 72.11%,curve to 11.59% 49.64% with 13.28% 57.80%,curve to 13.68% 33.92% with 9.89% 41.47%,curve to 21.36% 16.75% with 17.48% 26.37%,curve to 35.05% 4.12% with 25.24% 7.12%,curve to 54.65% 3.33% with 44.86% 1.12%,curve to 70.92% 12.56% with 64.45% 5.54%,curve to 86.41% 24.68% with 77.39% 19.58%,curve to 94.57% 39.89% with 95.43% 29.77%)',
                        }}
                        src={'/assets/images/laptop-repair-feature-half.webp'}
                        alt="تعمیر لپتاپ"
                    />
                </div>
            </section>
            <section className={`space-y-2`}>
                <div className={`flex gap-2 border-b  items-center`}>
                    <span className="relative flex size-3">
                      <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-pink-600"></span>
                    </span>
                    <h2 className={`font-bold`}>خدمات ما</h2>
                </div>
                <div className={`flex  justify-center items-center gap-4 flex-wrap`}>
                    <div
                        className={`flex flex-col items-center text-center p-2 border border-gray-600 rounded-xl space-y-2`}>
                         <img className={``} src={'/assets/images/shape/1.png'}   alt={``}/>
                        <h2 className={`font-bold`}>تعویض LCD شکسته</h2>
                    </div>
                    <div
                        className={`flex flex-col items-center text-center p-2 border border-gray-600 rounded-xl space-y-2`}>
                         <img className={``} src={'/assets/images/shape/2.png'}   alt={``}/>
                        <h2 className={`font-bold`}>تعمیر آبخوردگی لپ تاپ </h2>
                    </div>
                    <div
                        className={`flex flex-col items-center text-center p-2 border border-gray-600 rounded-xl space-y-2`}>
                         <img className={``} src={'/assets/images/shape/3.png'}   alt={``}/>
                        <h2 className={`font-bold`}>رفع ارور های لپ تاپ</h2>
                    </div>
                    <div
                        className={`flex flex-col items-center text-center p-2 border border-gray-600 rounded-xl space-y-2`}>
                         <img className={``} src={'/assets/images/shape/4.png'}   alt={``}/>
                        <h2 className={`font-bold`}>مشکلات اینترنت و وای فای لپتاپ </h2>
                    </div>
                    <div
                        className={`flex flex-col items-center text-center p-2 border border-gray-600 rounded-xl space-y-2`}>
                         <img className={``} src={'/assets/images/shape/6.png'}   alt={``}/>
                        <h2 className={`font-bold`}>ریکاوری لپ تاپ</h2>
                    </div>
                    <div
                        className={`flex flex-col items-center text-center p-2 border border-gray-600 rounded-xl space-y-2`}>
                         <img className={``} src={'/assets/images/shape/7.png'}   alt={``}/>
                        <h2 className={`font-bold`}>تعویض کیبورد لپ تاپ</h2>
                    </div>
                    <div
                        className={`flex flex-col items-center text-center p-2 border border-gray-600 rounded-xl space-y-2`}>
                         <img className={``} src={'/assets/images/shape/8.png'}   alt={``}/>
                        <h2 className={`font-bold`}>تعویض باتری لپ تاپ</h2>
                    </div>
                    <div
                        className={`flex flex-col items-center text-center p-2 border border-gray-600 rounded-xl space-y-2`}>
                         <img className={``} src={'/assets/images/shape/9.png'}   alt={``}/>
                        <h2 className={`font-bold`}>اورهال کردن لپ تاپ </h2>
                    </div>
                </div>
            </section>
            <section className={`space-y-2`}>
                <div className={`flex gap-2 border-b  items-center`}>
                    <span className="relative flex size-3">
                      <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-pink-600"></span>
                    </span>
                    <h2 className={`font-bold`}>ارتقاع لپتاپ های قدیمی</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <img
                            className={`rounded-xl`}
                            src={`/assets/images/upgrade.jpg`} alt={`ارتقاع لپتاپ های قدیمی `} />
                    </div>
                    <div className={`space-y-4`}>
                        <Typewriter
                            texts={["بدون خرید لپ تاپ جدید، همون دستگاه رو پرقدرت تر کن", "لپتاپ قدیمی تو با ارتقا دوباره زنده کن"]}
                            period={2000}/>

                        <p className={`text-justify`}>
                            لپ تاپ قدیمی شما هنوزم میتونه مثل یه دستگاه جدید براتون کار کنه. ما با ارتقای نرم افزاری و
                            سخت افزاری، جون تازه ای به لپ تاپتون میدیم. از ارتقای رم برای سرعت بیشتر گرفته تا تعویض هارد
                            قدیمی با SSD پرسرعت که بوت ویندوز و اجرای برنامه هاتون رو چندین برابر سریع تر میکنه. حتی با
                            بهینه سازی نرم‌افزاری، لپتاپتون سبک تر، روان تر و بدون هنگ کار میکنه. بدون نیاز به هزینه
                            سنگین خرید لپتاپ جدید، دستگاهتون دوباره مثل روز اول پرقدرت میشه.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-gray-800 py-12 rounded-xl shadow shadow-pink-100 sm:py-16 lg:py-20 xl:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className={`flex gap-2 text-center  items-center mx-auto w-fit`}>
                    <span className="relative flex size-3">
                      <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-pink-600"></span>
                    </span>
                            <h2 className={`font-bold`}>ما چه طور کار میکنیم؟</h2>
                        </div>
                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-pink-500 sm:text-4xl lg:text-5xl">
                            مرکز تعمیر لپ تاپ در تهران
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-pink-700 lg:text-xl lg:leading-8">
                            تعمیر لپ تاپ در حضور مشتری
                        </p>
                    </div>
                    <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
                        <li className="flex-start group relative flex lg:flex-col">
                            <div
                                className="absolute right-[18px]   top-14  w-px bg-gray-300 lg:left-0  lg:top-[18px] lg:h-px  "
                                aria-hidden="true"></div>
                            <div
                                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                                <Truck className="h-5 w-5 text-gray-600 group-hover:text-white"/>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h3
                                    className="text-xl font-bold  ">
                                    دریافت دستگاه
                                </h3>
                                <p className="mt-2">
                                    شما میتونید دستگاه خودتون رو بیارین دفتر و یا برای ما ارسال کنید.
                                </p>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <div
                                className="absolute right-[18px]   top-14  w-px bg-gray-300 lg:left-0  lg:top-[18px] lg:h-px  "
                                aria-hidden="true"></div>
                            <div
                                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                                <Bug className="h-5 w-5 text-gray-600 group-hover:text-white"/>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h3
                                    className="text-xl font-bold  ">
                                    عیب یابی و اعلام هزینه
                                </h3>
                                <p className="mt-2">
                                    پس از اعلام هزینه در صورت تایید شما تعمیر دستگاه انجام میشه.
                                </p>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <div
                                className="absolute right-[18px]   top-14  w-px bg-gray-300 lg:left-0  lg:top-[18px] lg:h-px  "
                                aria-hidden="true"></div>
                            <div
                                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                                <Cog className="h-5 w-5 text-gray-600 group-hover:text-white"/>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h3
                                    className="text-xl font-bold  ">
                                    تعمیر دستگاه
                                </h3>
                                <p className="mt-2">
                                    دستگاه با لوازم اصلی تعمیر میشه.
                                </p>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <div
                                className="absolute right-[18px]   top-14  w-px bg-gray-300 lg:left-0  lg:top-[18px] lg:h-px  "
                                aria-hidden="true"></div>
                            <div
                                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                                <Truck className="h-5 w-5 text-gray-600 group-hover:text-white"/>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h3
                                    className="text-xl font-bold  ">
                                    تحویل دستگاه به مشتری
                                </h3>
                                <p className="mt-2">
                                    میتونید خودتون برای دریافت بیایید و یا ما براتون با پیک ارسال کنیم.
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>
            <DescriptionAtTheBottomOfThePage content={content} />
        </HomeLayout>
    );
}
