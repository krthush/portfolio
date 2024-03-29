<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::get('/linkedin', function () {
    return redirect()->away('https://www.linkedin.com/in/thushaan-rajaratnam-98452414b/');
});

Route::get('/download/{file_name}', 'PortfolioController@download')->name('download');
