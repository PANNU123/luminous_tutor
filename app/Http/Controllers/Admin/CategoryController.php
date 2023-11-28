<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BangladeshRequest;
use App\Http\Requests\Admin\CategoryRequest;
use App\Models\Admin\Category;
use App\Repositories\Admin\CategoryRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    protected $category;
    public function __construct(CategoryRepository $category)
    {
        $this->category = $category;
    }


    public function index(){
        return Inertia::render('Module/Category/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Category::query();
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
        $categories = Category::select('id', 'name')->get();
        return Inertia::render('Module/Category/Add',[
            'categories' => $categories
        ]);
    }
    public function store(CategoryRequest $request){
        $result = $this->category->store($request);
        if($result['status']== true){
            return to_route('admin.category')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $categories = Category::select('id', 'name')->get();
        $result = $this->category->edit($id);
        return Inertia::render('Module/Category/Edit',[
            'categories' => $categories,
            'result'=>$result
        ]);
    }
    public function update(Request $request){
        $result=$this->category->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->category->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->category->status($id);
        return back()->with('success', $result['message']);
    }
}
