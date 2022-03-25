import React from "react";

import {BrowserRouter} from "react-router-dom";
import EmployeType from '../src/components/EmployeType/EmployeType'

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
