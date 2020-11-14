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
    	$exists = Storage::exists('files/' . $file_name);

    	if ($exists) {
        	return Storage::download('files/' . $file_name);
    	} else {
    		return redirect()->route('welcome')->withErrors([
    			'File does not exist.'
    		]);
    	}
    }
}
