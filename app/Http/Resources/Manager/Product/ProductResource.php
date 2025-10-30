<?php

namespace App\Http\Resources\Manager\Product;

use Carbon\Carbon;
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
            'id'=>$this->id,
            'avatar' => $this->getMedia('avatars')->isNotEmpty()
                ? $this->getMedia('avatars')->first()->getFullUrl('thumb')
                : null,
            'galleries' => $this->getMedia('galleries')->map(fn($media) => $media->getFullUrl('thumb')),
            'categories' => $this->categories->map(function ($category) {
                return [
                    'id' => $category->id,
                    'name' => $category->name,
                ];
            }),
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
            'created' => Carbon::create($this->created_at)->ago() ?? null,
            'updated' => Carbon::create($this->updated_at)->ago() ?? null,
        ];
    }
}
