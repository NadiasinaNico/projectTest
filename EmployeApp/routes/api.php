<?php

use App\Http\Controllers\Api\EmployeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('employe', [EmployeController::class, 'listEmploye']);
Route::post('employe', [EmployeController::class, 'addEmploye']);
// Route::get('/ediEmploye/{id}', [EmployeController::class, 'editEmploye']);
// Route::update('/updateEmploye/{id}', [EmployeController::class, 'updateEmploye']);
Route::delete('/deleteEmploye/{id}', [EmployeController::class, 'deleteEmploye']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
