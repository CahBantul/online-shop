<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductSingleResource;
use App\Http\Resources\UserProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::query()
                            ->with('category')
                            ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
                            ->select('id', 'price', 'slug', 'picture', 'name', 'category_id')
                            ->paginate(24)
                            ->withQueryString();
        
        // return ProductResource::collection($products);

        return inertia('Products/Index', [
            'products' => ProductResource::collection($products),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Product $product)
    {
        $isProductBought = $request->user() ? $request->user()->products()->find($product->id) : null;

        return Inertia('Products/Show', [
            'product' => ProductSingleResource::make($product->load('category')),
            'isProductBought' => $isProductBought
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }

    public function mine(Request $request)  {
        $products = $request->user()->products()
                    ->latest()
                    ->paginate(15)
                    ->withQueryString();
                    
        return inertia('Products/Mine', [
            'products' => UserProductResource::collection($products)
        ]);
    }
}
