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
    document.title = 'TextUtils - Dark mode';
    showAlert("Dark mode enabled", "success");
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.title = 'TextUtils - Light mode';
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
	  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter some text here : " mode={mode}/>}/>	
	  <Route exact path="/about" element={<About />}/>
	</Routes>
</BrowserRouter>
  </div>
 </>
  );
 }


export default App;

