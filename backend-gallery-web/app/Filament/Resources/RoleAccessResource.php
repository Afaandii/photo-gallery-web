<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RoleAccessResource\Pages;
use App\Models\Roles;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class RoleAccessResource extends Resource
{
    protected static ?string $model = Roles::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-circle';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('role_name')
                    ->label('Role Name')
                    ->string()
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('handle_access')
                    ->label('Handle Access')
                    ->string()
                    ->required()
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('role_name'),
                TextColumn::make('handle_access'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\Action::make('permissions')
                    ->icon('heroicon-o-key')
                    ->label('Permission')
                    ->color('warning')
                    ->url(fn($record) => url('/admin/role-accesses/' . $record->id . '/permissions')),
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
            'index' => Pages\ListRoleAccesses::route('/'),
            'create' => Pages\CreateRoleAccess::route('/create'),
            'edit' => Pages\EditRoleAccess::route('/{record}/edit'),
            'permissions' => Pages\ManageRoleAccess::route('/{record}/permissions'),
        ];
    }

    public static function getModelLabel(): string
    {
        return 'Role & Akses';
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->where('id', '!=', 1);
    }
}
