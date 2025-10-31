import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { Head, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useForm } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';
import { login } from '@/routes';
import { verify } from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';

interface LoginProps {
    otp_sent?: boolean;
    otp_code?: string;
}
export default function Login({ otp_sent = false, otp_code }: LoginProps) {
    const [showOtpForm, setShowOtpForm] = useState<boolean>(otp_sent);
    const { props } = usePage();
    const [timer, setTimer] = useState<number>(0);

    const { data, setData, post, processing, errors, reset } = useForm<{
        phone: string;
        otp: string;
    }>({
        phone: '',
        otp: '',
    });
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleSendCode = (e: FormEvent) => {
        e.preventDefault();
        if (timer > 0) return;

        post(login.url(), {
            preserveScroll: true,
            onSuccess: (res) => {
                setShowOtpForm(true);
                setTimer(120);
                const otpFromFlash =
                    (res?.props as any)?.flash?.otp_code ||
                    (props?.flash as any)?.otp_code;

                if (otpFromFlash) {
                    console.log('OTP Code (for testing):', otpFromFlash);
                }
            },
        });
    };

    const handleVerifyCode = (e: FormEvent) => {
        e.preventDefault();
        post(verify().url, {
            preserveScroll: true,
        });
    };

    return (
        <AuthLayout
            title="ورود و یا ثبت نام"
            description="لطفا برای ورود و یا ثبت نام لطفا تلفن همراه خود را وارد کنید.">
            <Head title="ورود|ثبت نام" />

            <Card>
                <CardContent>
                    {!showOtpForm ? (
                        <form
                            onSubmit={handleSendCode}
                            className="flex flex-col gap-6"
                            dir="rtl"
                        >
                            <div className="grid gap-2">
                                <Label htmlFor="phone">تلفن همراه</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="0912..."
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData('phone', e.target.value)
                                    }
                                    required
                                    autoFocus
                                    autoComplete="tel"
                                />
                                <InputError message={errors.phone} />
                            </div>

                            <Button
                                type="submit"
                                className="w-full relative"
                                disabled={processing || timer > 0}
                            >
                                {processing ? (
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                ) : timer > 0 ? (
                                    <>
                                        ارسال مجدد تا{' '}
                                        <span className="font-bold">
                                        {timer}
                                    </span>{' '}
                                        ثانیه
                                    </>
                                ) : (
                                    'ارسال کد ورود'
                                )}
                            </Button>
                        </form>
                    ) : (
                        <form
                            onSubmit={handleVerifyCode}
                            className="flex flex-col gap-6"
                            dir="rtl"
                        >
                            <div className="grid gap-2">
                                <Label htmlFor="otp">کد تایید</Label>
                                <Input
                                    id="otp"
                                    type="text"
                                    name="otp"
                                    placeholder="کد ۵ رقمی"
                                    value={data.otp}
                                    onChange={(e) => setData('otp', e.target.value)}
                                    required
                                />
                                <InputError message={errors.otp} />
                            </div>

                            <input type="hidden" name="phone" value={data.phone} />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            >
                                {processing ? (
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                ) : (
                                    'ورود به حساب'
                                )}
                            </Button>

                            <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                                <button
                                    type="button"
                                    className="underline"
                                    onClick={() => {
                                        setShowOtpForm(false);
                                        reset('otp');
                                        setTimer(0);
                                    }}
                                >
                                    تغییر شماره
                                </button>

                                {timer > 0 ? (
                                    <span>
                                    ارسال مجدد در{' '}
                                        <span className="font-bold">{timer}</span>{' '}
                                        ثانیه
                                </span>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleSendCode}
                                        className="text-blue-600 underline"
                                    >
                                        ارسال مجدد کد
                                    </button>
                                )}
                            </div>
                        </form>
                    )}
                </CardContent>
            </Card>
        </AuthLayout>
    );
}
