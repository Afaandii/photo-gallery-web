<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use App\Models\ImagePosts;
use Illuminate\Support\Facades\Cache;

class PostsApi extends Page
{
  protected static string $view = 'filament.pages.posts-api';

  public function getResponse()
  {
    $post = Cache::remember('posts_all', now()->addMinutes(10), function () {
      return ImagePosts::select('id', 'title', 'image')->get()->toArray();
    });

    if (!$post) {
      return response()->json([
        'status' => 'Fail',
        'message' => 'Data post tidak ada',
      ], 503);
    }

    return response()->json([
      'status' => 'Ok',
      'message' => 'Berhasil mengambil semua data post',
      'post' => $post,
    ], 200);
  }
}
