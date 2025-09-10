<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogPostsController;
use App\Http\Controllers\ImagePostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([], function () {
    // image posts
    Route::get('/posts', [ImagePostsController::class, 'index']);

    // blog posts
    Route::get('/blogs', [BlogPostsController::class, 'index']);
    Route::get('/blog/{slug}', [BlogPostsController::class, 'show']);
});

//route login register
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
