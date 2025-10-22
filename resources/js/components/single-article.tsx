import { Link } from '@inertiajs/react';
import article from '@/routes/article';

export default function SingleArticle({articleValue}) {
    return(
        <Link href={article.show(articleValue.slug)} className="block group text-gray-800">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img src={articleValue.avatar || '/assets/images/articlePlaceHolder.jpg'}
                     className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                     alt="{article.name}" />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/90"></div>
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/50 p-4 rounded-lg">
                    <h2 className="font-extrabold text-2xl mb-2 ">
                        {articleValue.name}
                    </h2>
                    <p className="text-sm leading-relaxed">
                        {articleValue.short_description}
                    </p>
                </div>
            </div>
        </Link>
    )
}
