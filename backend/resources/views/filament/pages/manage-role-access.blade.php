<x-filament::page>
    <div class="space-y-6 max-w-3xl">
        <div class="bg-gray-800 text-white rounded-lg">
            <h3 class="text-2xl font-semibold mb-4">Role : {{ $record->role_name }}</h3>

            <div class="mb-5">
                <h4 class="text-lg font-medium">Permission Access :</h4>
            </div>

            <div class="flex justify-start gap-4">
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
                <x-filament::button tag="a" href="{{ url('/admin/role-accesses') }}" color="primary">
                    Kembali
                </x-filament::button>
            </div>
        </div>
    </div>
</x-filament::page>
