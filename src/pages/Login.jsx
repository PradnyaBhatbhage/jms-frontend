import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  

  

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (!validateEmail(loginData.email)) {
      alert("Invalid Email");
    } else if (loginData.password.length < 8) {
      alert("Invalid Password");
    } else {
      e.preventDefault();
      console.log(loginData);
      axios
        .get("http://localhost:8080/users/getUser",{ 
          params:{
            email: loginData.email,
            password: loginData.password
          },           
        })
        .then((response) => {
          const userData = response.data;
          console.log(response.data);
          alert("Sign Successfully");
          sessionStorage.setItem("firstName",userData.firstName);
          sessionStorage.setItem("lastName",userData.lastName);
          sessionStorage.setItem("accountNo", userData.accountNo)
          sessionStorage.setItem("email",userData.email);
          sessionStorage.setItem("role", userData.role);
          console.log(sessionStorage.getItem("email"))
          if(sessionStorage.getItem("role") === "user"){
            navigate('/user-dashboard');
          }
          if(sessionStorage.getItem("role") === "reviewer"){
            navigate('/reviewer-dashboard');
          }
          if(sessionStorage.getItem("role") === "editor"){
            navigate('/editor-dashboard');
          }
          
        })

        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="p-field">
          <label htmlFor="email">Email Id</label>
          <br />
          <InputText
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div className="p-field">
          <label htmlFor="password">Password</label>
          <br />
          <InputText
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
};

export default Login;
