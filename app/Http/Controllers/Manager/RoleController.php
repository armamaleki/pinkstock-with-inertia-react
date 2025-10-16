<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Resources\Manager\Role\RoleCollection;
use App\Http\Resources\Manager\Role\RoleResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $query = Role::query();
        if ($request->filled('q')) {
            $query->where('name', 'like', '%' . $request->q . '%');
        }
        $roleList = $query->paginate(20);
        return Inertia::render('manager/role/index' , [
            'roleList' => new RoleCollection($roleList)
        ]);
    }
}
