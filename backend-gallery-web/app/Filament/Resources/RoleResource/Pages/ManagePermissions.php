<?php

namespace App\Filament\Resources\RoleResource\Pages;

use App\Filament\Resources\RoleAccessResource;
use Filament\Resources\Pages\Page;

class ManagePermissions extends Page
{
    protected static string $resource = RoleAccessResource::class;

    protected static string $view = 'filament.resources.role-resource.pages.manage-permissions';
}