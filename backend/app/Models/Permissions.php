<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Permissions extends Model
{
    use HasFactory;

    protected $table = 'permissions';

    protected $fillable = [
        'name',
        'deskripsi',
        'created_at',
        'updated_at',
    ];

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(
            Roles::class,
            'role_permission',
            'permission_id',
            'role_id'
        )->withTimestamps();
    }
}
