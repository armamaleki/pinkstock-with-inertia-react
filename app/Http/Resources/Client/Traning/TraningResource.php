<?php

namespace App\Http\Resources\Client\Traning;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TraningResource extends JsonResource
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
            'creator' => $this->user->name ?? 'مدیر سایت',
            'created' => Carbon::create($this->created_at)->ago() ?? 'امروز',
            'avatar' => $this->getMedia('avatars')->isNotEmpty()
                ? $this->getMedia('avatars')->first()->getFullUrl('watermark')
                : null,
        ];
    }
}
