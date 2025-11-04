<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('dashboard')->as('dashboard.')->middleware(['auth'])->group(function () {

    Route::get('/', function () {
        return \Inertia\Inertia::render('dashboard/index');
    })->name('index');

    Route::get('/orders' , function(){
        $orders = auth()->user()->orders;
        return Inertia::render('dashboard/orders', [
            'orders' => $orders
        ]);
    })->name('orders');

    Route::get('/transactions' , function(){
        $transactions = auth()->user()->transactions;
        return Inertia::render('dashboard/transactions', [
           'transactions' => $transactions
        ]);
    })->name('transactions');


});
