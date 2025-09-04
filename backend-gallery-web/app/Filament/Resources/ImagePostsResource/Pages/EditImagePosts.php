<?php

namespace App\Filament\Resources\ImagePostsResource\Pages;

use App\Filament\Resources\ImagePostsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditImagePosts extends EditRecord
{
    protected static string $resource = ImagePostsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): ?string
    {
        return $this->getResource()::getUrl('index');
    }
}