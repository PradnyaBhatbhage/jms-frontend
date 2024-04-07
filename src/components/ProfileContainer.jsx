import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext';
const ProfileContainer = () => {

  const [user, setUser] = useState({
    email: '',
    mobileNo: '',
    password: '',
    role: '',
    firstName: '',
    lastName: '',
    profession: ''
  });

  useEffect(() => {
    axios.get("http://localhost:8080/users/fetchUserDetails/", {
      params: {
        email: sessionStorage.getItem('email')
      }
    }).then((response) => {
      setUser(response.data)
    })
  }, [])

  return (
    /*  <div style={{
       padding: '20px',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'start',
       alignItems: 'start',
       margin: 'auto',
       width: '400px'
     }}> */
    <div style={{
      padding: '20px', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', margin: 'auto', width: '400px'
    }}  >
      <label htmlFor="email">Email</label>
      <span id='email' >{user.email}</span>
      {/* <InputText
        id="email"
        name="email"
        disabled='true'
        value={user.email}
      /> */}
      <label htmlFor="mobileNo">Mobile no</label>
      <InputText
        id="mobileNo"
        name="mobileNo"
        value={user.mobileNo}
        disabled='true'
      />
      <label htmlFor="role">Role</label>
      <InputText
        id="role"
        name="role"
        value={user.role}
        disabled='true'
      />
      <label htmlFor="firstName">First Name</label>
      <InputText
        id="firstName"
        name="firstName"
        value={user.firstName}
        disabled='true'
      />
      <label htmlFor="lastName">Last Name</label>
      <InputText
        id="lastName"
        name="email"
        value={user.lastName}
        disabled='true'
      />
      <label htmlFor="profession">Profession</label>
      <InputText
        id="profession"
        name="profession"
        value={user.profession}
        disabled='true'
      />
    </div>

  )
}

export default ProfileContainer