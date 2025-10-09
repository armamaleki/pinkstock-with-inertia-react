<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class TrainingVideo extends Model
{
    use HasFactory, SoftDeletes, InteractsWithMedia;

    public function registerMediaConversions(?Media $media = null): void
    {
        $this
            ->addMediaConversion('thumb')
            ->fit(Fit::Contain, 150, 150)
            ->nonQueued();
    }
    public function getRouteKeyName()
    {
        return 'slug';
    }


    protected $fillable = [
        'name',
        'slug',
        'status',
        'meta_title',
        'meta_description',
        'description',
        'short_description',
        'user_id',
    ];

    protected static function booted()
    {
        static::creating(function ($productCategory) {
            if (auth()->check()) {
                $productCategory->user_id = auth()->id();
            }
            if (!empty($productCategory->slug)) {
                $productCategory->slug = Str::slug($productCategory->slug, '-', '');
            }
        });
        static::updating(function ($productCategory) {
            if (auth()->check()) {
                $productCategory->user_id = auth()->id();
            }
            if (!empty($productCategory->slug)) {
                $productCategory->slug = Str::slug($productCategory->slug, '-', '');
            }

        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function scopeLatestUpdated($query)
    {
        return $query->orderBy('updated_at', 'desc');
    }

}
