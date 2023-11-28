<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Category;
use App\Models\Admin\Qualification;
use App\Models\Admin\Specialization;
use App\Repositories\Admin\QualificationRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QualificationController extends Controller
{
    protected $qualification;
    public function __construct(QualificationRepository $qualification)
    {
        $this->qualification = $qualification;
    }


    public function index(){
        return Inertia::render('Module/Qualification/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Qualification::query();
        if (!empty($filters)) {
            foreach ($filters as $filter) {
                $field = $filter['id']; // Change 'field' to 'id'
                $value = $filter['value'];
                $query->whereRaw('LOWER('.$field.') LIKE ?', ['%' . strtolower($value) . '%']);
            }
        }
        if (!empty($globalFilter)) {
            $query->where(function ($q) use ($globalFilter) {
                $q->where('name', 'LIKE', '%' . $globalFilter . '%');
            });
        }
        if (!empty($sorting)) {
            foreach ($sorting as $sort) {
                $id = $sort['id'];
                $direction = $sort['desc'] ? 'desc' : 'asc';
                $query->orderBy($id, $direction);
            }
        }
        $totalRowCount = $query->count();
        $data = $query
            ->skip($start)
            ->take($size)
            ->get();
        return response()->json([
            'data' => $data,
            'meta' => [
                'totalRowCount' => $totalRowCount,
            ],
        ]);


    }
    public function create(){
        return Inertia::render('Module/Qualification/Add');
    }
    public function store(Request $request){

        $result = $this->qualification->store($request);
        if($result['status']== true){
            return to_route('admin.qualification')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $result = $this->qualification->edit($id);
        return Inertia::render('Module/Qualification/Edit',[
            'result'=>$result
        ]);
    }
    public function update(Request $request){
        $result=$this->qualification->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->qualification->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->qualification->status($id);
        return back()->with('success', $result['message']);
    }
}
