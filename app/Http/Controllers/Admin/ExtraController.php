<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Inertia\Inertia;

class ExtraController extends Controller
{
    public function customCss(){
        $file_content = file_get_contents(base_path('resources/css/custom.css'));
        return Inertia::render('Module/Extra/Css',
            [
                'file_content'=> $file_content,
            ]
        );
    }
    public function customCssSave(Request $request){
        $file_content = resource_path('css/custom.css');
        $envContent = $request->input('file_content');

        file_put_contents($file_content, $envContent);
        return back()->with('success', 'CSS saved successfully');
    }

    public function backup(){

        $disk = Storage::disk('local');
        $files = $disk->files(config('backup.backup.name'));
        $backups = [];
        foreach ($files as $k => $f) {
            if (substr($f, -4) == '.zip' && $disk->exists($f)) {
                $backups[] = [
                    'file_path' => $f,
                    'file_name' => str_replace(config('backup.backup.name').'/', '', $f),
                    'file_size_byte' => $disk->size($f),
                    'file_size' => humanFilesize($disk->size($f)),
                    'last_modified_timestamp' => $disk->lastModified($f),
                    'date_created' => Carbon::createFromTimestamp($disk->lastModified($f))->isoFormat('llll'),
                    'date_ago' => Carbon::createFromTimestamp($disk->lastModified($f))->diffForHumans(Carbon::now()),
                ];
            }
        }
        $backups = array_reverse($backups);
            return Inertia::render('Module/Backup/Index',[
                'backups'=>$backups
            ]);
    }
    public function backupSave(){
        Artisan::call('backup:run');
        return to_route('admin.backup')->with('success', 'Backup saved successfully');
    }
    public function backupDelete($file){
        $disk = Storage::disk('local');
        $file = config('backup.backup.name').'/'.$file;

        if ($disk->exists($file)) {
            $disk->delete($file);
            return back()->with('success','File Delete Successfully');
        } else {
            return back()->with('error','Something is Wrong!');
        }
    }
    public function backupDownload($file){

        $file = Storage::disk('local')->path(config('backup.backup.name').'/'.$file);
        return response()->download($file);
        
    }
}
