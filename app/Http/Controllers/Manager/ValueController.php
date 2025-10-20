<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Resources\Manager\Attribute\AttributeCollection;
use App\Http\Resources\Manager\Value\ValueCollection;
use App\Http\Resources\Manager\Value\ValueResource;
use App\Models\Attribute;
use App\Models\Value;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ValueController extends Controller
{
    public function index(Request $request)
    {
        $query = Value::query();
        if ($request->filled('q')) {
            $query->where('value', 'like', '%' . $request->q . '%');
        }
        $values = $query->paginate(20);
        return Inertia::render('manager/values/index', [
            'valueLists' => new ValueCollection($values),
        ]);
    }

    public function create()
    {
        $attributeLists = Attribute::all();
        return Inertia::render('manager/values/create', [
            'attributeLists' => new AttributeCollection($attributeLists),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'value' => 'required|string|max:255|unique:values',
            'attribute_id' => 'required|integer|exists:attributes,id',
        ]);
        try {
            $value = Value::create($data);
            return to_route('manager.value.index')->with('success', 'مقدار با موفقیت ذخیره شد.');
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
            return to_route('manager.value.index')->with('error', 'ذخیره مقدار با خطا مواجه شد!!');
        }
    }

    public function show($id)
    {

    }

    public function edit(Value $value)
    {
        $attributeLists = Attribute::all();
        return Inertia::render('manager/values/edit', [
            'attributeLists' => new AttributeCollection($attributeLists),
            'valueItem' => new ValueResource($value),
        ]);
    }

    public function update(Request $request, Value $value)
    {
        $data = $request->validate([
            'value' => 'required|string|max:255|unique:values,' . $value->id,
            'attribute_id' => 'required|integer|exists:attributes,id',
        ]);
        try {
            $value->update($data);
            return to_route('manager.value.index')->with('success', 'مقدار با موفقیت آپدیت شد.');
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
            return to_route('manager.value.index')->with('error', 'آپدیت مقدار با خطا مواجه شد!!');
        }
    }
}
