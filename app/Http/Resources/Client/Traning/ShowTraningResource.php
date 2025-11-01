<?php

namespace App\Http\Resources\Client\Traning;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowTraningResource extends JsonResource
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
            'meta_title' => $this->name ?? null,
            'meta_description' => $this->name ?? null,
            'slug' => $this->slug ?? null,
            'created' => Carbon::create($this->created_at)->ago() ?? null,
            'creator' => $this->user->name ?? 'مدیر سایت',
            'short_description' => $this->short_description ?? null,
            'description' => $this->description ?? null,
            'avatar' => $this->getMedia('avatars')->isNotEmpty()
                ? $this->getMedia('avatars')->first()->getFullUrl('watermark')
                : null,
            'video' => $this->getMedia('videos')->isNotEmpty()
                ? $this->getMedia('videos')->first()->getFullUrl()
                : null,
        ];
    }
}
