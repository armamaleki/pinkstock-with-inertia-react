<?php

namespace App\Http\Requests\Manager\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
            "name" => 'required|max:255',
            "slug" => 'required|max:255|unique:products,slug,'.$this->product->id,
            'meta_title' => 'required|string|min:50|max:65',
            'meta_description' => 'required|string|min:120|max:155',
            'short_description' => 'required|string|max:250',
            'description' => 'required|string',
            "price" => 'nullable|numeric|min:0',
            "quantity" => 'nullable|numeric|min:0',
            'category' => ['required', 'array', 'min:1'],
            'category.*' => ['integer', 'exists:product_categories,id'],
//            'attributes' => ['required', 'array', 'min:1'],
//            'attributes.*' => ['integer', 'exists:attributes,id'],
        ];
    }
}
