<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrainingVideoController extends Controller
{
    public function index()
    {
        return Inertia::render('manager/pink-academy/index');
    }
}
