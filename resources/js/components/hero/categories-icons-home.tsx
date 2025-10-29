import { Link } from '@inertiajs/react';
import allInOne from './allInOne.png'
import caseImage from './caseImage.png'
import dellImage from './dellImage.png'
import hpImage from './hpImage.png'
import lenovoImage from './lenovoImage.png'
import macImage from './macImage.png'
import monitorImage from './monitorImage.png'
import serverImage from './serverImage.png'
import surfaceImage from './surfaceImage.png'
import tabletImage from './tabletImage.png'
export default function CategoriesIconsHome() {
    return (
        <div className={`flex flex-wrap items-center justify-center gap-4 px-4`}>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={allInOne}
                    alt={'خرید all in one '}
                />
                <h3>آل این وان </h3>
            </Link>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={caseImage}
                    alt={'خرید کیس '}
                />
                <h3>کیس </h3>
            </Link>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={dellImage}
                    alt={'خرید لپتاپ دل '}
                />
                <h3>لپ تاپ  DELL</h3>
            </Link>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={hpImage}
                    alt={'خرید لپتاپ اچ پی '}
                />
                <h3>لپ تاپ  HP </h3>
            </Link>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={lenovoImage}
                    alt={'خرید لپتاپ  لنوو '}
                />
                <h3>لپ تاپ  LENOVO </h3>
            </Link>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={macImage}
                    alt={'خرید لپتاپ مگ '}
                />
                <h3>لپ تاپ  MAC</h3>
            </Link>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={monitorImage}
                    alt={'خرید مانیتور '}
                />
                <h3>مانیتور </h3>
            </Link>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="900"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={serverImage}
                    alt={'خرید سرور '}
                />
                <h3>سرور </h3>
            </Link>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={serverImage}
                    alt={'خرید سرور '}
                />
                <h3>سرور </h3>
            </Link>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1100"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={surfaceImage}
                    alt={'خرید all in one '}
                />
                <h3>سرفیس </h3>
            </Link>
            <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={tabletImage}
                    alt={'خرید تبلت '}
                />
                <h3>تبلت </h3>
            </Link>
        </div>
    );
}
