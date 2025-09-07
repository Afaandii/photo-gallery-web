<?php

namespace App\Filament\Pages\Auth;

use Filament\Pages\Auth\Login as BaseLogin;
use Filament\Forms\Form;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Placeholder;
use Illuminate\Support\HtmlString;

class Login extends BaseLogin
{
  public function form(Form $form): Form
  {
    return parent::form($form)
      ->schema([
        ...collect(parent::form($form)->getComponents())
          ->reject(fn($component) => $component instanceof Checkbox)
          ->all(),

        Grid::make(2)
          ->schema([
            Checkbox::make('remember')
              ->label('Remember me'),

            Placeholder::make('')
              ->content(new HtmlString(
                '<a href="' . route('filament.auth.register') . '" class="text-primary-600">Register</a>'
              ))
              ->extraAttributes(['class' => 'text-right']),
          ]),
      ]);
  }
}
