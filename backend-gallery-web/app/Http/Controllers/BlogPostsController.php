<?php

namespace App\Http\Controllers;

use App\Models\Blogs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class BlogPostsController extends Controller
{
    public function index()
    {
        $blog = Cache::remember('blog_all', now()->addMinutes(10), function () {
            return Blogs::with('Category:id,name')->with('User:id,name')->select('title', 'slug', 'excerpt', 'content', 'image', 'created_at', 'category_id', 'user_id')->get()->toArray();
        });

        if (!$blog) {
            return json_encode([
                'status' => 'Fail',
                'message' => "Data post tidak ada",
            ], 503);
        }

        return json_encode([
            'status' => 'Ok',
            'message' => 'Success get all data blog posts',
            'blog' => $blog
        ]);
    }
}
