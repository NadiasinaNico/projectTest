<?php

namespace App\Http\Controllers\Api;

use App\Models\Employes;
use App\Models\Experience;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class EmployeController extends Controller
{
    public function listEmploye()
    {
        
        $employes = Employes::with(['experience'])->get();

        return response()->json([
            'status' => 200,
            'employes' => $employes,
        ]);
    }

    public function addEmploye(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nom' => 'required|max:40',
            'prenom' => 'required|max:40',
            'age' => 'required|max:3',
            'poste' => 'required|max:40',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'validate_err' => $validator->errors(),
            ]);
        } else {
            $employe = new Employes;
            $employe->nom = $request->input('nom');
            $employe->prenom = $request->input('prenom');
            $employe->age = $request->input('age');
            $employe->poste = $request->input('poste');
            $employe->save();
            
            return response()->json([
                'status' => 200,
                'message' => 'Employe Added Successfully',
            ]);
        }
    }

    public function editEmploye($id)
    {
        $employe = Employes::find($id);

        if ($employe) {
            return response()->json([
                'status' => 200,
                'employe' => $employe,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'ID Not Found',
            ]);
        }
    }

    public function updateEmploye(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nom' => 'required|max:40',
            'prenom' => 'required|max:40',
            'age' => 'required|max:3',
            'poste' => 'required|max:40',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'validate_err' => $validator->errors(),
            ]);
        } else {
            $employe = Employes::find($id);
            if ($employe) {
                $employe->nom = $request->input('nom');
                $employe->prenom = $request->input('prenom');
                $employe->age = $request->input('age');
                $employe->poste = $request->input('poste');
                $employe->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Employe Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'ID Not Found',
                ]);
            }
        }
    }


    public function deleteEmploye($id)
    {
        $employe = Employes::find($id);
        if ($employe) {
            $employe->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Employe delete successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'ID Not found',
            ]);
        }
    }
}
