<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Http\Responses\Auth\LogoutResponse;
use Filament\Http\Responses\Auth\Contracts\LogoutResponse as LogoutResponseContract;
use Livewire\Livewire;
use App\Filament\Pages\Auth\Register;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(LogoutResponseContract::class, LogoutResponse::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Livewire::component('filament.pages.auth.register', Register::class);
    }
}
