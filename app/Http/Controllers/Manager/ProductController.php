<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\Product\StoreProductRequest;
use App\Http\Requests\Manager\Product\UpdateProductRequest;
use App\Http\Resources\Manager\Attribute\AttributeCollection;
use App\Http\Resources\Manager\Product\ProductCollection;
use App\Http\Resources\Manager\Product\ProductResource;
use App\Http\Resources\Manager\ProductCategory\ProductCategoryCollection;
use App\Models\Attribute;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query();
        if ($request->filled('q')) {
            $query->where('name', 'like', '%' . $request->q . '%');
            $query->orWhere('sku', 'like', '%' . $request->q . '%');
        }
        $productList = $query->paginate(20);
        return Inertia::render('manager/product/index', [
            'productList' => new ProductCollection($productList),
        ]);
    }

    public function create()
    {
        $productCategories = ProductCategory::all();
        $attributesList = Attribute::all();
        return Inertia::render('manager/product/create', [
            'productCategoriesLists' => new ProductCategoryCollection($productCategories),
            'attributesList' => new AttributeCollection($attributesList),
        ]);
    }

    public function store(StoreProductRequest $request)
    {
        try {
            $data = $request->validated();
            $product = Product::create($data);
            $product->categories()->attach($data['category']);
            $attributes = collect($data['attributes']);
            $attributes->each(function ($item) use ($product) {
                if (is_null($item['name']) || is_null($item['value'])) {
                    return;
                }
                $attr = Attribute::firstOrCreate([
                    'name' => $item['name'],
                    'user_id' => auth()->id(),
                ]);

                $attr_value = $attr->values()->firstOrCreate([
                    'value' => $item['value'],
                ]);
                $product->attributes()->attach($attr->id, ['value_id' => $attr_value->id]);
            });
            return to_route('manager.product.index')->with('success', 'محصول با موفقیت انتشار داده شد.');
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
            return to_route('manager.product.index')->with('error', 'ساخت محصول با خطا مواجه شد!!!');
        }
    }

    public function show(Product $product)
    {

    }


    public function edit(Product $product)
    {
        $productCategories = ProductCategory::all();
        $attributesList = Attribute::all();
        return Inertia::render('manager/product/edit', [
            'productCategoriesLists' => new ProductCategoryCollection($productCategories),
            'productItem' => new ProductResource($product),
            'attributesList' => new AttributeCollection($attributesList),
        ]);
    }


    public function update(UpdateProductRequest $request, Product $product)
    {
        try {
            $data = $request->validated();
            $product->update($request->validated());
            $product->categories()->detach();
            $product->categories()->attach($request['category']);
            $product->attributes()->detach();
            $attributes = collect($data['attributes']);
            $attributes->each(function ($item) use ($product) {
                if (is_null($item['name']) || is_null($item['value'])) {
                    return;
                }
                $attr = Attribute::firstOrCreate([
                    'name' => $item['name'],
                    'user_id' => auth()->id(),
                ]);
                $attr_value = $attr->values()->firstOrCreate([
                    'value' => $item['value'],
                ]);
                $product->attributes()->attach($attr->id, [
                    'value_id' => $attr_value->id
                ]);
            });
            return to_route('manager.product.index')->with('success', 'محصول با موفقیت ویرایش شد.');
        }catch (\Exception $exception){
            Log::error($exception->getMessage());
            return to_route('manager.product.index')->with('error', 'ویرایش محصول با خطا مواجه شد!!!');
        }
    }

    public function status(Request $request, Product $product)
    {
        $request->validate([
            'status' => 'required|in:active,check,deactivate',
        ]);
        try {
            $product->update([
                'status' => $request->status,
            ]);
            return back()->with('success', 'وضعیت محصلول با موفقیت تغییر کرد.');
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return back()->with('error', 'تغییر وضعیت محصول با خطا مواجه شد!');
        }
    }

    public function avatar(Request $request, Product $product)
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,jpg|max:2048',
        ]);
        try {
            $product->clearMediaCollection('avatars');
            $name = $request->avatar->store('avatars/', 'public');
            $product->addMedia(storage_path('app/public/' . $name))
                ->toMediaCollection('avatars', 'public');

            return back()->with('success', 'اواتار با موفقیت اپلود شد.');
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return back()->with('error', 'خطا در آپلود اواتار: ' . $e->getMessage());
        }
    }

    public function gallery(Request $request, Product $product)
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,jpg|max:2048',
        ]);
        try {
            $name = $request->avatar->store('galleries/', 'public');
            $product->addMedia(storage_path('app/public/' . $name))
                ->toMediaCollection('galleries', 'public');

            return back()->with('success', 'عکس گالری با موفقیت اپلود شد.');
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return back()->with('error', 'خطا در آپلود تصویر: ' . $e->getMessage());
        }
    }
}
