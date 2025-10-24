<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoreController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::where('status', 'active');
        switch ($request->input('sort')) {
            case 'price-asc':
                $query->orderByRaw('price IS NULL')->orderBy('price', 'asc');
                break;

            case 'price-desc':
                $query->orderByRaw('price IS NULL')->orderBy('price', 'desc');
                break;

            case 'date-asc':
                $query->orderByRaw('price IS NULL')->orderBy('updated_at', 'asc');
                break;

            case 'date-desc':
            default:
                $query->orderByRaw('price IS NOT NULL DESC')->orderBy('updated_at', 'desc');
                break;
        }
        $productLists = $query->paginate(12);
        return Inertia::render('client/store/index');
    }
}
