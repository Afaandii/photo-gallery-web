<x-filament::page>
    <div class="space-y-6 max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-6">Manage Role Permission</h1>

        <div class="bg-gray-800 text-white p-6 rounded-lg">
            <h3 class="text-2xl font-semibold mb-4">Role : {{ $record->role_name }}</h3>

            <h4 class="text-lg font-medium mb-3">User Permission</h4>

            <div class="grid grid-cols-2 gap-4">
                @foreach (\App\Models\Permissions::all() as $permission)
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" value="{{ $permission->id }}"
                            wire:click="togglePermission({{ $permission->id }})" @checked(in_array($permission->id, $permissions))
                            class="rounded border-gray-300 text-indigo-600 shadow-sm" />
                        <span class="ml-2">{{ $permission->name }}</span>
                    </label>
                @endforeach
            </div>

            <div class="mt-6">
                <x-filament::button tag="a" href="{{ url('/admin/role-accesses') }}" color="secondary">
                    Kembali
                </x-filament::button>
            </div>
        </div>
    </div>
</x-filament::page>
