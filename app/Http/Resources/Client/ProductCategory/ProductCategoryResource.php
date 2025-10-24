<?php

namespace App\Http\Resources\Client\ProductCategory;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductCategoryResource extends JsonResource
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
            'short_description' => $this->short_description ?? null,
            'slug' => $this->slug ?? null,
            'avatar' => $this->getMedia('avatars')->isNotEmpty()
                ? $this->getMedia('avatars')->first()->getFullUrl('watermark')
                : null,
        ];
    }
}
