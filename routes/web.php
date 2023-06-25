<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('carts', [CartController::class, 'index']);
Route::post('invoice', [InvoiceController::class, 'store']);
Route::delete('carts/{cart}', [CartController::class, 'destroy'])->name('cart.delete');
Route::post('carts/add-to-cart/{product:slug}', [CartController::class, 'store'])->name('cart.store');
Route::resource('products', ProductController::class);
Route::get('/dashboard', DashboardController::class)->name('dashboard');
require __DIR__.'/auth.php';
