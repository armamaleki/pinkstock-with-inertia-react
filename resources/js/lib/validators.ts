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




// phone: '',
//     whatsapp: '',
//     email: '',
//     website: '',
//     address: '',
//     city: '',
//     state: '',
//     postal_code: '',
//     latitude: '',
//     longitude: '',
//     in_person_buy: '',
//     working_days: '',
//     shipping_methods: '',
//     national_id: '',
//     economic_code: '',
