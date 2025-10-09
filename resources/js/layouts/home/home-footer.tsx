import { Link } from '@inertiajs/react';
import {
    Calculator,
    Contact,
    Grid2x2Plus,
    MapPin,
    Newspaper, Phone,
    ReplaceAll,
    Store,
    TableOfContents,
    Users,
    Videotape,
} from 'lucide-react';

export default function HomeFooter() {
    return (
        <div className={`bg-gray-800 border-t p-2 pb-4 mb-20 sm:mb-0 `}>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '}>
                <div className={`space-y-2`}>
                    <p className={`font-extrabold`}>درباره پینک استوک</p>
                    <p className={`text-justify`}>
                        پینک استوک فروشگاهی قابل اعتماد که همواره در تلاش است تجربه‌ای متفاوت از خرید اینترنتی را برای
                        شما
                        فراهم آورد. ما با ارائه محصولات متنوع، کیفیت بالا و قیمت مناسب، همراه با گارانتی ۳۰ روزه تعویض،
                        سعی داریم خرید را برای شما ساده تر، سریع تر، لذت بخش تر و مطمئن تر کنیم. هدف پینک استوک ایجاد
                        فضایی
                        امن برای انتخاب و خرید آسان است تا شما با خیالی راحت از خرید خود لذت ببرید.
                    </p>
                </div>
                <div className={`space-y-2`}>
                    <p className={`font-extrabold`}>دسترسی سریع</p>
                    <Link
                        className={`flex gap-1 items-center`}
                        href={`/contact-us`}>
                        <Contact className={`size-6`}/>
                        تماس با پینک
                    </Link>
                    <Link
                        className={`flex gap-1 items-center`}
                        href={`/about-us`}>
                        <Users className={`size-6`}/>
                        درباره ما
                    </Link>
                    <Link
                        className={`flex gap-1 items-center`}
                        href={`/faq`}>
                        <TableOfContents className={`size-6`}/>
                        سوالات متداول
                    </Link>
                    <Link
                        className={`flex gap-1 items-center`}
                        href={`/store`}>
                        <Store className={`size-6`}/>
                        فروشگاه پینک استوک
                    </Link>
                    <Link
                        className={`flex gap-1 items-center`}
                        href={`/laptop-price-estimate`}>
                        <Calculator className={`size-6`}/>
                        محاسبه قیمت لپ تاپ
                    </Link>
                    <Link
                        className={`flex gap-1 items-center`}
                        href={`/product-categories`}>
                        <Grid2x2Plus className={`size-6`}/>
                        دسته بندی محصولات
                    </Link>
                    <Link
                        className={`flex gap-1 items-center`}
                        href={`/repairs`}>
                        <ReplaceAll className={`size-6`}/>
                        تعمیر لپ تاپ در محل
                    </Link>
                    <Link
                        className={`flex gap-1 items-center`}
                        href={`/articles`}>
                        <Newspaper className={`size-6`}/>
                        مقالات پینک
                    </Link>
                    <Link
                        className={`flex gap-1 items-center`}
                        href={`/training`}>
                        <Videotape className={`size-6`}/>
                        پینک آکادمی
                    </Link>
                </div>
                <div className={`space-y-2`}>
                    <p className={`font-extrabold`}>حساب کاربری</p>
                    <p className={`text-justify`}>
                        حسابش
                    </p>
                </div>
                <div className={`space-y-2`}>
                    <p className={`font-extrabold`}>تماس با ما</p>
                    <Link
                        className={`flex gap-1 items-center`}
                        href={`tel:+989125918435`}>
                        <Phone className={`size-6`}/>
                        تماس با پشتیبان سایت
                        <br/>
                        09125918435
                    </Link>
                    <div
                        className={`flex gap-1 items-center `}>
                        <div>
                            <MapPin className={`size-6`}/>
                        </div>
                        <p>
                            خیابان ولیعصر تقاطع چهار راه طالقانی پاساژ نور تهران ورودی اداری طبقه دهم اداری واحد۲۲۰۳
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
