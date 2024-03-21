import axios from 'axios'
import React, { useEffect } from 'react'

const ProfileContainer = () => {

    const userDetails = {
                                                                                                                                                                
    }


    useEffect(() => {
        axios.get("http://localhost:8080/users/fetchUserDetails/",{
            params: {
                email:sessionStorage.getItem('email')
            }
        }).then((response) =>{
            console.log('User data :' + response.data)
        })
    },[])

  return (
    <div>

    </div>
  )
}

export default ProfileContainer