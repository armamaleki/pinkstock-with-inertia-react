<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Attribute extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'icon',
        'user_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function values()
    {
        return $this->hasMany(Value::class);
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
        static::addGlobalScope('orderByUpdated', function (Builder $builder) {
            $builder->orderBy('updated_at', 'desc');
        });
    }

    public function scopeLatestUpdated($query)
    {
        return $query->orderBy('updated_at', 'desc');
    }
}
