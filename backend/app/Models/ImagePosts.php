<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagePosts extends Model
{
    use HasFactory;

    protected $table = 'image_posts';

    protected $fillable = [
        'title',
        'slug',
        'user_id',
        'category_id',
        'deskripsi',
        'image',
    ];

    public function Category()
    {
        return $this->belongsTo(Categories::class, 'category_id');
    }

    public function User()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
