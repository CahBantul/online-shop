<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return  [
            'id' => $this->id,
            'price' => $this->price,
            'slug' => $this->slug,
            'name' => $this->name,
            'picture' => $this->picture ? Storage::url($this->picture) : 'https://fakeimg.pl/200x320?text=Book&font=noto',
            'category' => [
                'id' => $this->category->id,
                'name' => $this->category->name,
                'slug' => $this->category->slug,
            ]
        ];
    }
}
