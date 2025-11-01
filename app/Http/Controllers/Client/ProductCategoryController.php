<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Resources\Client\ProductCategory\ProductCategoryCollection;
use App\Http\Resources\Client\ProductCategory\ProductCategoryResource;
use App\Http\Resources\Client\ProductCategory\ShowProductCategoryResource;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductCategoryController extends Controller
{
    public function index(){
        $productCategories = ProductCategory::latestUpdated()->where('status', 'active')->paginate(9);
        return Inertia::render('client/product-categories/index' ,[
            'productCategoriesList' => new ProductCategoryCollection($productCategories),
        ]);
    }

    public function show(ProductCategory $productCategory){
        if ($productCategory->status !== 'active') {
            abort(404);
        }
        // ابتدا اطلاعات دسته‌بندی رو لود کن
        $productCategory->load('user', 'media');

        // محصولات این دسته‌بندی با paginate
        $products = $productCategory->products()
            ->where('status', 'active')
            ->latest()
            ->paginate(12) // هر صفحه 12 محصول
            ->withQueryString(); // برای حفظ پارامتر page در آدرس

        return Inertia::render('client/product-categories/show', [
            'productCategoryItem' => new ShowProductCategoryResource($productCategory),
            'products' => \App\Http\Resources\Client\Product\ProductResource::collection($products),
            'links' => $products->linkCollection(), // لینک‌های صفحه‌بندی برای Vue/Inertia
        ]);
    }
}
