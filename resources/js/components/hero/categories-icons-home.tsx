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
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={allInOne}
                    alt={'خرید all in one استوک'}
                />
                <h3>آل این وان استوک</h3>
            </Link>
            <Link
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={caseImage}
                    alt={'خرید کیس استوک'}
                />
                <h3>کیس استوک</h3>
            </Link>
            <Link
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={dellImage}
                    alt={'خرید لپتاپ دل استوک'}
                />
                <h3>لپ تاپ استوک DELL</h3>
            </Link>
            <Link
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={hpImage}
                    alt={'خرید لپتاپ اچ پی استوک'}
                />
                <h3>لپ تاپ استوک HP </h3>
            </Link>
            <Link
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={lenovoImage}
                    alt={'خرید لپتاپ استوک لنوو استوک'}
                />
                <h3>لپ تاپ استوک LENOVO </h3>
            </Link>
            <Link
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={macImage}
                    alt={'خرید لپتاپ مگ استوک'}
                />
                <h3>لپ تاپ استوک MAC</h3>
            </Link>
            <Link
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={monitorImage}
                    alt={'خرید مانیتور استوک'}
                />
                <h3>مانیتور استوک</h3>
            </Link>
            <Link
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={serverImage}
                    alt={'خرید سرور استوک'}
                />
                <h3>سرور استوک</h3>
            </Link>
            <Link
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={serverImage}
                    alt={'خرید سرور استوک'}
                />
                <h3>سرور استوک</h3>
            </Link>
            <Link
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={surfaceImage}
                    alt={'خرید all in one استوک'}
                />
                <h3>سرفیس استوک</h3>
            </Link>
            <Link
                href={`/store`}
                className={`flex flex-col items-center rounded-4xl border border-gray-500 p-1`}
            >
                <img
                    className={`w-35`}
                    src={tabletImage}
                    alt={'خرید تبلت استوک'}
                />
                <h3>تبلت استوک</h3>
            </Link>
        </div>
    );
}
