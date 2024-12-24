<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SearchController;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/products/{category}/{id}', [ProductController::class, 'show'])
    ->where(['category' => '[a-z-]+', 'id' => '[0-9]+']);

Route::get('/search/{term?}', [SearchController::class, 'index'])
    ->where('term', '.*');
