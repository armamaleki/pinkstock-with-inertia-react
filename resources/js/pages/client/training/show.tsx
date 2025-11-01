import type { BreadcrumbItem } from '@/types';
import { home } from '@/routes';
import training from '@/routes/training';
import HomeLayout from '@/layouts/home-layout';
import { Clock, User } from 'lucide-react';
import 'video.js/dist/video-js.css';
import { useEffect, useRef } from 'react';
import videojs from 'video.js';


export default function Show({trainingItem}){
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'پینک استوک',
            href: home(),
        },
        {
            title: 'پینک آکادمی',
            href: training.index(),
        },
        {
            title: trainingItem.name,
            href: '',
        },
    ];

    // رفرنس برای ویدیو
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (!playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                autoplay: false,
                preload: 'auto',
                fluid: true,
                sources: [
                    {
                        src: trainingItem.data.video, // آدرس ویدیو از سرورت
                        type: 'video/mp4', // یا هر فرمتی که داری
                    },
                ],
            });
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [trainingItem.data.video]);
    return(
        <HomeLayout breadcrumbs={breadcrumbs}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                <div className="col-span-1 md:col-span-2 lg:col-span-3 shadow-md dark:bg-gray-800  shadow-pink-800 overflow-hidden rounded-xl ">
                    <div className="video-wrapper">
                        <video
                            ref={videoRef}
                            className="video-js vjs-big-play-centered rounded-xl overflow-hidden"
                        />
                    </div>

                    <div className="p-4 space-y-4">
                        <div className="flex justify-between items-center">
                    <span className="flex gap-1 items-center">
                                   <Clock className="size-6"/>
                                   <span>{trainingItem.data.created}</span>
                               </span>
                            <span className="flex gap-1 items-center">
                                   <User className="size-6"/>
                                   <span>{trainingItem.data.creator}</span>
                               </span>
                        </div>
                        <h1 className={'text-2xl font-bold'}>
                            {trainingItem.data.name}
                        </h1>
                        <div className={'text-justify'}>
                            <div
                                className={`editor text-justify`}
                                dangerouslySetInnerHTML={{
                                    __html: (trainingItem.data?.description)
                                        .replace(/&zwnj;|&zwj;|&nbsp;|&shy;|&thinsp;|&ensp;|&emsp;|&hairsp;/g, " ")
                                        .replace(/[\u200C\u200D\u00A0\u00AD\u200A\u2000\u2001\u2002\u2003]/g, " ")
                                        .replace(/\s+/g, " ")
                                        .trim()
                                }}

                            />

                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
