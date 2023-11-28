<?php


use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\BangladeshController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ExtraController;
use App\Http\Controllers\Admin\ModuleController;
use App\Http\Controllers\Admin\PermissionsController;
use App\Http\Controllers\Admin\QualificationController;
use App\Http\Controllers\Admin\RolesController;
use App\Http\Controllers\Admin\AdminProfileController;
use App\Http\Controllers\Admin\SpecializationController;
use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/sajjad', function () {
    return 'Sajjad';
});

Route::get('/login',[AuthController::class,'login'])->name('login');
Route::post('/login',[AuthController::class,'loginPost'])->name('login.post');

Route::group(['middleware' => ['auth:admin'],'as' =>'admin.'],function() {

    Route::get('/error',[DashboardController::class,'error'])->name('error');
    Route::get('dashboard', [DashboardController::class, 'adminDashboard'])->name('dashboard');
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');


    Route::group(['prefix' => 'user' ],function (){
        Route::get('/profile', [AdminProfileController::class, 'userProfile'])->name('user.profile');
        Route::post('/profile/update', [AdminProfileController::class, 'userProfileUpdate'])->name('user.profile.update');
        Route::post('/profile/change-password', [AdminProfileController::class, 'userProfileChangePassword'])->name('user.profile.update');

    });

    // Users
    Route::group(['prefix' => 'users' ],function (){
        Route::get('/', [UsersController::class, 'index'])->name('users.index');
        Route::get('/create', [UsersController::class, 'create'])->name('users.create');
        Route::post('/store', [UsersController::class, 'store'])->name('users.store');
        Route::get('/{userid}/edit', [UsersController::class, 'edit'])->name('users.edit');
        Route::post('/update', [UsersController::class, 'update'])->name('users.update');
        Route::get('/{userid}/delete', [UsersController::class, 'delete'])->name('users.delete');
    });
    // Roles
    // admin/roles/store
    Route::group(['prefix' => 'roles' ],function (){
        Route::get('/', [RolesController::class, 'index'])->name('roles.index');
        Route::get('/create', [RolesController::class, 'create'])->name('roles.create');
        Route::post('/store', [RolesController::class, 'store'])->name('roles.store');
        Route::get('/{userid}/edit', [RolesController::class, 'edit'])->name('roles.edit');
        Route::post('/update', [RolesController::class, 'update'])->name('roles.update');
        Route::get('/{id}/delete', [RolesController::class, 'delete'])->name('users.delete');
    });
    // Permission
    Route::group(['prefix' => 'permissions' ],function (){
        Route::get('/', [PermissionsController::class, 'index'])->name('permissions.index');
        Route::get('/create', [PermissionsController::class, 'create'])->name('permissions.create');
        Route::post('/store', [PermissionsController::class, 'store'])->name('permissions.store');
        Route::get('/{id}/edit', [PermissionsController::class, 'edit'])->name('permissions.edit');
        Route::post('/update', [PermissionsController::class, 'update'])->name('permissions.update');
        Route::get('/{id}/delete', [PermissionsController::class, 'delete'])->name('permissions.delete');
    });

    Route::group(['prefix' => 'modules' ],function (){
        Route::get('', [ModuleController::class, 'index'])->name('modules');
        Route::get('/create', [ModuleController::class, 'create'])->name('modules.create');
        Route::post('/store', [ModuleController::class, 'store'])->name('modules.store');
        Route::get('/edit/{id}', [ModuleController::class, 'edit'])->name('modules.edit');
        Route::post('/update', [ModuleController::class, 'update'])->name('modules.update');
        Route::get('/delete/{id}', [ModuleController::class, 'delete'])->name('modules.delete');
        Route::get('/status/{id}', [ModuleController::class, 'status'])->name('modules.status');
    });


    Route::group(['prefix' => 'category' ],function (){
        Route::get('', [CategoryController::class, 'index'])->name('category');
        Route::get('data', [CategoryController::class, 'data'])->name('category.data');
        Route::get('/create', [CategoryController::class, 'create'])->name('category.create');
        Route::post('/store', [CategoryController::class, 'store'])->name('category.store');
        Route::get('/edit/{id}', [CategoryController::class, 'edit'])->name('category.edit');
        Route::post('/update', [CategoryController::class, 'update'])->name('category.update');
        Route::get('/delete/{id}', [CategoryController::class, 'delete'])->name('category.delete');
        Route::get('/status/{id}', [CategoryController::class, 'status'])->name('category.status');
    });

    Route::group(['prefix' => 'qualification' ],function (){
        Route::get('', [QualificationController::class, 'index'])->name('qualification');
        Route::get('data', [QualificationController::class, 'data'])->name('qualification.data');
        Route::get('/create', [QualificationController::class, 'create'])->name('qualification.create');
        Route::post('/store', [QualificationController::class, 'store'])->name('qualification.store');
        Route::get('/edit/{id}', [QualificationController::class, 'edit'])->name('qualification.edit');
        Route::post('/update', [QualificationController::class, 'update'])->name('qualification.update');
        Route::get('/delete/{id}', [QualificationController::class, 'delete'])->name('qualification.delete');
        Route::get('/status/{id}', [QualificationController::class, 'status'])->name('qualification.status');
    });
    Route::group(['prefix' => 'specialization' ],function (){
        Route::get('', [SpecializationController::class, 'index'])->name('specialization');
        Route::get('data', [SpecializationController::class, 'data'])->name('specialization.data');
        Route::get('/create', [SpecializationController::class, 'create'])->name('specialization.create');
        Route::post('/store', [SpecializationController::class, 'store'])->name('specialization.store');
        Route::get('/edit/{id}', [SpecializationController::class, 'edit'])->name('specialization.edit');
        Route::post('/update', [SpecializationController::class, 'update'])->name('specialization.update');
        Route::get('/delete/{id}', [SpecializationController::class, 'delete'])->name('specialization.delete');
        Route::get('/status/{id}', [SpecializationController::class, 'status'])->name('specialization.status');
    });



    Route::get('custom-css', [ExtraController::class, 'customCss'])->name('custom.css');
    Route::post('custom-css/save', [ExtraController::class, 'customCssSave'])->name('custom.css.save');

    Route::group(['prefix' => 'backup' ],function (){
        Route::get('', [ExtraController::class, 'backup'])->name('backup');
        Route::get('save', [ExtraController::class, 'backupSave'])->name('backup.save');
        Route::get('delete/{file}', [ExtraController::class, 'backupDelete'])->name('backup.delete');
        Route::get('download/{file}', [ExtraController::class, 'backupDownload'])->name('backup.download');

    });

});