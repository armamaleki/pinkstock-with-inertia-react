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
            return to_route('manager.article.index')->with('success', 'مقاله با موفقیت انتشار داده شد.');
        } catch (\Exception $exception) {
            Log::error( $exception->getMessage());
            return to_route('manager.article.index')->with('error', 'ساخت مقاله با خطا مواجه شد!!!');
        }
    }


    public function edit(Article $article)
    {
        return Inertia::render('manager/article/edit', [
            'articleItem' => new ArticleResource($article),
        ]);
    }

    public function update(UpdateArticleRequest $request, Article $article)
    {
        try {
            $data = $request->validated();
            $article->update($data);
            return to_route('manager.article.index')->with('success', 'مقاله با موفقیت آپدیت شد داده شد.');
        } catch (\Exception $exception) {
            Log::error('خطا در اپدیت مقاله:', $exception->getMessage());
            return to_route('manager.article.index')->with('error', 'آپدیت مقاله با خطا مواجه شد!!!');
        }
    }


    public function status(Request $request, Article $article)
    {
        $request->validate([
            'status' => 'required|in:active,check,deactivate',
        ]);
        try {
            $article->update([
                'status' => $request->status,
            ]);
            return back()->with('success', 'وضعیت مقاله با موفقیت تغییر کرد.');
        } catch (\Exception $e) {
            return back()->with('error', 'تغییر وضعیت مقاله با خطا مواجه شد!');
        }
    }

    public function avatar(Request $request, Article $article)
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,jpg|max:2048',
        ]);
        try {
            $article->clearMediaCollection('avatars');
            $name = $request->avatar->store('avatars/', 'public');
            $article->addMedia(storage_path('app/public/' . $name))
                ->toMediaCollection('avatars', 'public');

            return back()->with('success', 'اواتار با موفقیت اپلود شد.');
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return back()->with('error', 'خطا در آپلود اواتار: ' . $e->getMessage());
        }
    }



}
