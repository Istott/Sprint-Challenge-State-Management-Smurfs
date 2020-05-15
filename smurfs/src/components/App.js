import React, {useState} from 'react';
// import axios from 'axios';
import './App.css';
import Form from './form';
import Member from "./member";

import {SmurfContext} from '../contexts/SmurfContext';

function SmurfForm() {
  const [memberValues, setMemberValues] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>New Member</h1>

        <SmurfContext.Provider value={{memberValues, setMemberValues}}>
          <Form />
        
          <div className="form">
            <Member />
          </div>
        </SmurfContext.Provider>

      </header>
    </div>
  );
}


export default SmurfForm;
