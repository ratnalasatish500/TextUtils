import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';   
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from 'react';
import { BrowserRouter, Route, Routes, Link, Redirect }from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

 const toogleMode = () => {
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#1d3557';
    showAlert("Dark mode enabled", "success");
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode enabled", "success");
   }
  }
  return (
 <>
  <div className="container my-3">
  <BrowserRouter>
  <Navbar title="TextUtils" aboutText="About Us" mode={mode} toogleMode={toogleMode}/>
  <Alert alert={alert}/> 
	<Routes>
	  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils" mode={mode}/>}/>	
	  <Route exact path="/about" element={<About mode={mode} />}/>
	</Routes>
</BrowserRouter>
  </div>
 </>
  );
 }


export default App;


//Facing a bug in navbar, also facing issues with alert positioning.

