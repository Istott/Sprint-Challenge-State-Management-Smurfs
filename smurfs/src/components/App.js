// import React, { Component } from "react";
// import "./App.css";
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// export default App;

import React, {useState} from 'react';
import './App.css';
import Form from './form';
import Member from "./member";

function SmurfForm() {
  const [memberValues, setMemberValues] = useState([]);

  const addNewMember = member => {
      const newMember = {
          name: member.name,
          email: member.email,
          role: member.role
      };

      setMemberValues([...memberValues, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>New Member</h1>

        <Form addNewMember={addNewMember}/>
      
        <div className="form">
          <Member memberValues={memberValues} setMemberValues={setMemberValues} />
        </div>
      </header>
    </div>
  );
}


export default SmurfForm;
