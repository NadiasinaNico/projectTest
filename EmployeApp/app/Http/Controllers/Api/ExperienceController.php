<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Experience;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ExperienceController extends Controller
{
    public function listExperience()
    {
        
        $experiences = Experience::all(); 

        return response()->json([
            'status' => 200,
            'experiences' => $experiences,
        ]);
    }

    public function addExperience(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:40',
            'description' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'validate_err' => $validator->errors(),
            ]);
        } else {
            $experience = new Experience;
            $experience->title = $request->input('title');
            $experience->description = $request->input('description');
            $experience->save();

            return response()->json([
                'status' => 200,
                'message' => 'Experience Added Successfully',
            ]);
        }
    }

    public function editExperience($id)
    {
        $experience = Experience::find($id);

        if ($experience) {
            return response()->json([
                'status' => 200,
                'experience' => $experience,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'ID Not Found',
            ]);
        }
    }

    public function updateExperience(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:40',
            'description' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'validate_err' => $validator->errors(),
            ]);
        } else {
            $experience = Experience::find($id);
            if ($experience) {
                $experience->title = $request->input('title');
                $experience->description = $request->input('description');
                $experience->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'experience Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'ID Not Found',
                ]);
            }
        }
    }


    public function deleteExperience($id)
    {
        $experience = Experience::find($id);
        if ($experience) {
            $experience->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Experience delete successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'ID Not found',
            ]);
        }
    }
}
