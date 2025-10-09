<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Attribute extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'user_id',
        'icon',
    ];
    public function values()
    {
        return $this->hasMany(AttributeValue::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected static function booted()
    {
        static::creating(function ($attribute) {
            if (auth()->check()) {
                $attribute->user_id = auth()->id();
            }
        });
        static::updating(function ($attribute) {
            if (auth()->check()) {
                $attribute->user_id = auth()->id();
            }
        });
    }

    public function scopeLatestUpdated($query)
    {
        return $query->orderBy('updated_at', 'desc');
    }
}
