import React, { useState } from "react";
import { Button, Table, Form, FormGroup, Label, Input } from "reactstrap";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const Experience = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div className="container">
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>Add Experience</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="titre">Titre</Label>
              <Input id="titre" name="titre" placeholder="titre" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="description"
                type="text"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <div>
              <Button color="primary" onClick={toggle}>
                Add experience
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
            <div>
              <Button color="primary" onClick={toggle}>
                Add experience
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

export default Experience;
