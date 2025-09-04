<?php

namespace App\Filament\Resources\ImagePostsResource\Pages;

use App\Filament\Resources\ImagePostsResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;

class CreateImagePosts extends CreateRecord
{
    protected static string $resource = ImagePostsResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = Auth::id();
        return $data;
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}