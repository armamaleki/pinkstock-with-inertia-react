<?php

use Illuminate\Support\Facades\Route;


Route::prefix('manager')->as('manager.')->middleware(['auth', 'permission:show-admin-panel'])->group(function () {
    Route::get('/', [\App\Http\Controllers\Manager\IndexController::class, 'index'])->name('index');

    Route::prefix('user')->as('user.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\UserController::class, 'index'])->name('index');
    });

    Route::prefix('role')->as('role.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\RoleController::class, 'index'])->name('index');
    });

    Route::prefix('article')->as('article.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\ArticleController::class, 'index'])->name('index');
    });
    Route::prefix('comment')->as('comment.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\CommentController::class, 'index'])->name('index');
    });
    Route::prefix('attribute')->as('attribute.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\AttributeController::class, 'index'])->name('index');
    });
    Route::prefix('product')->as('product.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\ProductController::class, 'index'])->name('index');
    });
    Route::prefix('order')->as('order.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\OrderController::class, 'index'])->name('index');
    });

    Route::prefix('product-category')->as('product-category.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\ProductCategoryController::class, 'index'])->name('index');
    });

    Route::prefix('pink-academy')->as('pink-academy.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\TrainingVideoController::class, 'index'])->name('index');
    });

});
