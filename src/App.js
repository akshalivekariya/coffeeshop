import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home"; 
import  Menu  from "./component/Menu";
import  Services  from "./component/Services";
import  Gallary  from "./component/Gallary";
import About from "./component/About";
import Footer from "./component/Footer";
import Login from "./component/Login";
import  Register  from "./component/Register";
import Contact from "./component/Contact";
import Coffee_Capucino from "./component/Coffee_Cappuccino";
import Coffee_Americano from "./component/Coffee_Americano";
import Coffee_Macchiato from "./component/Coffee_Macchiato";
import Coffee_Affogato from "./component/Coffee_Affogato";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import './App.css';
//import { Login } from "@mui/icons-material";

//import { Reviews } from "@mui/icons-material";
//import { SiCoffeescript } from "react-icons/si";
// import ScriptTag from 'react-script-tag';
// import { render } from "@testing-library/react";



function App() { 

  const [user,setLoginUser] =useState({
    name: "",
    email:"",
    password:""
  })
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={ <Menu/> } />   
      <Route path='/service' element={ <Services/>}/> 
      <Route path='/gallary' element={ <Gallary/>}/>
      <Route path='/about' element={ <About/>} />
     <Route path='/Login' element={ <Login/>} />  
      <Route path='/register' element={ <Register/>} />
      
     
      <Route path='/Contact' element={ <Contact/>}/>
      <Route path='/coffee_capucino' element={ <Coffee_Capucino/>}/>
      <Route path='/coffee_americano' element={ <Coffee_Americano/>}/>
      <Route path='/coffee_macchiato' element={ <Coffee_Macchiato/>}/>
      <Route path='/coffee_affogato' element={ <Coffee_Affogato/>}/>
     

    </Routes>
     <Footer /> 
    </>
  );
}

export default App;
