<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ImagePostsResource\Pages;
use App\Filament\Resources\ImagePostsResource\RelationManagers;
use App\Models\Categories;
use App\Models\ImagePosts;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ImagePostsResource extends Resource
{
    protected static ?string $model = ImagePosts::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Title')
                    ->required()
                    ->string()
                    ->columnSpanFull()
                    ->live(onBlur: true)
                    ->afterStateUpdated(function (string $state, callable $set) {
                        $set('slug', Str::slug($state));
                    }),
                TextInput::make('slug')
                    ->label('Slug')
                    ->string()
                    ->required()
                    ->readOnly()
                    ->columnSpanFull(),
                Select::make('category_id')
                    ->label('Category')
                    ->options(Categories::query()->pluck('name', 'id'))
                    ->preload()
                    ->searchable()
                    ->columnSpanFull(),
                RichEditor::make('deskripsi')
                    ->label('Deskripsi')
                    ->string()
                    ->columnSpanFull(),
                FileUpload::make('image')
                    ->label('Image')
                    ->disk('public')
                    ->directory('image'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title'),
                TextColumn::make('slug'),
                TextColumn::make('deskripsi')->wrap(),
                ImageColumn::make('image')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListImagePosts::route('/'),
            'create' => Pages\CreateImagePosts::route('/create'),
            'edit' => Pages\EditImagePosts::route('/{record}/edit'),
        ];
    }

    // user access permission dashboard
    public static function canViewAny(): bool
    {
        /** @var \App\Models\User $user */
        $user = auth()->user();

        return $user->hasPermission('show-app');
    }

    public static function canCreate(): bool
    {
        /** @var \App\Models\User $user */
        $user = auth()->user();

        return $user->hasPermission('create-app');
    }
    public static function canEdit(Model $record): bool
    {
        /** @var \App\Models\User $user */
        $user = auth()->user();

        return $user->hasPermission('edit-app');
    }
    public static function canDeleteAny(): bool
    {
        /** @var \App\Models\User $user */
        $user = auth()->user();

        return $user->hasPermission('delete-app');
    }
}
