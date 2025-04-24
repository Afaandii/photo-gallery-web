<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUserPanel
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->check()  || auth()->user()->email != 'admin@gmail.com') {
            abort(403, "Dashboard hanya bisa diakses oleh admin");
            // return redirect()->away("http://localhost:5173/");
        }
        return $next($request);
    }
}
