<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\ImagePosts;
use App\Models\Posts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ImagePostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // remember(name_cache, times(jika habis maka reload), callback(func closure))
        $post = Cache::remember('posts_all', now()->addMinutes(10), function () {
            return ImagePosts::select('id', 'title', 'slug', 'deskripsi', 'image')->get()->toArray();
        });

        if (!$post) {
            return json_encode([
                'status' => 'Fail',
                'message' => "Data post tidak ada",
            ], 503);
        }

        return json_encode([
            'status' => 'Ok',
            'message' => 'Berhasil mengambil semua data post',
            'post' => $post,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $imagePost = ImagePosts::with(['Category:id,name', 'User:id,name'])->where('slug', $slug)->first();

        if (!$imagePost) {
            return json_encode([
                'status' => 'Fail',
                'message' => 'Image post not found!'
            ], 404);
        }

        return json_encode([
            'status' => 'Ok',
            'message' => 'Get data image posts success!',
            'image_post' => $imagePost
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function download($slug)
    {
        $post = ImagePosts::where('slug', $slug)->firstOrFail();
        $filePath = storage_path('app/public/' . $post->image);

        return response()->download($filePath, $post->title . '.' . pathinfo($filePath, PATHINFO_EXTENSION));
    }

    public function byCategory($slug)
    {
        $category = Categories::where('slug', $slug)->firstOrFail();

        $posts = ImagePosts::where('category_id', $category->id)->get();

        return json_encode([
            'status' => 'Ok',
            'category' => $category,
            'image_posts' => $posts
        ]);
    }
}
