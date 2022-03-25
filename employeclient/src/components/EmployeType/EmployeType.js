import React from "react";
import Navbar from '../Navbar/Navbar';
import Employe from '../employe/employe';
import Experience from '../Experience/Experience';
import { Route, Routes } from "react-router-dom";
import Accueil from '../Accueil/Accueil';

const  EmployeType = () => {

    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/employe" element={<Employe />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    );
}
export default EmployeType;
