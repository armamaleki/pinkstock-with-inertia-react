<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Resources\Manager\Attribute\AttributeCollection;
use App\Models\Attribute;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AttributeController extends Controller
{
    public function index(Request $request)
    {
        $query = Attribute::query();
        if ($request->filled('q')) {
            $query->where('name' , 'like' , '%' . $request->get('q') . '%');
        }
        $attributeLists = $query->paginate(15);
        return Inertia::render('manager/attribute/index' , [
            'attributeLists' => new AttributeCollection($attributeLists),
        ]);
    }

    public function create()
    {
        return Inertia::render('manager/attribute/create');
    }
}
