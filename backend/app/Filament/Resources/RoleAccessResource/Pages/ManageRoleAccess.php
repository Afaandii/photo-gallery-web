<?php

namespace App\Filament\Resources\RoleAccessResource\Pages;

use App\Filament\Resources\RoleAccessResource;
use App\Models\Permissions;
use App\Models\Roles;
use Filament\Forms\Components\CheckboxList;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\Page;
use Illuminate\Contracts\Support\Htmlable;

class ManageRoleAccess extends Page
{
    protected static string $resource = RoleAccessResource::class;
    protected static string $view = 'filament.pages.manage-role-access';

    public Roles $record;
    public array $permissions = [];

    // Filament Resource Page otomatis inject model instance
    public function mount(Roles $record): void
    {
        $this->record = $record;
        $this->permissions = $record->permissions()->pluck('permissions.id')->toArray();
    }

    // real-time toggle (dipanggil oleh wire:click di view)
    public function togglePermission(int $permissionId): void
    {
        $permission = Permissions::find($permissionId);

        if (! $permission) {
            Notification::make()
                ->title("Permission dengan ID {$permissionId} tidak ditemukan")
                ->danger()
                ->send();
            return;
        }

        if (in_array($permissionId, $this->permissions)) {
            $this->record->permissions()->detach($permissionId);
            $this->permissions = array_values(array_diff($this->permissions, [$permissionId]));

            Notification::make()
                ->title("Permission '{$permission->name}' dihapus")
                ->danger()
                ->send();
        } else {
            $this->record->permissions()->attach($permissionId);
            $this->permissions[] = $permissionId;

            Notification::make()
                ->title("Permission '{$permission->name}' ditambahkan")
                ->success()
                ->send();
        }

        $this->redirect(request()->header('Referer'), navigate: true);
    }

    public function getTitle(): string|Htmlable
    {
        return 'Manage Role Permission';
    }
}
