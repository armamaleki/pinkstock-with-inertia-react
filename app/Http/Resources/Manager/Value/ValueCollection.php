<?php

namespace App\Http\Resources\Manager\Value;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ValueCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
 */
    public function toArray(Request $request):  \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        return ValueResource::collection($this->collection);
    }
}
