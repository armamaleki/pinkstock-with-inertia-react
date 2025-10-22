<?php

namespace App\Http\Resources\Manager\ProductCategory;

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
            'id'=>$this->id,
            'avatar' => $this->getMedia('avatars')->isNotEmpty()
                ? $this->getMedia('avatars')->first()->getFullUrl('watermark')
                : null,
            'name'=>$this->name ?? null,
            'slug'=>$this->slug ?? null,
            'status'=>$this->status ?? null,
            'parent_id'=>$this->parent_id ?? null,
            'meta_title'=>$this->meta_title ?? null,
            'meta_description'=>$this->meta_description ?? null,
            'description'=>$this->description ?? null,
            'short_description'=>$this->short_description ?? null,
            'creator'=>$this->user->name ?? 'مدیر سایت',
        ];
    }
}
