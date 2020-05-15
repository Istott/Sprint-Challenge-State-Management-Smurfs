import React, {useEffect, useContext} from "react";
import axios from 'axios';

import {SmurfContext} from '../contexts/SmurfContext';

const Member = () => {
    const {memberValues, setMemberValues} = useContext(SmurfContext);

    useEffect(() => {
        axios
          .get(`http://localhost:3333/smurfs`)
          .then(response => {
            console.log(response);
            setMemberValues(response.data);
          })
          .catch(error => {
            console.log("Sorry no Smurfs", error);
          });
      }, []);

  return (
    <div className="note-list">
      {memberValues.map(note => (
        <div className="note" key={note.id}>
          <h2>Name: {note.name}</h2>
          <h3>Age: {note.age}</h3>
          <h4>Height: {note.height}</h4>
        </div>
      ))}
    </div>
  );
};

export default Member;