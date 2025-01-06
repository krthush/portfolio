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
    public function download($file_name)
    {
    	$exists = Storage::disk('local')->exists($file_name);
    	if ($exists) {
        	return Storage::disk('local')->download($file_name);
    	} else {
    		return redirect()->route('welcome')->withErrors([
    			'File ' . $file_name . ' does not exist.'
    		]);
    	}
    }
}
