
import React, { useState, useEffect } from "react";
import { Button, Table, Form, FormGroup, Label, Input } from "reactstrap";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const UpdateExperiences = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    ExperienceDatas();
  })

   const handleSubmit = (e) => {
    e.persist();
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const ExperienceDatas = async () => {
    await axios.get(`/api/editExperience/${id}`).then(res  => {
      if(res.data.status === 200){
        setExperiences(res.data.experience);
        setLoading(false);
      } 
      else if(res.data.status === 404)
      {
        Swal.fire({
        text:res.data.message,
        icon:"error"
        })
      }
    })
  }
   const [experience, setExperience] = useState({
    title: "",
    description: "",
    error_list: [],
  });

  const updateExperience = async(e) => {

    e.preventDefault();
    const ExperienceData = {
      title: experience.title,
      description: experience.description,
    };
    await axios.post(`/api/updateExperience/${id}`, ExperienceData).then(res => {
      if(res.data.status === 200)
      {
        Swal.fire( {
          icon: "success",
          text:res.data.message
        })
        navigate("/experience")
      } else if(res.data.status === 404)
      {
        Swal.fire({
          text:res.data.message,
          icon: 'error'
        })
      }
    })

  }

  return (
    <div>
     <Form onSubmit={updateExperience}>
            <FormGroup>
              <Label for="title">title</Label>
              <Input
                id="title"
                name="title"
                placeholder="title"
                type="text"
                onChange={handleSubmit}
                value={experience.title}
              />
            </FormGroup>
            <FormGroup>
              <Label for="prenom">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="description"
                type="text"
                onChange={handleSubmit}
                value={experience.description}
              />
            </FormGroup>
            <div className="form-group mb-3">
              <button type="submit" id="updatebtn" className="btn btn-primary">Update Experience</button>
           </div>
          </Form>
          
      
    </div>
  )
}

export default UpdateExperiences;
