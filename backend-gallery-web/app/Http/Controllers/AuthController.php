<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'role_id' => 'integer',
            'name' => 'required|unique:users,name|max:25|min:4',
            'email' => 'required|unique:users,email|max:25|min:8',
            'password' => 'required|min:8|max:12',
        ]);

        $user = User::create([
            'role_id' => 2,
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        $token = $user->createToken('singup-token')->plainTextToken;

        return response()->json([
            'status' => 'Success',
            'message' => 'User Registeres Successfully',
            'token' => $token,
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|max:25|min:8',
            'password' => 'required|max:25|min:8'
        ]);

        $credentials = $request->only(['email', 'password']);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = PersonalAccessToken::where('tokenable_id', $user->id)->first();

            if (!$token) {
                return response()->json([
                    'status' => 'Error',
                    'message' => 'Unauthorized Token!'
                ], 401);
            }

            return response()->json([
                'status' => 'Success',
                'message' => 'You\'re login successfully',
                'token' => $token->token,
            ], 200);
        }

        return response()->json([
            'status' => 'invalid',
            'message' => 'Wrong username and password',
        ], 401);
    }
}