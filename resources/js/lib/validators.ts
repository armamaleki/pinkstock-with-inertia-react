export const validateStoreName = (value: string) => {
    if (!value) return "نام فروشگاه اجباری است";
    if (!/^[آ-ی\s]+$/.test(value)) return "فقط حروف فارسی مجاز است";
    if (value.length < 10 || value.length > 50)
        return "نام فروشگاه باید بین 10 تا 50 کارکتر باشد";
    if (value.includes("پینک"))
        return "استفاده از کلمه پینک مجاز نیست";

    return "";
};

export const validateSlug = (value: string) => {
    if (!value) return "اسلاگ اجباری است";
    if (!/^[a-z0-9-]+$/.test(value)) return "فقط حروف کوچک انگلیسی و خط تیره";

    return "";
};
export const validateAbout = (value: string) => {
    if (!value) return "درباره فروشگاه اجباری است";
    if (!/^[آ-ی\s]+$/.test(value)) return "فقط حروف فارسی مجاز است";
    if (value.length < 10 || value.length > 50)
        return 'باید بین 10 تا 150 کارکتر باشد.'
    return "";
};
export const validateWhatsapp = (value: string) => {
    if (!value) return "شماره واتس‌اپ اجباری است";

    const pattern = /^09\d{9}$/;

    return pattern.test(value)
        ? null
        : "شماره واتس‌اپ نامعتبر است (باید با 09 شروع شود و 11 رقم باشد)";
};

export const validateEmail = (value:string) =>
    !value
        ? "ایمیل اجباری است"
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? null
            : "ایمیل وارد شده معتبر نیست";
export const validateWebsite = (value:string) =>
    !value
        ? "آدرس وب‌سایت اجباری است"
        : /^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(value)
            ? null
            : "آدرس وب‌سایت معتبر نیست";
export const validateAddress = (value:string) =>
    !value ? "آدرس اجباری است" : null;


export const validateCity = (value:string) =>
    !value ? "شهر اجباری است" : null;

export const validateState = (value:string) =>
    !value ? "استان اجباری است" : null;

export const validatePostalCode = (value:string) =>
    !value ? "کد پستی اجباری است" : null;

export const validateInPersonBuy = (value:string) =>
    !value ? "امکان خرید حضوری باید مشخص شود" : null;

export const validateWorkingDays = (value:string) =>
    !value ? "روزهای کاری اجباری است" : null;

export const validateShippingMethods = (value:string) =>
    !value ? "روش ارسال اجباری است" : null;

export const validateNationalId = (value:string) =>
    !value ? "کد ملی اجباری است" : null;

export const validateEconomicCode = (value:string) =>
    !value ? "کد اقتصادی اجباری است" : null;

export const validatePhone = (value:string) =>
    !value
        ? "شماره موبایل اجباری است"
        : /^09\d{9}$/.test(value)
            ? null
            : "شماره موبایل معتبر نیست";


