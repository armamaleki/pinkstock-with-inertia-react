<?php

namespace App\Http\Resources\Client\Attribute;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AttributeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name ?? null,
            'icon' => $this->icon ?? null,
            'values' => $this->values->map(function ($value) {
                return [
                    'name' => $value->value,
                ];
            }),
        ];
    }
}
