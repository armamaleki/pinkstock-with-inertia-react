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




Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
