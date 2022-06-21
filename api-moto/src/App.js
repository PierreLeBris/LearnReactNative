import './App.css';
import * as React from 'react';
import ReactDOM from "react-dom";
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="Text">
      <TextField required helperText="Please enter your name" id="outlined-search" label="Search field" type="search" />
      <TextField required helperText="Please enter your name" id="outlined-search" label="Search field" type="search" />
      <TextField required helperText="Please enter your name" id="outlined-search" label="Search field" type="search" />

      <div className="Image">
        <img 
        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        alt="new"
        />
      </div>
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
