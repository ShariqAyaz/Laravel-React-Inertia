<?php
// FILE: app/Http/Controllers/SearchController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index(Request $request, ?string $term = null)
    {
        return Inertia::render('Search', [
            'term' => $term,
            'type' => $request->query('type', 'all'),
            'limit' => $request->query('limit', 10),
            'offset' => $request->query('offset', 0)
        ]);
    }
} 