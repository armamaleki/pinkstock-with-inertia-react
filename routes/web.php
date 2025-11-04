<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[\App\Http\Controllers\Client\PagesController::class , 'home'])->name('home');

Route::get('/repairs', function () {
    return Inertia::render('repairs');
})->name('repairs');

Route::prefix('article')->as('article.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Client\ArticleController::class , 'index'])->name('index');
    Route::get('/{article}', [\App\Http\Controllers\Client\ArticleController::class , 'show'])->name('show');
});

Route::prefix('product-categories')->as('product-category.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Client\ProductCategoryController::class , 'index'])->name('index');
    Route::get('/{productCategory}', [\App\Http\Controllers\Client\ProductCategoryController::class , 'show'])->name('show');
});


Route::prefix('store')->as('store.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Client\StoreController::class , 'index'])->name('index');
    Route::get('/{product}', [\App\Http\Controllers\Client\StoreController::class , 'show'])->name('show');
});

Route::prefix('training')->name('training.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Client\TrainingVideoController::class, 'index'])->name('index');
    Route::get('/{training}', [\App\Http\Controllers\Client\TrainingVideoController::class, 'show'])->name('show');
});


Route::get('/laptop-price-estimate', function () {
    return Inertia::render('laptop-price-estimate');
})->name('laptop-price-estimate');

Route::get('contact-us', function () {
   return Inertia::render('client/contact-us');
})->name('contact-us');

Route::get('about-us', function () {
   return Inertia::render('client/about-us');
})->name('about-us');

Route::get('faq', function () {
   return Inertia::render('client/faq');
})->name('faq');

Route::get('privacy-policy', function () {
   return Inertia::render('client/privacy');
})->name('privacy-policy');


require __DIR__.'/auth.php';
require __DIR__.'/dashboard.php';
require __DIR__.'/settings.php';

require __DIR__.'/manager.php';
Route::get('sitemap.xml', function () {

    $articles = \App\Models\Article::where('status', 'active')->latest()->get();
    $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><urlset/>');
    $xml->addAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    foreach ($articles as $article) {
        $url = $xml->addChild('url');
        $url->addChild('loc', url('/article/' . $article->slug));
        $url->addChild('lastmod', \Carbon\Carbon::make($article->updated_at)->format('Y-m-d'));
        $url->addChild('changefreq', 'weekly');
        $url->addChild('priority', '0.9');

    }
    return response()->make($xml->asXML(), 200)->header('Content-Type', 'application/xml');

})->name('sitemap');

Route::get('product-sitemap.xml', function () {

    $products = \App\Models\Product::where('status', 'active')->latest()->get();
    $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><urlset/>');
    $xml->addAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    foreach ($products as $product) {
        $url = $xml->addChild('url');
        $url->addChild('loc', url('/store/' . $product->slug));
        $url->addChild('lastmod', \Carbon\Carbon::make($product->updated_at)->format('Y-m-d'));
        $url->addChild('changefreq', 'monthly');
        $url->addChild('priority', '0.9');
    }
    return response()->make($xml->asXML(), 200)->header('Content-Type', 'application/xml');

})->name('product.sitemap');


