<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Value extends Model
{
    /** @use HasFactory<\Database\Factories\ValueFactory> */
    use HasFactory;
    protected $fillable = [
        'value',
        'sort_order',
        'attribute_id',
    ];

    protected static function booted()
    {
        static::addGlobalScope('latest', function ($query) {
            $query->orderBy('created_at', 'desc');
        });
    }


    public function attribute()
    {
        return $this->belongsTo(Attribute::class);
    }
}
