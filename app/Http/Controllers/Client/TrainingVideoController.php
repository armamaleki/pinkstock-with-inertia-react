<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Resources\Client\Traning\TraningCollection;
use App\Models\TrainingVideo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrainingVideoController extends Controller
{
    public function index()
    {
        $trainings = TrainingVideo::where('status', 'active')
            ->latestUpdated()
            ->paginate(12);
        return Inertia::render('client/training/index', [
            'trainingLists' => new TraningCollection($trainings),
        ]);
    }
}
