<?php

use Illuminate\Support\Facades\Route;


Route::prefix('manager')->as('manager.')->middleware(['auth', 'permission:show-admin-panel'])->group(function () {
    Route::get('/', [\App\Http\Controllers\Manager\IndexController::class, 'index'])->name('index');

    Route::prefix('user')->as('user.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\UserController::class, 'index'])->name('index');
        Route::get('/create', [\App\Http\Controllers\Manager\UserController::class, 'create'])->name('create');
        Route::post('/store', [\App\Http\Controllers\Manager\UserController::class, 'store'])->name('store');
        Route::get('/{user}/show', [\App\Http\Controllers\Manager\UserController::class, 'show'])->name('show');
        Route::get('/{user}/edit', [\App\Http\Controllers\Manager\UserController::class, 'edit'])->name('edit');
        Route::patch('/{user}/update', [\App\Http\Controllers\Manager\UserController::class, 'update'])->name('update');
//        Route::delete('/{user}/destroy', [\App\Http\Controllers\Manager\UserController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('role')->as('role.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\RoleController::class, 'index'])->name('index');
        Route::get('/create', [\App\Http\Controllers\Manager\RoleController::class, 'create'])->name('create');
        Route::post('/store', [\App\Http\Controllers\Manager\RoleController::class, 'store'])->name('store');
        Route::get('/{role}/show', [\App\Http\Controllers\Manager\RoleController::class, 'show'])->name('show');
        Route::get('/{role}/edit', [\App\Http\Controllers\Manager\RoleController::class, 'edit'])->name('edit');
        Route::patch('/{role}/update', [\App\Http\Controllers\Manager\RoleController::class, 'update'])->name('update');
    });

    Route::prefix('article')->as('article.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\ArticleController::class, 'index'])->name('index');
        Route::get('/create', [\App\Http\Controllers\Manager\ArticleController::class, 'create'])->name('create');
        Route::post('/store', [\App\Http\Controllers\Manager\ArticleController::class, 'store'])->name('store');
        Route::get('/{article}/show', [\App\Http\Controllers\Manager\ArticleController::class, 'show'])->name('show');
        Route::get('/{article}/edit', [\App\Http\Controllers\Manager\ArticleController::class, 'edit'])->name('edit');
        Route::patch('/{article}/update', [\App\Http\Controllers\Manager\ArticleController::class, 'update'])->name('update');
        Route::patch('/{article}/status' , [\App\Http\Controllers\Manager\ArticleController::class, 'status'])->name('status');
        Route::post('/{article}/avatar', [\App\Http\Controllers\Manager\ArticleController::class, 'avatar'])->name('avatar');
    });

    Route::prefix('comment')->as('comment.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\CommentController::class, 'index'])->name('index');
        Route::get('/show/{comment}', [\App\Http\Controllers\Manager\CommentController::class, 'show'])->name('show');
    });
    Route::prefix('attribute')->as('attribute.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\AttributeController::class, 'index'])->name('index');
        Route::get('/create', [\App\Http\Controllers\Manager\AttributeController::class, 'create'])->name('create');
        Route::post('/store', [\App\Http\Controllers\Manager\AttributeController::class, 'store'])->name('store');
        Route::get('/{attribute}/show', [\App\Http\Controllers\Manager\AttributeController::class, 'show'])->name('show');
        Route::get('/{attribute}/edit', [\App\Http\Controllers\Manager\AttributeController::class, 'edit'])->name('edit');
        Route::patch('/{attribute}/update', [\App\Http\Controllers\Manager\AttributeController::class, 'update'])->name('update');
    });

    Route::prefix('value')->as('value.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\ValueController::class, 'index'])->name('index');
        Route::get('/create', [\App\Http\Controllers\Manager\ValueController::class, 'create'])->name('create');
        Route::post('/store', [\App\Http\Controllers\Manager\ValueController::class, 'store'])->name('store');
        Route::get('/{value}/show', [\App\Http\Controllers\Manager\ValueController::class, 'show'])->name('show');
        Route::get('/{value}/edit', [\App\Http\Controllers\Manager\ValueController::class, 'edit'])->name('edit');
        Route::patch('/{value}/update', [\App\Http\Controllers\Manager\ValueController::class, 'update'])->name('update');
    });

    Route::prefix('product')->as('product.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\ProductController::class, 'index'])->name('index');
    });
    Route::prefix('order')->as('order.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\OrderController::class, 'index'])->name('index');
    });

    Route::prefix('product-category')->as('product-category.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\ProductCategoryController::class, 'index'])->name('index');
        Route::get('/create', [\App\Http\Controllers\Manager\ProductCategoryController::class, 'create'])->name('create');
        Route::post('/store', [\App\Http\Controllers\Manager\ProductCategoryController::class, 'store'])->name('store');
        Route::get('/{productCategory}/show', [\App\Http\Controllers\Manager\ProductCategoryController::class, 'show'])->name('show');
        Route::get('/{productCategory}/edit', [\App\Http\Controllers\Manager\ProductCategoryController::class, 'edit'])->name('edit');
        Route::patch('/{productCategory}/update', [\App\Http\Controllers\Manager\ProductCategoryController::class, 'update'])->name('update');
    });

    Route::prefix('pink-academy')->as('pink-academy.')->group(function () {
        Route::get('/', [\App\Http\Controllers\Manager\TrainingVideoController::class, 'index'])->name('index');
    });

});
