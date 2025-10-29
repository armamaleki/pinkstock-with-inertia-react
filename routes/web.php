<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[\App\Http\Controllers\Client\PagesController::class , 'home'])->name('home');

Route::get('/repairs', function () {
    return Inertia::render('repairs');
})->name('repairs');

Route::prefix('articles')->as('article.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Client\ArticleController::class , 'index'])->name('index');
    Route::get('/{article}', [\App\Http\Controllers\Client\ArticleController::class , 'show'])->name('show');
});

Route::prefix('product-categories')->as('product-category.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Client\ProductCategoryController::class , 'index'])->name('index');
    Route::get('/{productCategory}', [\App\Http\Controllers\Client\ProductCategoryController::class , 'show'])->name('show');
});


Route::prefix('store')->as('store.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Client\StoreController::class , 'index'])->name('index');
    Route::get('/{store}', [\App\Http\Controllers\Client\StoreController::class , 'show'])->name('show');
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





Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/manager.php';
