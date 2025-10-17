<?php

namespace App\Http\Resources\Manager\Comment;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
          'id'=>$this->id,
          'body'=>$this->body ?? null,
          'user'=>$this->user->name ?? 'کاربر',
          'status'=>$this->status ?? null  ,
          'created'=>Carbon::create($this->created_at)->ago() ?? 'چند لحظه پیش'  ,
        ];
    }
}
