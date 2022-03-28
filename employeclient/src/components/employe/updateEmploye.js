import React from 'react'

const updateEmploye = () => {

  useEffect(() => {
    EmployeDatas();
  })

   const handleSubmit = (e) => {
    e.persist();
    setEmploye({ ...employe, [e.target.name]: e.target.value });
  };

  const EmployeDatas = async () => {
    await axios.get(`/api/editEmploye/${id}`).then(res  => {
      if(res.data.status === 200){
        setEmployes(res.data.employe);
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

  const updateEmploye = async(e) => {
    e.preventDefault();
    const employeData = {
      nom: employe.nom,
      prenom: employe.prenom,
      age: employe.age,
      poste: employe.poste,
    };
    await axios.post(`/api/updateEmploye/`, employeData).then(res => {
      if(res.data.status === 200)
      {
        Swal.fire( {
          icon: "success",
          text:res.data.message
        })
        navigate("/employe")
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
                {employe.experience.title}
                {employe.experience.description}
                </option>
                  );
            })}
              </Input>
             
            </FormGroup>
          </Form>
      
    </div>
  )
}

export default updateEmploye
