import { ShoppingCart } from 'lucide-react';

export default function SearchBox() {
    return (
        <div className={`p-2 bg-gray-800  rounded-full w-full flex gap-2 items-center`}>
            <input
                className={`outline-0 border-0 p-2 w-full border-l border-gray-600`}
                placeholder={`جستجو بین محصولات...`}
                type="search"/>
            <div className={`p-1`}>
                <ShoppingCart className="size-6" />
            </div>

        </div>
    )
}
