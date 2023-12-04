import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import "/src/css/sign-up.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobileNo: "",
    password: "",
    role: "",
    firstName: "",
    lastName: "",
    profession: "",
  });

  const roles = [
    { label: "Reviewer", value: "reviewer" },
    { label: "Editor", value: "editor" },
    { label: "User", value: "user" },
    // Add more roles as needed
  ];

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (formData.firstName === "") {
      alert("First Name cannot be empty.");
    } else if (formData.lastName === "") {
      alert("Last Name cannot be empty.");
    } else if (!validateEmail(formData.email)) {
      alert("Invalid Email Id");
    } else if (formData.mobileNo === "" || formData.mobileNo.length < 10) {
      alert("Invalid Mobile No");
    } else if (formData.password === "") {
      alert("Password cannot be empty.");
    } else if (formData.role === "") {
      alert("Role cannot be empty.");
    } else if (formData.profession === "") {
      alert("Profession cannot be empty.");
    }
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    axios
      .post("http://localhost:8080/users/saveUser", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() =>{
        alert("Sign Up Was Successful.");
        navigate("/login")

      }).catch((e) =>{
        console.error(e);
        alert("Sign Up Failed!!!");
      });
    console.log(formData);
  };
  return (
    <div className="user-form">
      <form onSubmit={handleSubmit} style={{marginTop:"150px"}}>
        <h2>Registration Form</h2>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="firstName">First Name</label>
            <InputText
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="p-field">
            <label htmlFor="lastName">Last Name</label>
            <InputText
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="p-field">
            <label htmlFor="email">Email</label>
            <InputText
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="p-field">
            <label htmlFor="mobileNo">Mobile No</label>
            <InputText
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>

          <div className="p-field">
            <label htmlFor="password">Password</label>
            <InputText
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="p-field">
            <label htmlFor="role">Role</label>
            <Dropdown
              id="role"
              name="role"
              value={formData.role}
              options={roles}
              onChange={handleChange}
              placeholder="Select a role"
            />
          </div>

          <div className="p-field">
            <label htmlFor="profession">Profession</label>
            <InputText
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
};

export default SignUp;
