<?php

namespace App\Http\Controllers;

use App\Events\InvoicePaid;
use App\Models\Cart;
use App\Models\Invoice;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PaymentNotificationController extends Controller
{
    function update(Request $request) {
        $invoice = Invoice::where('order_id', $request->order_id)->first();
        $signature_key = hash('sha512', $request->order_id . $request->status_code . $invoice->gross_amount . '.00' . config('services.midtrans.server_key'));
        
        if ($request->signature_key == $signature_key){
            $invoice->update([
                'status' => $request->transaction_status,
                'succeeded_at' => $request->settlement_time
            ]);

            $cartQuery = Cart::query()->whereIn('id', $invoice->cart_ids);

            $cartQuery->update([
                'paid_at' =>$request->settlement_time
            ]);


            $product_ids =  $cartQuery->pluck('product_id');

            if($request->transaction_status == "settlement"){
                $user = User::find($invoice->user_id);
                $user->products()->attach($product_ids);
                Cache::forget('carts_global_count');

                broadcast(new InvoicePaid($invoice));
            }
            
        }
    }
}
