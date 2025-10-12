<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class CreateSuperUserAndPermission extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'show-admin-panel',
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',
            'manage-users',
            'role-users',
            'show-users',
            'edit-users',
            'list-users',
            'delete-users',
            'create-users',
            'update-users',

            'orders-list',
            'orders-show',
            'orders-edit',
            'orders-delete',
            'orders-create',
            'orders-update',

            'comments-list',
            'comments-show',
            'comments-edit',
            'comments-delete',
            'comments-create',
            'comments-update',

            'categories-list',
            'categories-show',
            'categories-edit',
            'categories-delete',
            'categories-create',
            'categories-update',
            'categories-status',
            'categories-menu',

            'products-list',
            'products-show',
            'products-edit',
            'products-delete',
            'products-create',
            'products-update',
            'products-status',

            'attribute-list',
            'attribute-show',
            'attribute-edit',
            'attribute-delete',
            'attribute-create',
            'attribute-update',
            'attribute-status',

            'article-list',
            'article-show',
            'article-edit',
            'article-delete',
            'article-create',
            'article-update',
            'article-status',

            'training-video',
            'training-video-show',
            'training-video-edit',
            'training-video-delete',
            'training-video-create',
            'training-video-update',
            'training-video-status',
        ];
        foreach ($permissions as $permName) {
            Permission::firstOrCreate(['name' => $permName]);
        }
        $role = Role::firstOrCreate(['name' => 'superUser']);
        $allPermissions = Permission::pluck('id', 'id')->all();
        $role->syncPermissions($allPermissions);
        $user = User::firstOrCreate(
            ['phone' => '09125918435'],
            [
                'name' => 'ارما',
                'email' => 'arma.malekii@gmail.com',
                'password' => Hash::make('123456'),
            ]
        );
        if (!$user->hasRole('superUser')) {
            $user->assignRole($role);
        }
    }
}
