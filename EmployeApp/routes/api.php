<?php

use App\Http\Controllers\Api\EmployeController;
use App\Http\Controllers\Api\ExperienceController;
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
Route::post('/addEmploye', [EmployeController::class, 'addEmploye']);
Route::get('/editEmploye/{id}', [EmployeController::class, 'editEmploye']);
Route::put('/updateEmploye/{id}', [EmployeController::class, 'updateEmploye']);
Route::delete('/deleteEmploye/{id}', [EmployeController::class, 'deleteEmploye']);

Route::get('experience', [ExperienceController::class, 'listExperience']);
Route::post('/addExperience', [ExperienceController::class, 'addExperience']);
Route::get('/editExperience/{id}', [ExperienceController::class, 'editExperience']);
Route::put('/updateExperience/{id}', [ExperienceController::class, 'updateExperience']);
Route::delete('/deleteExperience/{id}', [ExperienceController::class, 'deleteExperience']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
