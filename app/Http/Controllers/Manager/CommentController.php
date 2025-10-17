<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Resources\Manager\Comment\CommentCollection;
use App\Http\Resources\Manager\Comment\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentController extends Controller
{
    public function index(Request $request)
    {
        $query = Comment::query();
        if ($request->filled('q')) {
            $query->where('body', 'like', '%' . $request->q . '%');
        }
        $comments = $query->paginate(20);
        return Inertia::render('manager/comment/index' , [
            'commentsLists' => new CommentCollection($comments)
        ]);
    }


    public function show(Comment $comment)
    {
        return Inertia::render('manager/comment/show' , [
            'commentItem' => new CommentResource($comment)
        ]);
    }

}
