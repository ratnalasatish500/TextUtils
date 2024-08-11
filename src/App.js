import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';
import { BrowserRouter, Route, Routes, Link, Redirect }from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

 const toogleMode = () => {
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#1d3557';
    document.title = 'TextUtils - Dark mode';
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.title = 'TextUtils - Light mode';
   }
  }
  return (
 <>
  <div className="container my-3">
  <BrowserRouter>
  <Navbar title="TextUtils" aboutText="About Us" mode={mode} toogleMode={toogleMode}/> 
	<Routes>
	  <Route exact path="/" element={<TextForm heading="Enter some text here : " mode={mode}/>}/>	
	  <Route exact path="/about" element={<About />}/>
	</Routes>
</BrowserRouter>
  </div>
 </>
  );
 }


export default App;

