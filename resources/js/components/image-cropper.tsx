import { useCallback, useState } from 'react';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Cropper from 'react-easy-crop';
import { Cloud } from 'lucide-react';
import { router } from '@inertiajs/react';

export default function ImageCropper({
                                         url = "",
                                         onSuccess,
                                         aspect = 1,
                                         text = 'آپلود اواتار'
                                     }) {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("");
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const getCroppedImg = async () => {
        const imageObj = new Image();
        imageObj.src = image;
        await new Promise((resolve) => {
            imageObj.onload = resolve;
        });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx.drawImage(
            imageObj,
            croppedAreaPixels.x,
            croppedAreaPixels.y,
            croppedAreaPixels.width,
            croppedAreaPixels.height,
            0,
            0,
            croppedAreaPixels.width,
            croppedAreaPixels.height
        );

        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                resolve(blob);
            }, "image/jpeg");
        });
    };

    const onCropComplete = useCallback((_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const uploadCroppedImage = async () => {
        try {
            setIsUploading(true);
            const blob = await getCroppedImg();

            const formData = new FormData();
            formData.append("avatar", blob, fileName);

            router.post(url, formData, {
                forceFormData: true,
                onSuccess: () => {
                    setIsUploading(false);
                    setImage(null);
                    if (onSuccess) onSuccess();
                },
                onError: () => {
                    setIsUploading(false);
                    alert("خطا در آپلود تصویر");
                },
            });
        } catch (err) {
            console.error("خطا در پردازش تصویر:", err);
            setIsUploading(false);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">{text}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle dir="rtl">آپلود تصویر</AlertDialogTitle>

                    {!image ? (
                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Cloud className="size-12 text-gray-950" />
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">برای آپلود عکس کلیک کنید</span>
                                    </p>
                                    <p className="text-xs text-gray-500">فقط JPG (حداکثر 2MB)</p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    accept="image/jpeg"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    ) : (
                        <>
                            <div className="relative flex-1 min-h-[300px] bg-black rounded">
                                <Cropper
                                    image={image}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={aspect}
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    onCropComplete={onCropComplete}
                                />
                            </div>
                            <div className="flex justify-between mt-4">
                                <Button onClick={uploadCroppedImage} disabled={isUploading}>
                                    {isUploading ? 'در حال آپلود...' : 'برش و آپلود'}
                                </Button>
                                <Button variant="secondary" onClick={() => setImage(null)}>
                                    انتخاب مجدد تصویر
                                </Button>
                            </div>
                        </>
                    )}
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>انصراف</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
