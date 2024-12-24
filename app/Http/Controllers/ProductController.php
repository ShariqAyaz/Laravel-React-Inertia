<?php
// FILE: app/Http/Controllers/ProductController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function show(Request $request, string $category, int $id)
    {
        return Inertia::render('Products/Show', [
            'category' => $category,
            'id' => $id,
            'sort' => $request->query('sort', 'newest'),
            'filter' => $request->query('filter'),
            'page' => $request->query('page', 1)
        ]);
    }
} 