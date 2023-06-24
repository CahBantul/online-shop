<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{
    public function __construct() 
    {
        $this->middleware('auth');    
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $carts = Cart::query()
            ->with('product')
            ->whereBelongsTo($request->user())
            ->get();

        return inertia('Cart/Index', [
            'carts' => CartResource::collection($carts),
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
    public function store(Request $request, Product $product)
    {
        // dd($product);
        $product->carts()->updateOrCreate([
            'user_id' => $request->user()->id,
            'product_id' =>$product->id,
        ],[
            'user_id' => $request->user()->id,
            'price' => $product->price,
        ]);

        Cache::forget('carts_global_count');


    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        // dd($cart);
        $cart->delete();
        Cache::forget('carts_global_count');

        // return back();
    }
}
