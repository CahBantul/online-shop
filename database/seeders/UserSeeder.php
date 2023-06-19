<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'Fardan',
                'email' => 'fardan.nozami@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ],
            [
                'name' => 'Nozami',
                'email' => 'admin@nozami.id',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ],
        ])->each(fn ($q) => User::create($q));
    }
}
