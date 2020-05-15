import React, {useState} from 'react';
import axios from 'axios';


const Form = props => {
    console.log("Form props:", props);
    const [note, setNote] = useState({
      name: "",
      age: "",
      height: ""
    });
  
    const handleChanges = e => {
      console.log(note);
    
      setNote({
        ...note,
        [e.target.name]: e.target.value
      });
    };

    const submitForm = (e) => {
        e.preventDefault();

        const newSmurf = {
          name: note.name,
          age: note.age,
          height: `${note.height} cm`
        };
    
        return axios
          .post(`http://localhost:3333/smurfs`, newSmurf)
          .then(response => {
            console.log(response);
            setNote([...note, newSmurf]);
          })
          .catch(error => {
            console.log("Sorry no Smurfs", error);
          });
      };
  
    return (
      <form onSubmit={submitForm}>
        <div className="formdiv">
          <div className="namestuff">
            <label htmlFor="title">Name </label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChanges}
              value={note.name}
            />
          </div>
          
          <div className="namestuff">
            <label htmlFor="age">Age </label>
            <input
              id="height"
              type="text"
              name="age"
              onChange={handleChanges}
              value={note.email}
            />
          </div>

          <div className="namestuff">
            <label htmlFor="height">Height </label>
            <input
              id="height"
              type="text"
              name="height"
              onChange={handleChanges}
              value={note.role}
            />
          </div>

          <button type="submit">Add Smurf</button>
        </div>
      </form>
    );
};
  
export default Form;