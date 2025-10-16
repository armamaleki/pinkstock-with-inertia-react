import React, { useState, useCallback } from "react";
import Cropper, { Area } from "react-easy-crop";

interface ImageCropperProps {
    aspect?: number;
    url?: string;
    onSuccess?: (file: File) => void; // ✅ فایل واقعی برگردونده میشه
}

export default function ImageCropper({ aspect = 16 / 9, url, onSuccess }: ImageCropperProps) {
    const [image, setImage] = useState<string | null>(url || null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

    const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () => setImage(reader.result as string));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const createImage = (url: string) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.addEventListener("load", () => resolve(img));
            img.addEventListener("error", error => reject(error));
            img.src = url;
        });

    const getCroppedFile = async (imageSrc: string, pixelCrop: Area): Promise<File | null> => {
        const img = await createImage(imageSrc);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;

        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;

        ctx.drawImage(
            img,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );

        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                if (blob && onSuccess) {
                    const file = new File([blob], "avatar.jpg", { type: "image/jpeg" });
                    resolve(file);
                    onSuccess(file); // ✅ فایل واقعی رو میفرستیم بیرون
                } else {
                    resolve(null);
                }
            }, "image/jpeg");
        });
    };

    // هر بار کراپ تغییر کرد، فایل کراپ‌شده رو بساز
    React.useEffect(() => {
        if (image && croppedAreaPixels) {
            getCroppedFile(image, croppedAreaPixels);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image, croppedAreaPixels]);

    return (
        <div className="flex flex-col gap-2">
            {!image ? (
                <input type="file" accept="image/*" onChange={onSelectFile} />
            ) : (
                <>
                    <div className="relative w-full h-64 bg-gray-200">
                        <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            aspect={aspect}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>
                    <button
                        type="button"
                        className="px-3 py-1 bg-gray-300 rounded mt-2"
                        onClick={() => setImage(null)}
                    >
                        انتخاب دوباره
                    </button>
                </>
            )}
        </div>
    );
}
