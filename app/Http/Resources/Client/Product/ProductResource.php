<?php

namespace App\Http\Resources\Client\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name'=>$this->name,
            'slug' => $this->slug ?? null,
            'price' => $this->price ?? null,
            'avatar' => $this->getMedia('avatars')->isNotEmpty()
                ? $this->getMedia('avatars')->first()->getFullUrl('watermark')
                : null,
            'attributes' => $this->attributes->map(function ($attribute) {
                return [
                    'name' => $attribute->name,
                    'icon' => $attribute->icon,
                    'value' => optional(
                        $attribute->values->firstWhere('id', $attribute->pivot->value_id)
                    )->value,
                ];
            })->toArray(),
        ];
    }
}
