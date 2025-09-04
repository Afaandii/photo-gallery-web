<?php

namespace App\Filament\Resources\ImagePostsResource\Pages;

use App\Filament\Resources\ImagePostsResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListImagePosts extends ListRecords
{
    protected static string $resource = ImagePostsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
