import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StatusOfManusscript = () => {

    const [gridData,setGridData] = useState();

    const fetchData = () => {
        axios.get("http://localhost:8080/submission/fetchByEmail", {
          params: {
            email: sessionStorage.getItem("email"),
          }
    
        }).then((data) => {
          console.log('Submission data:' + data)
          setGridData(data.data);
          console.log('Submission data:' + gridData)
        })
      }
    
      useEffect(() => {
        // Call fetchData when the component mounts
        fetchData();
      }, []);

  return (
    <div>Status of Manuscript
        <div>

        </div>
    </div>
  )
}

export default StatusOfManusscript