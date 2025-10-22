<?php

namespace App\Http\Requests\Manager\Article;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
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
            "slug" => 'required|max:255|unique:articles,slug',
            'meta_title' => 'required|string|min:50|max:65',
            'meta_description' => 'required|string|min:120|max:155',
            'short_description' => 'required|string|max:250',
            'description' => 'required|string',
        ];
    }
}
