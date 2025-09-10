<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blogs extends Model
{
    use HasFactory;

    protected $table = 'blogs';

    protected $fillable = [
        'title',
        'slug',
        'user_id',
        'category_id',
        'excerpt',
        'content',
        'image',
    ];

    public function Category()
    {
        return $this->belongsTo(Categories::class, 'category_id');
    }
}
