<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\VendorRequest;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class VendorRequestController extends Controller
{
    public function index()
    {
        $request = VendorRequest::where('user_id', auth()->id())->latest()->first();
        return Inertia::render('dashboard/vendor-request', [
            'requestStatus' => $request?->status,
        ]);
    }

    public function request()
    {
        try {
            $user = auth()->user();
            $request = VendorRequest::where('user_id', $user->id)->latest()->first();
            if ($request) {
                if ($request->status !== 'rejected') {
                    return back()->with('error', 'شما قبلاً درخواست ارسال کرده‌اید.');
                }
                VendorRequest::create([
                    'user_id' => $user->id,
                    'status' => 'pending',
                ]);

                return back()->with('success', 'درخواست مجدد ارسال شد.');
            }

            VendorRequest::create([
                'user_id' => $user->id,
                'status' => 'pending',
            ]);
            return back()->with('success', 'درخواست شما با موفقیت ثبت شد و در انتظار بررسی است.');
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
            return back()->with('success', 'درخواست با خطا مواجه شد لطفا ساعتی دیگر تلاش کنید.');
        }
    }

}
