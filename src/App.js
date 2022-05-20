import axios from 'axios';
import { useState } from 'react';

function App() {

  const [PetVals, setPetVals] = useState({});

  const ChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPetVals(petData => ({...petData, [name]: value}));
  }

  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log(PetVals);

    axios.post('http://localhost/petRelocate_Api/addPet.php', PetVals)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input onChange={ChangeHandler} name="pet_name" type="text" placeholder="Name of Pet" />
            <select name="species">
              <option selected disabled hidden>Species of Pet</option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Equine</option>
              <option>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>
            <select onChange={ChangeHandler} name="gender">
              <option selected disabled hidden>Gender/Sex of Pet</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input onChange={ChangeHandler} name="age" type="number" placeholder="Age of Pet (years) " />
            <input onChange={ChangeHandler} name="chip_id" type="number" placeholder="Pet MicroChip Id" />
            <input onChange={ChangeHandler} name="owner_name" type="text" placeholder="Pet Owner Name" />
            <input onChange={ChangeHandler} name="owner_id" type="number" placeholder="Pet Owner ID Number" />
            <input onChange={ChangeHandler} name="export_origin" type="text" placeholder="Export Origin" />
            <input onChange={ChangeHandler} name="export_destination" type="text" placeholder="Export Destination" />

            <button onClick={SubmitHandler} type="submit">Lets Export That Pet!</button>

          </form>

        </div>
    </div>
  );
}

export default App;
