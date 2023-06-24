<?php

namespace App\Models;

use App\Traits\HasManyCarts;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;
    use HasManyCarts;

    protected $guarded = [];

    public function getRouteKeyName() {
        return 'slug';
    }

    public function Category(): BelongsTo {
        return $this->belongsTo(Category::class);
    }
}
