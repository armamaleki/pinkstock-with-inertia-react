<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->string('national_id')->nullable();
            $table->string('shaba_number')->nullable();
            $table->string('card_number')->nullable();

            $table->string('store_name')->nullable()->unique();
            $table->text('address')->nullable();
            $table->string('website')->nullable();

            $table->string('whatsapp')->nullable();
            $table->string('phone')->nullable();
            $table->boolean('in_person_buy')->default(false);

            $table->string('full_name')->nullable();
            $table->string('email')->nullable()->unique();

            $table->json('working_days')->nullable();
            $table->json('shipping_methods')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vendors');
    }
};
