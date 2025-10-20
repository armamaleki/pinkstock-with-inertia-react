<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\ProductCategory\StoreProductCategoryRequest;
use App\Http\Resources\Manager\ProductCategory\ProductCategoryCollection;
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
            return to_route('manager.product-category.index' , $category)->with('success', 'دسته بندی با موفقیت ساخته شد شما در حال ویرایش آن هستید.');
        } catch (\Exception $exception) {
            Log::error('خطا در ذخیره دسته بندی محصول:', $exception->getMessage());
            return to_route('manager.product-category.index')->with('error', 'ساخت دسته بندی محصول با خطا مواجه شد!!!');
        }
    }


}
