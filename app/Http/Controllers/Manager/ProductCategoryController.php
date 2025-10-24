<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\ProductCategory\StoreProductCategoryRequest;
use App\Http\Requests\Manager\ProductCategory\UpdateProductCategoryRequest;
use App\Http\Resources\Manager\ProductCategory\ProductCategoryCollection;
use App\Http\Resources\Manager\ProductCategory\ProductCategoryResource;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProductCategoryController extends Controller
{
    public function index(Request $request)
    {
        $query = ProductCategory::query();
        if ($request->filled('q')) {
            $query->where('name', 'like', '%' . $request->q . '%');
        }
        $productCategories = $query->paginate(20);
        return Inertia::render('manager/product-category/index', [
            'productCategoriesLists' => new ProductCategoryCollection($productCategories)
        ]);
    }

    public function create()
    {
        $productCategories = ProductCategory::all();
        return Inertia::render('manager/product-category/create', [
            'productCategoriesLists' => new ProductCategoryCollection($productCategories)
        ]);
    }

    public function store(StoreProductCategoryRequest $request)
    {
        try {
            $data = $request->validated();
            $category = ProductCategory::create($data);
            return to_route('manager.product-category.edit', $category)->with('success', 'دسته بندی با موفقیت ساخته شد شما در حال ویرایش آن هستید.');
        } catch (\Exception $exception) {
            Log::error('خطا در ذخیره دسته بندی محصول:', $exception->getMessage());
            return to_route('manager.product-category.index')->with('error', 'ساخت دسته بندی محصول با خطا مواجه شد!!!');
        }
    }

    public function edit(ProductCategory $productCategory)
    {
        $productCategories = ProductCategory::all();
        return INertia::render('manager/product-category/edit', [
            'productCategoriesLists' => new ProductCategoryCollection($productCategories),
            'productCategoryItem' => new ProductCategoryResource($productCategory),
        ]);
    }

    public function update(UpdateProductCategoryRequest $request, ProductCategory $productCategory)
    {
        try {
            $data = $request->validated();
            $productCategory->update($data);
            return to_route('manager.product-category.index')->with('success', 'دسته بندی با موفقیت ویرایش شد .');
        }catch (\Exception $exception){
            Log::error('خطا در اپدیت دسته بندی محصول:', $exception->getMessage());
            return to_route('manager.product-category.index')->with('error', 'اپدیت دسته بندی محصول با خطا مواجه شد!!!');
        }
    }

    public function status(Request $request, ProductCategory $productCategory)
    {
        $request->validate([
            'status' => 'required|in:active,check,deactivate',
        ]);
        try {
            $productCategory->update([
                'status' => $request->status,
            ]);
            return back()->with('success', 'وضعیت مقاله با موفقیت تغییر کرد.');
        } catch (\Exception $e) {
            return back()->with('error', 'تغییر وضعیت مقاله با خطا مواجه شد!');
        }
    }

    public function avatar(Request $request,  ProductCategory $productCategory)
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,jpg|max:2048',
        ]);
        try {
            $productCategory->clearMediaCollection('avatars');
            $name = $request->avatar->store('avatars/', 'public');
            $productCategory->addMedia(storage_path('app/public/' . $name))
                ->toMediaCollection('avatars', 'public');

            return back()->with('success', 'اواتار با موفقیت اپلود شد.');
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return back()->with('error', 'خطا در آپلود اواتار: ' . $e->getMessage());
        }
    }


}
