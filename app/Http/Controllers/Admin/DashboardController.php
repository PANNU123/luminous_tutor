<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Department;
use App\Models\LeaveApplication;
use App\Models\Notice;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function adminDashboard(){
        if(Session::get('adminLogin')){
            $active_users = Admin::where('status',1)->count('id');
            $total_users = Admin::count('id');


            return Inertia::render('Module/Dashboard/Index',
                [
                    'active_users'=> $active_users,
                    'total_users'=> $total_users,
                ]
            );
        }else{
            return to_route('login');
        }
    }

    public function error(){
        return Inertia::render('Error');
    }
}