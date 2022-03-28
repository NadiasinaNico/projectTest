import React, { useState, useEffect } from "react";
import { Button, Table, Form, FormGroup, Label, Input } from "reactstrap";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const Employe = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [employes, setEmployes] = useState([]);


  useEffect(() => {
    EmployeData();
  }, []);

  const EmployeData = async () => {
    
    await axios.get(`/api/employe/`).then((res) => {
      if (res.status === 200) {
        setEmployes(res.data.employes);
        setLoading(true);
        console.log(res.data.employes);
      }
    });
  };

  const [employe, setEmploye] = useState({
    nom: "",
    prenom: "",
    age: "",
    poste: "",
    error_list: [],
  });

  

  const handleSubmit = (e) => {
    e.persist();
    setEmploye({ ...employe, [e.target.name]: e.target.value });
  };

  

  const saveEmploye = async (e) => {

    e.preventDefault();

    const employeData = {
      nom: employe.nom,
      prenom: employe.prenom,
      age: employe.age,
      poste: employe.poste,
    };
    await axios.post(`/api/addEmploye/`, employeData).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
        });
        setEmploye({
          nom: "",
          prenom: "",
          age: "",
          poste: "",
          error_list: [],
        });

        navigate("/employe");
        EmployeData();
        } else if (res.data.status === 422) {
          setEmploye({ ...employe, error_list: res.data.validate_err });
        } else {
          Swal.fire({
            text: res.data.validate_err,
            icon: "error",
          });
      }
    });
  };

  const toggle = () => setOpen(!open);

  const deleteEmploye = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Vous etes sur",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    await axios.delete(`/api/deleteEmploye/${id}`).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
        });
        EmployeData();
      } else if (res.data.status === 404) {
        Swal.fire({
          text: res.data.message,
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="container">
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>Add Employe</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="nom">Nom</Label>
              <Input
                id="nom"
                name="nom"
                placeholder="nom"
                type="text"
                onChange={handleSubmit}
                value={employe.nom}
              />
            </FormGroup>
            <FormGroup>
              <Label for="prenom">Prenom</Label>
              <Input
                id="prenom"
                name="prenom"
                placeholder="prenom"
                type="text"
                onChange={handleSubmit}
                value={employe.prenom}
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                id="age"
                name="age"
                placeholder="Age"
                type="numeric"
                onChange={handleSubmit}
                value={employe.age}
              />
            </FormGroup>
            <FormGroup>
              <Label for="poste">Poste</Label>
              <Input
                id="poste"
                name="poste"
                placeholder="Poste"
                type="text"
                onChange={handleSubmit}
                value={employe.poste}
              />
            </FormGroup>
            <FormGroup>
              <Label for="experience">Experience</Label>
              
              <Input id="experience" name="experience" type="select">
              { employes &&
            employes.map((employe) => {
              return (
                <option>
                {employe.experience.title} -- 
                {employe.experience.description}
                </option>
                  );
            })}
              </Input>
             
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={saveEmploye}>
            Add
          </Button>{" "}
          <Button onClick={function noRefCheck() {}}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <h4 className="text-success text-center">Listes des Employes</h4>

      <Button color="primary" onClick={toggle}>
                      Add Employe
                    </Button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>nom</th>
            <th>prenom</th>
            <th>age</th>
            <th>poste</th>
            <th>experience</th>
          </tr>
        </thead>
        <tbody>
          {employes &&
            employes.map((employe) => {
              return (
                <tr key={employe.id}>
                <td>{employe.id}</td>
                  <td>{employe.nom}</td>
                  <td>{employe.prenom}</td>
                  <td>{employe.age}</td>
                  <td>{employe.poste}</td>
                  <td>{employe.experience.title} - {employe.experience.description}</td>
                  <div>
                    
                    <Button color="success">Modifier</Button>
                    <Button
                      color="danger"
                      onClick={() => deleteEmploye(employe.id)}
                    >
                      delete
                    </Button>
                  </div>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Employe;
