<?php

namespace App\Http\Resources\Client\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'avatar' => $this->getMedia('avatars')->isNotEmpty()
                ? $this->getMedia('avatars')->first()->getFullUrl('watermark')
                : null,
            'avatar_thumb' => $this->getMedia('avatars')->isNotEmpty()
                ? $this->getMedia('avatars')->first()->getFullUrl('thumb')
                : null,
            'galleries' => $this->getMedia('galleries')->map(fn($media) => $media->getFullUrl('watermark')),

            'galleries_thumb' => $this->getMedia('galleries')->map(fn($media) => $media->getFullUrl('thumb')),
            'name' => $this->name ?? null,
            'slug' => $this->slug ?? null,
            'price' => $this->price ?? null,
            'status' => $this->status ?? null,
            'quantity' => $this->quantity ?? null,
            'creator' => $this->user->name ?? null,
            'meta_title'=>$this->meta_title ?? null,
            'meta_description'=>$this->meta_description ?? null,
            'description'=>$this->description ?? null,
            'short_description'=>$this->short_description ?? null,
            'attributes' => $this->attributes->map(function ($attribute) {
                return [
                    'id' => $attribute->id,
                    'name' => $attribute->name,
                    'value' => $attribute->values
                        ->firstWhere('id', $attribute->pivot->value_id)
                        ?->value,
                ];
            }),
        ];
    }
}
