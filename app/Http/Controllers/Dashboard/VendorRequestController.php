<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Vendor;
use App\Models\VendorRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class VendorRequestController extends Controller
{
    public function index()
    {
        $request = VendorRequest::where('user_id', auth()->id())->latest()->first();
        $store = auth()->user()->store;
        return Inertia::render('dashboard/vendor-request', [
            'requestStatus' => $request?->status,
            'storeItem' => $store
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

    public function update(Request $request)
    {
        $data = $request->validate([
            "store_name" => [
                "required",
                "regex:/^[آ-ی\s]+$/u",
                "min:10",
                "max:50",
                "not_regex:/پینک/u",
            ],

            "slug" => [
                "required",
                "regex:/^[a-z0-9\-]+$/",
            ],

            "about" => [
                "required",
                "regex:/^[آ-ی\s]+$/u",
                "min:10",
                "max:150",
            ],

            "whatsapp" => [
                "required",
                "regex:/^09\d{9}$/",
            ],

            "email" => [
                "required",
                "email",
            ],

            "website" => [
                "required",
                "regex:/^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/",
            ],

            "address" => "required",
            "city" => "required",
            "state" => "required",
            "postal_code" => "required",
//            "in_person_buy" => "required",
//            "working_days" => "required",
//            "shipping_methods" => "required",
            "national_id" => "required",
//            "economic_code" => "required",

            "phone" => [
                "required",
                "regex:/^09\d{9}$/",
            ],
        ]);
        $user = auth()->user();
        $vendor = Vendor::updateOrCreate(
            ['user_id' => $user->id], // شرط
            $data                // فیلدهایی که باید ذخیره یا آپدیت شود
        );
        return back();
    }

}
