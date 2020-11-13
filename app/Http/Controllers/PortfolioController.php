<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    /**
     * Let the user download file
     *
     * @return Response
     */
    public function emitPitchdeck()
    {
        return Storage::download('emit_pitchdeck.pdf');
    }
}
