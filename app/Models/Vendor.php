<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $fillable = [
        'store_name',
        'slug',
        'about',
        'phone',
        'whatsapp',
        'email',
        'website',
        'address',
        'city',
        'state',
        'postal_code',
        'latitude',
        'longitude',
        'in_person_buy',
        'working_days',
        'shipping_methods',
        'national_id',
        'economic_code',
        'user_id',
        'is_active',
    ];
}
