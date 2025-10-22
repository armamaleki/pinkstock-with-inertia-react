<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->words(2, true);
        return [
            'name'              => ucfirst($name),
            'slug'              => Str::slug($name . '-' . $this->faker->unique()->numberBetween(1, 9999)),
            'status'            => $this->faker->randomElement(['deactivate', 'active', 'check']),
            'meta_title'        => $this->faker->sentence(6),
            'meta_description'  => $this->faker->text(160),
            'description'       => $this->faker->paragraphs(3, true),
            'short_description' => $this->faker->sentence(12),
            'user_id'           => User::factory(),
        ];
    }
}
