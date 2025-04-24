<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'deskripsi',
        'image',
        'created_at',
        'updated_at',
    ];
}
