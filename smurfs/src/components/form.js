import React, {useState} from 'react';



const Form = props => {
    console.log("props", props);
    const [note, setNote] = useState({
      name: "",
      email: "",
      role: ""
    });
  
    const handleChanges = e => {
      console.log(note);
    
      setNote({
        ...note,
        [e.target.name]: e.target.value
      });
    };

  
    const submitForm = e => {
      e.preventDefault();
      props.addNewMember(note);
      setNote({ name: "", email: "", role: "" });
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