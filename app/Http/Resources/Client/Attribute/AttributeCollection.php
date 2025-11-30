<?php

namespace App\Http\Resources\Client\Attribute;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class AttributeCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function toArray(Request $request): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        return AttributeResource::collection($this->collection);
    }
}
