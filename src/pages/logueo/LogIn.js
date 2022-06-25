import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "./LogueoStyles";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LogIn = () => {
  let [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    logIn[name] = value;
    setLogIn(logIn);
  };

  return (
    <div>
      <Form>
        Email <Input type="email" name="email" onChange={handleChange} />{" "}
        <MdEmail className="icons" />
        Password{" "}
        <Input type="password" name="password" onChange={handleChange} />{" "}
        <RiLockPasswordFill className="icons" />
        <Button>LOG IN</Button>
        <p>
          Don't you have an account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </div>
  );
};

export default LogIn;
