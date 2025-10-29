<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Product extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, InteractsWithMedia;

    public function registerMediaConversions(?Media $media = null): void
    {
        $this
            ->addMediaConversion('thumb')
            ->fit(Fit::Contain, 150, 150)
            ->nonQueued();
        $this->addMediaConversion('watermark')
            ->watermark(public_path('assets/images/logo.png'))
            ->nonQueued();
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($product) {
            $lastProduct = DB::table('products')->latest()->first();
            if ($lastProduct && $lastProduct->sku !== null) {
                $product->sku = $lastProduct->sku + 1;
            } else {
                $product->sku = 1546;
            }
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

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected $fillable = [
        'name',
        'status',
        'slug',
        'sku',
        'meta_title',
        'meta_description',
        'description',
        'short_description',
        'price',
        'product_category_id',
        'user_id',
        'quantity',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function categories()
    {
        return $this->belongsToMany(ProductCategory::class, 'product_category', 'product_id', 'product_category_id');
    }

    public function attributes()
    {
        return $this->belongsToMany(Attribute::class)->withPivot(['value_id']);
    }

    public function gifts()
    {
        return $this->belongsToMany(Product::class, 'gift_product', 'product_id', 'gift_id');
    }

    public function scopeLatestUpdated($query)
    {
        return $query->orderBy('updated_at', 'desc');
    }
}
