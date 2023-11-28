<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LoginRequest;
use App\Repositories\Admin\AuthRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AuthController extends Controller
{
    protected $authRepository;

    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    public function login(){
        if(Session::get('adminLogin')){
            return to_route('admin.dashboard');
        }

        return Inertia::render('Module/Auth/Login');
    }
    public function loginPost(LoginRequest $request){
//        dd('ok');
        $result = $this->authRepository->login($request);
        if($result['status']== true){
            Session::put('adminLogin', 'admin_log_in');
            return to_route('admin.dashboard')->with('success', $result['message']);
        }else{
            if($result['status']== false) {
                return to_route('login')->with('error', $result['message']);
            }
        }
    }
    public function logout(){
        if (Auth::check()) {
            Session::forget('adminLogin');
            Auth::logout();
            return to_route('login')->with('success', 'Logout Successfully');
        }
    }
}