<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\Article\StoreArticleRequest;
use App\Http\Requests\Manager\Article\UpdateArticleRequest;
use App\Http\Resources\Manager\Article\ArticleCollection;
use App\Http\Resources\Manager\Article\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::query();
        if ($request->filled('q')) {
            $query->where('name', 'like', '%' . $request->q . '%');
        }
        $articleList = $query->paginate(20);
        return Inertia::render('manager/article/index', [
            'articleList' => new ArticleCollection($articleList),
        ]);
    }

    public function create()
    {
        return Inertia::render('manager/article/create');
    }

    public function store(StoreArticleRequest $request)
    {
        try {
            $data = $request->validated();
            $article = Article::create($data);
//            $article->clearMediaCollection('avatars');
//            $name = $request->croppedImage->store('avatars/', 'public');
//            $article->addMedia(storage_path('app/public/' . $name))
//                ->toMediaCollection('avatars', 'public');
            return to_route('manager.article.index')->with('success', 'مقاله با موفقیت انتشار داده شد.');
        } catch (\Exception $exception) {
            Log::error('خطا در ذخیره مقاله:', $exception->getMessage());
            return to_route('manager.article.index')->with('error', 'ساخت مقاله با خطا مواجه شد!!!');
        }
    }


    public function edit(Article $article)
    {
        return Inertia::render('manager/article/edit', [
            'article' => new ArticleResource($article),
        ]);
    }

    public function update(UpdateArticleRequest $request, Article $article)
    {

    }


}
