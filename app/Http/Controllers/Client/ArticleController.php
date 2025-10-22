<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Resources\Client\Article\ArticleCollection;
use App\Http\Resources\Client\Article\ShowArticleResource;
use App\Models\Article;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::latestUpdated()->where('status', 'active')->paginate(6);
        $lastArticles = Article::where('status', 'active')->inRandomOrder()->limit(12)->get();
        return Inertia::render('client/article/index', [
            'ArticlesList' => new ArticleCollection($articles),
            'LastArticlesList' => new ArticleCollection($lastArticles),
        ]);
    }

    public function show(Article $article)
    {
        if ($article->status !== 'active') {
            abort(404);
        }
        return Inertia::render('client/article/show', [
            'articleItem' => new ShowArticleResource($article),
        ]);
    }

}
