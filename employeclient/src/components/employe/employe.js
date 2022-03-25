import React, { useState } from "react";
import { Button, Table, Form, FormGroup, Label, Input } from "reactstrap";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const Employe = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

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
              />
            </FormGroup>
            <FormGroup>
              <Label for="prenom">Prenom</Label>
              <Input
                id="prenom"
                name="prenom"
                placeholder="prenom"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                id="age"
                name="age"
                placeholder="Age"
                type="numeric"
              />
            </FormGroup>
            <FormGroup>
              <Label for="poste">Poste</Label>
              <Input
                id="poste"
                name="poste"
                placeholder="Poste"
                type="text"
              />
            </FormGroup>
             <FormGroup>
    <Label for="experience">
      Experience
    </Label>
    <Input
      id="experience"
      name="experience"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
    </Input>
  </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Add
          </Button>{" "}
          <Button onClick={function noRefCheck() {}}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <h4 className="text-success text-center">Liste des Employes</h4>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <div>
              <Button color="primary" onClick={toggle}>
                Add Employe
              </Button>
              <Button color="danger" >
                delete
              </Button>
            </div>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <div>
              <Button color="primary" onClick={toggle}>
                Add Employe
              </Button>
              <Button color="danger" >
                delete
              </Button>
            </div>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Employe;
