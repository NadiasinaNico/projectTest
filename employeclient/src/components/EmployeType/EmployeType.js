import React from "react";
import NavbarMenu from '../Navbar/Navbar';
import Employe from '../employe/employe';
import Experience from '../Experience/Experience';
import { Route, Routes } from "react-router-dom";
import Accueil from '../Accueil/Accueil';
import UpdateExperiences from '../Experience/UpdateExperiences';

const  EmployeType = () => {

    return (
      <div>
        <NavbarMenu />
        <Routes>
          <Route path="/"  element={<Accueil />} />
          <Route path="/employe" element={<Employe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/editExperience/:id" element={<UpdateExperiences />} />
        </Routes>
      </div>
    );
}
export default EmployeType;
