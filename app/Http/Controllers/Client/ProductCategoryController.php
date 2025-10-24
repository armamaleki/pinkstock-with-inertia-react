<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Resources\Client\ProductCategory\ProductCategoryCollection;
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
}
