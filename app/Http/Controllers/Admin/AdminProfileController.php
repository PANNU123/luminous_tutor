<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PasswordChangeRequest;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminProfileController extends Controller
{
    public function userProfile(){
        $user = Admin::where('id',Auth::id())->first();
        return Inertia::render('Module/Profile/Index',[
            'user'=>$user,
        ]);
    }
    public function userProfileUpdate(Request $request){
        $user = Admin::where('id',Auth::id())->first();

        if(!empty($request->image)){
            $avatar =  fileUpload($request->image , "profile");
        }else{
            $avatar = $user->avatar;
        }
        try {
            User::where('id',Auth::id())->update([
                'first_name'    => $request->first_name,
                'last_name' => $request->last_name,
                'mobile'    => $request->mobile,
                'email' => $request->email,
                'gender'    => $request->gender,
                'avatar' => $avatar
            ]);
            return back()->with('success','profile updated');

        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }

    }

    public function userProfileChangePassword(PasswordChangeRequest $request){
        $user = Admin::whereId(Auth::id())->first();

        if(!empty($user)) {
            if(Hash::check($request->old_password, $user->password)) {
                if($request->new_password == $request->confirm_password) {
                    $new_password = Hash::make($request->new_password);
                    $update = $user->update([
                        'password' => $new_password,
                    ]);
                    if(!empty($update)) {
                        return back()->with('success','Password successfully updated');
                    }
                    return back()->with('error','Something went wrong!');
                }
                return back()->with('error','Confirm password not matched!');
            }
            return back()->with('error','Current password invalid!');
        }
        return back()->with('error','User not found!');
    }
}

