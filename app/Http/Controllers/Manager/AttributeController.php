<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Resources\Manager\Attribute\AttributeCollection;
use App\Http\Resources\Manager\Attribute\AttributeResource;
use App\Models\Attribute;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AttributeController extends Controller
{
    public function index(Request $request)
    {
        $query = Attribute::query();
        if ($request->filled('q')) {
            $query->where('name', 'like', '%' . $request->get('q') . '%');
        }
        $attributeLists = $query->paginate(15);
        return Inertia::render('manager/attribute/index', [
            'attributeLists' => new AttributeCollection($attributeLists),
        ]);
    }

    public function create()
    {
        return Inertia::render('manager/attribute/create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255|unique:attributes,name',
            'icon' => 'required',
        ]);

        try {
            $attribute = Attribute::create($data);
            return to_route('manager.attribute.index')->with('success', 'ویژگی با موفقیت انتشار داده شد.');
        } catch (\Exception $exception) {
            Log::error($exception);
            return to_route('manager.attribute.index')->with('error', 'ساخت ویژگی با خطا مواجه شد!!');
        }
    }
    public function show(Attribute $attribute){

    }
    public function edit(Attribute $attribute){
        return Inertia::render('manager/attribute/edit', [
           'attributeItem' => new AttributeResource($attribute),
        ]);
    }
    public function update(Request $request, Attribute $attribute){
        $data = $request->validate([
            'name' => 'required|string|max:255|unique:attributes,name,'.$attribute->id,
            'icon' => 'required',
        ]);
        try {
            $attribute->update($data);
            return to_route('manager.attribute.index')->with('success', 'ویژگی با موفقیت آپدیت شد.');
        }catch (\Exception $exception){
            Log::error($exception);
            return to_route('manager.attribute.index')->with('error', 'آپدیت ویژگی با خطا مواجه شد!!');
        }
    }
}
