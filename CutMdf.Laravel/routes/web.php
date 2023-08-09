<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return '';
    view('welcome');
});



Route::get('/redirectImage', function () {
    return redirect('/getImage');
});


Route::get('/getImage', function () {
    $filePath = storage_path('documents' . DIRECTORY_SEPARATOR . 'kamrad.png');
    // dd($filePath.'-------'.File::exists($filePath));

    // we check for the existing of the file 
    if (!File::exists($filePath)) { //!Storage::disk('local')->exists($filePath)) { // note that disk()->exists() expect a relative path, from your disk root path. so in our example we pass directly the path (/.../laravelProject/storage/app) is the default one (referenced with the helper storage_path('app')
        abort('404'); // we redirect to 404 page if it doesn't exist
    }
    //file exist let serve it 

    // if there is parameters [you can change the files, depending on them. ex serving different content to different regions, or to mobile and desktop ...etc] // repetitive things can be handled through helpers [make helpers]
    //DIRECTORY_SEPARATOR
    return response()->file($filePath); // the response()->file() will add the necessary headers in our place (no headers are needed to be provided for images (it's done automatically) expected hearder is of form => ['Content-Type' => 'image/png'];

});
