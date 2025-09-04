<?php

namespace App\Http\Controllers;

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
            return ImagePosts::select('id', 'title', 'image')->get()->toArray();
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
    public function show(string $id)
    {
        //
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
}