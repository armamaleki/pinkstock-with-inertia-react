<?php

namespace App\Http\Requests\Manager\ProductCategory;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:250|unique:product_categories,name,'.$this->productCategory->id,
            'slug' => 'required|string|max:250|unique:product_categories,slug,'.$this->productCategory->id,
            'parent_id' => 'nullable|integer|exists:product_categories,id',
            'meta_title' => 'required|string|min:50|max:65',
            'meta_description' => 'required|string|min:120|max:155',
            'short_description' => 'required|string|max:250',
            'description' => 'required|string',
        ];
    }
}
