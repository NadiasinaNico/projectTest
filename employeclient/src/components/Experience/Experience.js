import React, { useState, useEffect } from "react";
import { Button, Table, Form, FormGroup, Label, Input } from "reactstrap";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams , Link, useHistory} from "react-router-dom";

const Experience = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

   const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [experiences, setExperiences] = useState([]);

   const [experience, setExperience] = useState({
    title: "",
    description: "",
    error_list: [],
  });


  useEffect(() => {
    experienceData();
  }, []);

  const experienceData = async () => {
    
    await axios.get(`/api/experience/`).then((res) => {
      if (res.status === 200) {
        setExperiences(res.data.experiences);
        setLoading(true);
        console.log(res.data.experiences);
      }
    });
  };

   const handleSubmit = (e) => {
    e.persist();
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };


  const saveExperience = async (e) => {

    e.preventDefault();

    const ExperienceData = {
      title: experience.title,
      description: experience.description,
    };
    await axios.post(`/api/addExperience/`, ExperienceData).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
        });
        setExperience({
          title: "",
          description: "",
          error_list: [],
        });

        navigate("/experience");
        experienceData();
        } else if (res.data.status === 422) {
          setExperience({ ...experience, error_list: res.data.validate_err });
        } else {
          Swal.fire({
            text: res.data.validate_err,
            icon: "error",
          });
      }
    });
  };

 const deleteExperience = async (id) => {
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

    await axios.delete(`/api/deleteExperience/${id}`).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
        });
        experienceData();
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
        <ModalHeader>Add Experience</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Titre</Label>
              <Input id="title" name="title" placeholder="titre" type="text" 
                onChange={handleSubmit}
                value={experience.title}
                />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="description"
                type="text"
                 onChange={handleSubmit}
                value={experience.description}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={saveExperience}>
           Add
          </Button>
          <Button onClick={function noRefCheck() {}}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <h4 className="text-success text-center">Liste des Employers</h4>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>titre</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {experiences &&
            experiences.map((experience) => {
              return (
                <tr key={experience.id}>
                <td>{experience.id}</td>
                  <td>{experience.title}</td>
                  <td>{experience.description}</td>
                  <div>
                    <Button color="primary" onClick={toggle}>
                      Add Experience
                    </Button>
                    <td>
                        <Link to={`editExperience/${experience.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <Button
                      color="danger"
                      onClick={() => deleteExperience(experience.id)}
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

export default Experience;
