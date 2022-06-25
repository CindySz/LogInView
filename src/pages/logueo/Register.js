import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import {Form, Input, Button } from './StylesLogueo';
import {CgProfile} from "react-icons/cg";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";


const Register = ({setIsLogged}) => {

  

  let [account, setAccount] = useState({
    firstName: "",
    lastName:"",
    email:"",
    password: ""
  });

  const navigate= useNavigate();

  

  let handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    account[name] = value;
    setAccount(account);
  }

   

  let save = (e) => {
    e.preventDefault();
    console.log(account);
    setIsLogged(true);
    
    navigate("/home")
  }

  return (
    <div>
      
    
        <Form  onSubmit={save}>
         First Name  <Input type="text" name="firstName" onChange={handleChange} /> <CgProfile className="icons"/>
          
          Last Name  <Input type="text" name="lastName"  onChange={handleChange}/> <CgProfile className="icons"/>
          
          Email <Input type="email" name="email" onChange={handleChange}/> <MdEmail className="icons"/> 
         
          Password  <Input type="password" name="password" onChange={handleChange} /> <RiLockPasswordFill className="icons"/>
          

          <Button>CREATE ACCOUNT</Button>

          <p>Already have an account? <Link to="/logIn">Log In</Link></p>
          
        </Form>
        
        
      
      </div>
  );

}

export default Register;