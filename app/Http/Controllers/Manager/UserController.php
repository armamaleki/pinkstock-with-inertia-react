<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\User\StoreUserRequest;
use App\Http\Resources\Manager\Role\RoleCollection;
use App\Http\Resources\Manager\User\UserCollection;
use App\Http\Resources\Manager\User\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::query();
        if ($request->filled('q')) {
            $query->where('name', 'like', '%' . $request->q . '%');
            $query->orWhere('phone', 'like', '%' . $request->q . '%');
        }
        $usersList = $query->paginate(20);
        return Inertia::render('manager/user/index', [
            'usersList' => new UserCollection($usersList)
        ]);
    }

    public function create()
    {
        $roles = Role::orderBy('id', 'DESC')->get();
        return Inertia::render('manager/user/create', [
            'rolesList' => new RoleCollection($roles)
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        try {
            DB::beginTransaction();
            $data = $request->validated();
            $randomPassword = (string)rand(10000, 99999);
            $data['password'] = Hash::make($randomPassword);
            $user = User::create($data);
            if (!empty($data['role'])) {
                $user->assignRole($data['role']);
            }
            DB::commit();
            return to_route('manager.user.index')
                ->with('success', 'کاربر با موفقیت ایجاد شد. رمز عبور: ' . $randomPassword);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
            return to_route('manager.user.index')
                ->with('error', 'مشکلی در ایجاد کاربر پیش آمد.');
        }
    }

    public function show(User $user)
    {
        return Inertia::render('manager/user/show', [
            'userItem' => new UserResource($user)
        ]);
    }

    public function edit(User $user)
    {
        $roles = Role::all();
        return Inertia::render('manager/user/edit', [
            'user' => new UserResource($user),
            'roles' => new RoleCollection($roles)
        ]);
    }

    public function update(Request $request, User $user)
    {

    }
}
