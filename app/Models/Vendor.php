<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $fillable = [
        'national_id',
        'shaba_number',
        'card_number',
        'store_name',
        'address',
        'website',
        'whatsapp',
        'phone',
        'in_person_buy',
        'full_name',
        'email',
        'working_days',
        'shipping_methods',
    ];
}
