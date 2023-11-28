<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;;
use Illuminate\Support\Facades\Hash;


class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Admin::create([
            'username'=>'sajjad294',
            'first_name'=>'Sajjad',
            'last_name'=>'Hossain',
            'email'=>'admin@gmail.com',
            'password'=>Hash::make('12345678'),
            'status'=>1,
        ]);
    }
}