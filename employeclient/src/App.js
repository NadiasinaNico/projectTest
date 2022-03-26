import React from "react";

import {BrowserRouter} from "react-router-dom";
import EmployeType from '../src/components/EmployeType/EmployeType'
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

const App = () => {

  return (
    <>
    <BrowserRouter>
       <EmployeType />
    </BrowserRouter>
        
    </>
  );
};
export default App;
