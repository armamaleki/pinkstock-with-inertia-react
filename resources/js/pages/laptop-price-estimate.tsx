import { Head } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';
import { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

type Option = {
    value: string;
    label: string;
};

type SelectedOption = {
    min: number;
    max: number;
    label: string;
};

export default function LaptopPriceEstimate() {
    const brands: Option[] = [
        { value: '10000000,20000000', label: 'لنوو' },
        { value: '12000000,40000000', label: 'اچ پی' },
        { value: '14000000,25000000', label: 'دل' },
    ];

    const HddStorage: Option[] = [
        { value: '400000,600000', label: '256 گیگابایت' },
        { value: '500000,1000000', label: '500 گیگابایت' },
        { value: '2000000,2500000', label: '1 ترابایت' },
        { value: '2500000,3000000', label: '1.5 ترابایت' },
        { value: '3000000,4000000', label: '2 ترابایت' },
    ];

    const SsdStorage: Option[] = [
        { value: '1000000,1600000', label: '256 گیگابایتت' },
        { value: '2000000,3000000', label: '500 گیگابایتت' },
        { value: '5000000,6000000', label: '1 ترابایت' },
        { value: '6000000,7000000', label: '1.5 ترابایت' },
        { value: '8000000,12000000', label: '2 ترابایت' },
    ];

    const screen: Option[] = [
        { value: '2000000,3000000', label: '12 اینچ' },
        { value: '3000000,4000000', label: '13 اینچ' },
        { value: '4000000,5000000', label: '14 اینچ' },
        { value: '5000000,6000000', label: '15 اینچ' },
        { value: '6000000,7000000', label: '17 اینچ' },
    ];

    const cpu: Option[] = [
        { value: '1000000,2000000', label: 'i3 نسل 5' },
        { value: '2000000,3000000', label: 'i5 نسل 6' },
        { value: '4000000,5000000', label: 'i5 نسل 7' },
        { value: '4000000,5000000', label: 'i5 نسل 9' },
        { value: '6000000,4000000', label: 'i5 نسل 10' },
        { value: '7000000,8000000', label: 'i5 نسل 11' },
        { value: '1000000,2000000', label: 'i7 نسل 7' },
        { value: '2000000,3000000', label: 'i7 نسل 10' },
        { value: '3000000,4000000', label: 'i7 نسل 11' },
    ];

    const ram: Option[] = [
        { value: '250000,500000', label: '2 گیگابایت' },
        { value: '500000,1000000', label: '4 گیگابایت' },
        { value: '1000000,2000000', label: '8 گیگابایت' },
        { value: '2000000,4000000', label: '16 گیگابایت' },
    ];

    const gpu: Option[] = [
        { value: '2000000,3000000', label: 'AMD' },
        { value: '0,0', label: 'INTEL' },
        { value: '2000000,3000000', label: 'NVIDIA' },
    ];

    const body: Option[] = [
        { value: '1000000,11000000', label: 'سالم' },
        { value: '400000,7000000', label: 'خط و خش جزئی' },
        { value: '0,0', label: 'دارای آسیب' },
    ];

    // states
    const [selectedBrand, setSelectedBrand] = useState<SelectedOption | null>(null);
    const [selectedHdd, setSelectedHdd] = useState<SelectedOption | null>(null);
    const [selectedSsd, setSelectedSsd] = useState<SelectedOption | null>(null);
    const [selectedScreen, setSelectedScreen] = useState<SelectedOption | null>(null);
    const [selectedCpu, setSelectedCpu] = useState<SelectedOption | null>(null);
    const [selectedRam, setSelectedRam] = useState<SelectedOption | null>(null);
    const [selectedGpu, setSelectedGpu] = useState<SelectedOption | null>(null);
    const [selectedBody, setSelectedBody] = useState<SelectedOption | null>(null);

    const finalPrice = {
        min:
            (selectedBrand?.min || 0) +
            (selectedHdd?.min || 0) +
            (selectedSsd?.min || 0) +
            (selectedScreen?.min || 0) +
            (selectedCpu?.min || 0) +
            (selectedRam?.min || 0) +
            (selectedGpu?.min || 0) +
            (selectedBody?.min || 0),
        max:
            (selectedBrand?.max || 0) +
            (selectedHdd?.max || 0) +
            (selectedSsd?.max || 0) +
            (selectedScreen?.max || 0) +
            (selectedCpu?.max || 0) +
            (selectedRam?.max || 0) +
            (selectedGpu?.max || 0) +
            (selectedBody?.max || 0),
    };

    function handleBrandChange(value: string) {
        if (!value) return setSelectedBrand(null);
        const [min, max] = value.split(',').map(Number);
        setSelectedBrand({
            min,
            max,
            label: brands.find((b) => b.value === value)?.label || '',
        });
    }

    function handleHddChange(value: string) {
        if (!value) return setSelectedHdd(null);
        const [min, max] = value.split(',').map(Number);
        setSelectedHdd({
            min,
            max,
            label: HddStorage.find((h) => h.value === value)?.label || '',
        });
    }

    function handleSsdChange(value: string) {
        if (!value) return setSelectedSsd(null);
        const [min, max] = value.split(',').map(Number);
        setSelectedSsd({
            min,
            max,
            label: SsdStorage.find((h) => h.value === value)?.label || '',
        });
    }

    function handleScreenChange(value: string) {
        if (!value) return setSelectedScreen(null);
        const [min, max] = value.split(',').map(Number);
        setSelectedScreen({
            min,
            max,
            label: screen.find((h) => h.value === value)?.label || '',
        });
    }

    function handleCpuChange(value: string) {
        if (!value) return setSelectedCpu(null);
        const [min, max] = value.split(',').map(Number);
        setSelectedCpu({
            min,
            max,
            label: cpu.find((h) => h.value === value)?.label || '',
        });
    }

    function handleRamChange(value: string) {
        if (!value) return setSelectedRam(null);
        const [min, max] = value.split(',').map(Number);
        setSelectedRam({
            min,
            max,
            label: ram.find((h) => h.value === value)?.label || '',
        });
    }

    function handleGpuChange(value: string) {
        if (!value) return setSelectedGpu(null);
        const [min, max] = value.split(',').map(Number);
        setSelectedGpu({
            min,
            max,
            label: gpu.find((h) => h.value === value)?.label || '',
        });
    }

    function handleBodyChange(value: string) {
        if (!value) return setSelectedBody(null);
        const [min, max] = value.split(',').map(Number);
        setSelectedBody({
            min,
            max,
            label: body.find((h) => h.value === value)?.label || '',
        });
    }

    return (
        <HomeLayout>
            <Head>
                <title>تخمین قیمت لپ‌تاپ و کامپیوتر دست دوم | پینک استوک</title>
                <meta
                    name="description"
                    content="با ابزار تخمین قیمت پینک استوک، ارزش واقعی لپ‌تاپ و کامپیوتر دست دوم خود را به راحتی محاسبه کنید. بهترین راه برای خرید و فروش لپ‌تاپ کارکرده با قیمت منصفانه."
                />
                <meta name="author" content="پینک استوک" />
                <meta name="creator" content="پینک استوک" />
                <meta name="application-name" content="پینک استوک" />
                <meta name="category" content="فروشگاه لپ تاپ استوک و دست دوم" />
                <link
                    rel="canonical"
                    href="https://pinkstock.net/laptop-price-estimate"
                />
                <meta
                    property="og:title"
                    content="تخمین قیمت لپ‌تاپ و کامپیوتر دست دوم | پینک استوک"
                />
                <meta
                    property="og:description"
                    content="پینک استوک فروشگاه تخصصی خرید لپ تاپ استوک و دست دوم تست شده و کارکرده با ضمانت 30 روزه سلامت و تعویض. عرضه انواع لپ تاپ‌ برندهای معتبر لنوو، اچ پی و دل با بهترین قیمت."
                />
                <meta
                    property="og:url"
                    content="https://pinkstock.net/laptop-price-estimate"
                />
                <meta
                    property="og:site_name"
                    content="تخمین قیمت لپ‌تاپ و کامپیوتر دست دوم"
                />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/images/laptop.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="تخمین قیمت لپ‌تاپ و کامپیوتر دست دوم"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="تخمین قیمت لپ‌تاپ و کامپیوتر دست دوم | پینک استوک"
                />
                <meta
                    name="twitter:description"
                    content="با ابزار تخمین قیمت پینک استوک، ارزش واقعی لپ‌تاپ و کامپیوتر دست دوم خود را به راحتی محاسبه کنید. بهترین راه برای خرید و فروش لپ‌تاپ کارکرده با قیمت منصفانه."
                />
                <meta name="twitter:image" content="/assets/images/laptop.png" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            </Head>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-2">
                        <Select onValueChange={handleBrandChange} >
                            <SelectTrigger className="" dir={`rtl`}>
                                <SelectValue placeholder="برند دستگاه" />
                            </SelectTrigger>
                            <SelectContent className={'bg-gray-800'}  dir={`rtl`}>
                                {brands.map((brand , index)=>(
                                    <SelectItem key={index} value={brand.value}>{brand.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleHddChange} >
                            <SelectTrigger className="" dir={`rtl`}>
                                <SelectValue placeholder="حافظه HDD" />
                            </SelectTrigger>
                            <SelectContent  className={'bg-gray-800'} dir={`rtl`}>
                                {HddStorage.map((hdd , index)=>(
                                    <SelectItem key={index} value={hdd.value}>{hdd.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleSsdChange} >
                            <SelectTrigger className="" dir={`rtl`}>
                                <SelectValue placeholder="حافظه SSD" />
                            </SelectTrigger>
                            <SelectContent className={'bg-gray-800'} dir={`rtl`}>
                                {SsdStorage.map((ssd , index)=>(
                                    <SelectItem key={index} value={ssd.value}>{ssd.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleScreenChange} >
                            <SelectTrigger className="" dir={`rtl`}>
                                <SelectValue placeholder="اندازه صفحه نمایش" />
                            </SelectTrigger>
                            <SelectContent className={'bg-gray-800'} dir={`rtl`}>
                                {screen.map((scr , index)=>(
                                    <SelectItem key={index} value={scr.value}>{scr.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleCpuChange} >
                            <SelectTrigger className="" dir={`rtl`}>
                                <SelectValue placeholder="پردازندهSSD" />
                            </SelectTrigger>
                            <SelectContent className={'bg-gray-800'} dir={`rtl`}>
                                {cpu.map((cpuItem , index)=>(
                                    <SelectItem key={index} value={cpuItem.value}>{cpuItem.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleRamChange} >
                            <SelectTrigger className="" dir={`rtl`}>
                                <SelectValue placeholder="حافظه رم" />
                            </SelectTrigger>
                            <SelectContent className={'bg-gray-800'} dir={`rtl`}>
                                {ram.map((ramItem , index)=>(
                                    <SelectItem key={index} value={ramItem.value}>{ramItem.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleGpuChange} >
                            <SelectTrigger className="" dir={`rtl`}>
                                <SelectValue placeholder="نوع پردازنده گرافیکی" />
                            </SelectTrigger>
                            <SelectContent className={'bg-gray-800'} dir={`rtl`}>
                                {gpu.map((gpuItem , index)=>(
                                    <SelectItem key={index} value={gpuItem.value}>{gpuItem.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>


                        <Select onValueChange={handleBodyChange} >
                            <SelectTrigger className="" dir={`rtl`}>
                                <SelectValue placeholder="وضعیت سلامت دستگاه" />
                            </SelectTrigger>
                            <SelectContent  dir={`rtl`}>
                                {body.map((bodyItem , index)=>(
                                    <SelectItem key={index} value={bodyItem.value}>{bodyItem.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                    </div>
                </div>
                <div className="col-span-1">
                    <div className="sticky top-30 h-fit divide-y divide-dashed rounded-xl border border-dotted bg-gray-800 p-2">
                        <div className="flex justify-between py-2">
                            <h3 className="py-2 font-bold">محاسبه قیمت:</h3>
                            <div className="flex items-center gap-1">
                                <span className="text-green-600">
                                    کم ترین قیمت{' '}
                                </span>
                                ,
                                <span className="text-red-600">
                                    بیشترین قیمت
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between py-2">
                            <div className="flex gap-1">
                                <span>برند:</span>
                                <span>
                                    {selectedBrand
                                        ? selectedBrand.label
                                        : 'انتخاب نشده'}
                                </span>
                            </div>
                            <div className="flex gap-1">
                                <span className="text-green-600">
                                    {selectedBrand
                                        ? selectedBrand.min.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                                ,
                                <span className="text-red-600">
                                    {selectedBrand
                                        ? selectedBrand.max.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between py-2">
                            <div className="flex gap-1">
                                <span>حافظه HDD:</span>
                                <span>
                                    {selectedHdd
                                        ? selectedHdd.label
                                        : 'انتخاب نشده'}
                                </span>
                            </div>
                            <div className="flex gap-1">
                                <span className="text-green-600">
                                    {selectedHdd
                                        ? selectedHdd.min.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                                ,
                                <span className="text-red-600">
                                    {selectedHdd
                                        ? selectedHdd.max.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between py-2">
                            <div className="flex gap-1">
                                <span>حافظه SSD:</span>
                                <span>
                                    {selectedSsd
                                        ? selectedSsd.label
                                        : 'انتخاب نشده'}
                                </span>
                            </div>
                            <div className="flex gap-1">
                                <span className="text-green-600">
                                    {selectedSsd
                                        ? selectedSsd.min.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                                ,
                                <span className="text-red-600">
                                    {selectedSsd
                                        ? selectedSsd.max.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between py-2">
                            <div className="flex gap-1">
                                <span>اندازه صفحه نمایش:</span>
                                <span>
                                    {selectedScreen
                                        ? selectedScreen.label
                                        : 'انتخاب نشده'}
                                </span>
                            </div>
                            <div className="flex gap-1">
                                <span className="text-green-600">
                                    {selectedScreen
                                        ? selectedScreen.min.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                                ,
                                <span className="text-red-600">
                                    {selectedScreen
                                        ? selectedScreen.max.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between py-2">
                            <div className="flex gap-1">
                                <span>پردازنده:</span>
                                <span>
                                    {selectedCpu
                                        ? selectedCpu.label
                                        : 'انتخاب نشده'}
                                </span>
                            </div>
                            <div className="flex gap-1">
                                <span className="text-green-600">
                                    {selectedCpu
                                        ? selectedCpu.min.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                                ,
                                <span className="text-red-600">
                                    {selectedCpu
                                        ? selectedCpu.max.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between py-2">
                            <div className="flex gap-1">
                                <span>حافظه رم:</span>
                                <span>
                                    {selectedRam
                                        ? selectedRam.label
                                        : 'انتخاب نشده'}
                                </span>
                            </div>
                            <div className="flex gap-1">
                                <span className="text-green-600">
                                    {selectedRam
                                        ? selectedRam.min.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                                ,
                                <span className="text-red-600">
                                    {selectedRam
                                        ? selectedRam.max.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-between py-2">
                            <div className="flex gap-1">
                                <span>نوع پردازنده گرافیکی:</span>
                                <span>
                                    {selectedGpu
                                        ? selectedGpu.label
                                        : 'انتخاب نشده'}
                                </span>
                            </div>
                            <div className="flex gap-1">
                                <span className="text-green-600">
                                    {selectedGpu
                                        ? selectedGpu.min.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                                ,
                                <span className="text-red-600">
                                    {selectedGpu
                                        ? selectedGpu.max.toLocaleString(
                                              'fa-IR',
                                          )
                                        : 0}
                                </span>
                            </div>
                        </div>
                        <div className="mb-2 flex justify-between">
                            <span>کمترین قیمت نهایی:</span>
                            <span className="font-bold text-green-600">
                                {finalPrice.min.toLocaleString('fa-IR')}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>بیشترین قیمت نهایی:</span>
                            <span className="font-bold text-red-600">
                                {finalPrice.max.toLocaleString('fa-IR')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-96 overflow-y-scroll p-4 space-y-6" dir="rtl" lang="fa">
                <header className="space-y-2">
                    <h1 className="text-2xl font-bold">
                        تخمین قیمت لپ‌تاپ و کامپیوتر دست دوم – راهنمای کامل قیمت گذاری
                    </h1>
                    <p className="">
                        وقتی قصد فروش یا خرید لپ‌تاپ داری، یکی از مهم ترین دغدغه‌ها اینه که بدونی دستگاهت الان دقیقاً چقدر می‌ارزه. اینجاست که موضوع
                        تخمین قیمت لپ‌تاپ اهمیت پیدا می کنه. توی این صفحه قراره همه چیز رو درباره روش های قیمت گذاری لپ تاپ و حتی کامپیوتر دست دوم
                        بررسی کنیم.
                    </p>
                </header>
                <nav aria-label="فهرست مطالب" className="bg-gray-800 border rounded-xl p-3">
                    <h2 className="text-base font-semibold mb-2">فهرست مطالب</h2>
                    <ol className="list-decimal pr-5 space-y-1">
                        <li><a href="#why" className="hover:text-purple-600">چرا تخمین قیمت لپ‌تاپ مهمه؟</a></li>
                        <li><a href="#methods" className="hover:text-purple-600">روش های تخمین قیمت لپ‌تاپ دست دوم</a></li>
                        <li><a href="#calc" className="hover:text-purple-600">محاسبه آنلاین قیمت لپ‌تاپ دست دوم</a></li>
                        <li><a href="#dell" className="hover:text-purple-600">قیمت گذاری لپ‌تاپ دست دوم دل (Dell)</a></li>
                        <li><a href="#asus" className="hover:text-purple-600">قیمت گذاری لپ‌تاپ دست دوم ایسوس (ASUS)</a></li>
                        <li><a href="#compare" className="hover:text-purple-600">مقایسه قیمت بر اساس مشخصات</a></li>
                        <li><a href="#pc" className="hover:text-purple-600">تخمین قیمت کامپیوتر دست دوم</a></li>
                        <li><a href="#tips" className="hover:text-purple-600">نکات مهم در خرید و فروش</a></li>
                        <li><a href="#summary" className="hover:text-purple-600">جمع بندی</a></li>
                    </ol>
                </nav>
                <section id="why" className="space-y-3">
                    <h2 className="text-2xl font-bold">چرا تخمین قیمت لپتاپ مهمه؟</h2>
                    <p>
                        لپ‌تاپ یکی از وسایل پرمصرف امروزیه و با توجه به سرعت پیشرفت تکنولوژی، خیلی زود ارزشش تغییر می کنه.
                        اگر بخوای دستگاهت رو بفروشی، باید بدونی که <strong>قیمت لپ‌تاپ بر اساس مشخصات</strong> تعیین می‌شه؛
                        مثلاً رم بیشتر، پردازنده قوی تر یا کارت گرافیک مستقل، تأثیر مستقیم روی قیمت دارن. از طرف دیگه
                        عواملی مثل سالم بودن باتری، تمیز بودن بدنه و حتی مدت زمان استفاده هم توی تخمین قیمت تأثیرگذارن.
                    </p>
                </section>
                <section id="methods" className="space-y-3">
                    <h2 className="text-2xl font-bold">روش های تخمین قیمت لپتاپ دست دوم</h2>

                    <h3 className="text-lg font-semibold">۱) بررسی مشخصات سخت افزاری</h3>
                    <p>
                        اولین قدم برای تخمین قیمت لپ‌تاپ دست دوم، بررسی دقیق مشخصاته. لپ‌تاپی که پردازنده Core i7 نسل جدید
                        داره، طبیعتاً گرون تر از لپ‌تاپی با پردازنده قدیمی تر Core i3 هست. همین موضوع برای رم (۸ یا ۱۶ گیگ)،
                        نوع و ظرفیت ذخیره سازی (SSD یا HDD) و کارت گرافیک هم صدق می کنه.
                    </p>

                    <h3 className="text-lg font-semibold">۲) وضعیت ظاهری و سلامت قطعات</h3>
                    <p>
                        یه لپ‌تاپ ممکنه از نظر سخت‌افزاری خوب باشه، اما خط و خش روی بدنه یا خرابی کیبورد داشته باشه؛
                        این موارد قیمت رو پایین میارن. سلامت باتری، نمایشگر، لولاها و پورت ها رو هم بررسی کن.
                    </p>

                    <h3 className="text-lg font-semibold">۳) برند و مدل دستگاه</h3>
                    <p>
                        برند همیشه تأثیر زیادی روی قیمت داره. به طور مثال، قیمت گذاری لپ‌تاپ دست دوم دل یا ایسوس معمولاً بالاتره
                        چون کیفیت و تقاضای بازارشون بیشتره. سری دستگاه و سال تولید هم مهمه.
                    </p>
                </section>
                <section id="calc" className="space-y-3">
                    <h2 className="text-2xl font-bold">محاسبه آنلاین قیمت لپ‌تاپ دست دوم</h2>
                    <p>
                        یکی از راحت ترین روش ها برای تعیین قیمت، استفاده از ابزارهای محاسبه آنلاین قیمته. این سرویس ها بهت
                        اجازه میدن مشخصات دستگاهت رو وارد کنی (مثل مدل پردازنده، مقدار رم، ظرفیت هارد/SSD، برند و ...)،
                        و به صورت خودکار یه تخمین ارائه میکنن.
                    </p>
                    <div className="  border rounded-xl p-3">
                        <h3 className="text-base font-semibold mb-2">مزایای این روش</h3>
                        <ul className="list-disc pr-5 space-y-1">
                            <li>سریع و راحت</li>
                            <li>بی‌نیاز از واسطه</li>
                            <li>تخمین بر اساس قیمت های روز بازار</li>
                        </ul>
                    </div>
                </section>
                <section id="dell" className="space-y-3">
                    <h2 className="text-2xl font-bold">قیمت گذاری لپ‌تاپ دست دوم دل (Dell)</h2>
                    <p>
                        لپ‌تاپ های دل به دوام بالا، کیفیت ساخت عالی و کارایی خوب معروفن و تو بازار دست دوم هم ارزش بالایی دارن.
                        هنگام قیمت‌گذاری به موارد زیر توجه کن:
                    </p>
                    <ul className="list-disc pr-5 space-y-1">
                        <li>سری دستگاه (Latitude، Inspiron، XPS و ...)</li>
                        <li>سال تولید و نسل پردازنده</li>
                        <li>سلامت باتری و شارژر</li>
                        <li>داشتن کارت گرافیک اختصاصی یا آنبورد</li>
                    </ul>
                    <p className=" ">
                        مثلاً یه XPS با سخت‌افزار قوی حتی بعد از چند سال استفاده، هنوز قیمتی نزدیک تر به مدل های جدید داره.
                    </p>
                </section>
                <section id="asus" className="space-y-3">
                    <h2 className="text-2xl font-bold">قیمت گذاری لپ‌تاپ دست دوم ایسوس (ASUS)</h2>
                    <p>
                        ایسوس بین گیمرها و کاربرای حرفه‌ای محبوبه. در قیمت گذاری، این موارد رو بررسی کن:
                    </p>
                    <ul className="list-disc pr-5 space-y-1">
                        <li>مدل و سری (ROG، VivoBook، ZenBook و ...)</li>
                        <li>کارایی سیستم خنک کننده و سلامت فن ها</li>
                        <li>کیفیت و سلامت نمایشگر</li>
                        <li>تعداد پورت ها و سلامت‌شون</li>
                    </ul>
                    <p>به طور کلی سری ROG به خاطر قدرت بالای سخت افزاری، در بازار دست دوم هم قیمت بالاتری داره.</p>
                </section>
                <section id="compare" className="space-y-3">
                    <h2 className="text-2xl font-bold">مقایسه قیمت لپ‌تاپ بر اساس مشخصات</h2>
                    <p>برای اینکه بفهمی لپ‌تاپت چقدر می‌ارزه، قیمت رو بر اساس مشخصات کلیدی مقایسه کن:</p>
                    <ul className="list-disc pr-5 space-y-1">
                        <li>پردازنده Core i5 نسل ۱۰ ≈ قیمت متوسط</li>
                        <li>پردازنده Core i7 نسل ۱۲ ≈ قیمت بالاتر</li>
                        <li>رم ۴ گیگ ≈ ارزش کمتر / رم ۱۶ گیگ ≈ ارزش بیشتر</li>
                        <li>SSD ۵۱۲ گیگ ≈ ارزش بالاتر نسبت به HDD ۱ ترابایت</li>
                    </ul>
                </section>
                <section id="pc" className="space-y-3">
                    <h2 className="text-2xl font-bold">تخمین قیمت کامپیوتر دست دوم</h2>
                    <p>
                        موضوع فقط لپ‌تاپ نیست؛ خیلی‌ها دنبال تخمین قیمت کامپیوتر دست دوم هم هستن. کیس های اسمبل شده معمولاً
                        قطعات جداگانه دارن و قیمت گذاری شون کمی پیچیده تره. باید تک‌تک قطعات بررسی بشن:
                    </p>
                    <ul className="list-disc pr-5 space-y-1">
                        <li>مادربرد</li>
                        <li>پردازنده (CPU)</li>
                        <li>کارت گرافیک (GPU)</li>
                        <li>رم</li>
                        <li>حافظه (SSD/HDD)</li>
                        <li>پاور</li>
                        <li>کیس و خنک‌کننده‌ها</li>
                    </ul>
                    <p>هر قطعه ارزش خودش رو داره و جمع این قیمت ها، ارزش کلی سیستم رو مشخص می‌کنه.</p>
                </section>
                <section id="tips" className="space-y-3">
                    <h2 className="text-2xl font-bold">نکات مهم در خرید و فروش لپ‌تاپ دست دوم</h2>
                    <ul className="list-disc pr-5 space-y-1">
                        <li>قبل از خرید یا فروش، سلامت دستگاه رو کامل تست کن.</li>
                        <li>باتری رو چک کن؛ روی قیمت خیلی اثر داره.</li>
                        <li>برای تخمین اولیه از سرویس‌های محاسبه آنلاین استفاده کن.</li>
                        <li>برندهای پرطرفدار مثل Dell و ASUS معمولاً ارزش فروش بالاتری دارن.</li>
                        <li>قبل از واگذاری، حتماً اطلاعات شخصی رو پاکسازی و درایو رو ریست کن.</li>
                    </ul>
                </section>
                <footer id="summary" className="space-y-2 border-t pt-4">
                    <h2 className="text-2xl font-bold">جمع‌بندی</h2>
                    <p>
                        وقتی بحث تخمین قیمت لپ‌تاپ یا کامپیوتر دست دوم وسط باشه، عوامل زیادی اثر می‌ذارن: مشخصات سخت‌افزاری،
                        برند، سال تولید و سلامت ظاهری از مهم‌ترین‌ها هستن. با کمک ابزارهای آنلاین و مقایسه‌ی دقیق، می‌تونی
                        به تخمین نزدیک به واقعیت برسی و بهترین تصمیم رو بگیری.
                    </p>
                </footer>
            </div>
        </HomeLayout>
    );
}
