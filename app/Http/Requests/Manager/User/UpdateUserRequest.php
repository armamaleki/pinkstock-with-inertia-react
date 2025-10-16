<?php

namespace App\Http\Requests\Manager\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'name' => 'nullable|string|max:255',
            'phone' => 'required|digits:11|numeric|regex:/(09)[0-9]{9}/|unique:users,phone,' . $this->user->id,
            'role' => 'required'
        ];
    }
}
