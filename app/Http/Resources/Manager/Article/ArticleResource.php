<?php

namespace App\Http\Resources\Manager\Article;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
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
            'name' => $this->name ?? null,
            'slug' => $this->slug ?? null,
            'status' => $this->status ?? null,
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
