<?php

namespace App\Http\Resources\Client\Traning;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TraningCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function toArray(Request $request): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        return TraningResource::collection($this->collection);
    }
}
