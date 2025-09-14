<?php

namespace App\Filament\Pages\Auth;

use Filament\Pages\Auth\Register as BaseRegister;
use Filament\Forms\Form;
use Filament\Forms\Components\TextInput;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class Register extends BaseRegister
{
  public function form(Form $form): Form
  {
    return $form
      ->schema([
        TextInput::make('name')
          ->required()
          ->label('Name'),

        TextInput::make('email')
          ->email()
          ->required()
          ->label('Email'),

        TextInput::make('password')
          ->password()
          ->required()
          ->label('Password'),

        TextInput::make('password_confirmation')
          ->password()
          ->same('password')
          ->label('Confirm Password'),
      ]);
  }

  public function handleRegistration(array $data): User
  {
    return User::create([
      'role_id' => 2,
      'name'     => $data['name'],
      'email'    => $data['email'],
      'password' => Hash::make($data['password']),
    ]);
  }
}
