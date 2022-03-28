<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employes extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'prenom',
        'age',
        'poste',
        'experience_id',
    ];
    

    public function experience()
    {
        return $this->belongsTo(Experience::class);
    }
}
