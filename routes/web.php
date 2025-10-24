<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/laptop-price-estimate', function () {
    return Inertia::render('laptop-price-estimate');
})->name('laptop-price-estimate');

Route::get('/repairs', function () {
    return Inertia::render('repairs');
})->name('repairs');

Route::prefix('articles')->as('article.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Client\ArticleController::class , 'index'])->name('index');
    Route::get('/{article}', [\App\Http\Controllers\Client\ArticleController::class , 'show'])->name('show');
});

Route::prefix('product-category')->as('product-category.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Client\ProductCategoryController::class , 'index'])->name('index');
    Route::get('/{productCategory}', [\App\Http\Controllers\Client\ProductCategoryController::class , 'show'])->name('show');
});




Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/manager.php';
