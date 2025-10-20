<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ProductCategory extends Model implements HasMedia
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
        'parent_id',
        'meta_title',
        'meta_description',
        'description',
        'short_description',
        'user_id',
        'menu',
    ];

    protected static function booted()
    {
        static::addGlobalScope('latest', function ($query) {
            $query->orderBy('created_at', 'desc');
        });

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


    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_category', 'product_category_id', 'product_id');
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
