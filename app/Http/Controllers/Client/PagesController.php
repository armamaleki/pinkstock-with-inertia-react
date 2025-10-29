<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Resources\Client\Article\ArticleCollection;
use App\Models\Article;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function home()
    {
        $articles = Article::latestUpdated()->where('status', 'active')->take(3)->get();
        return Inertia::render('home', [
            'ArticlesList' => new ArticleCollection($articles),
        ]);
    }
}
