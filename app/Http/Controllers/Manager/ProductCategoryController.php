<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Resources\Manager\ProductCategory\ProductCategoryCollection;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
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
        return Inertia::render('manager/product-category/index' , [
            'productCategoriesLists' => new ProductCategoryCollection($productCategories)
        ]);
    }

    public function create(){
        return Inertia::render('manager/product-category/create');
    }
    public function store(Request $request){

    }


}
