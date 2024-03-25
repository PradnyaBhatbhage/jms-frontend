import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const StatusOfManusscript = () => {

  const [gridData, setGridData] = useState([]);

  // const [gridData, setGridData] = useState({
  //   applicationNo:'',
  //   status:'',
  //   title:'',
  //   organization:'',
  //   domain:''
  // });

  const fetchData = () => {
    axios.get("http://localhost:8080/submission/fetchBySubmissionsByEmail", {
      params: {
        email: sessionStorage.getItem("email"),
      }

    }).then((response) => {
     
      setGridData(response.data)
    })
  }

  useEffect(() => {
    // Call fetchData when the component mounts
    fetchData();
  }, []);

  const columns = [
    { field: 'applicationNo', header: 'Application No' },
    { field: 'title', header: 'Title' },
    { field: 'organization', header: 'Organization' },
    { field: 'status', header: 'Status' },
    { field: 'domain.domainName', header: 'Domain' }
  ];


  return (
    <div><h3>Status of Manuscript</h3>
      <div>
        <DataTable value={gridData} tableStyle={{ minWidth: '50rem' }}>
          {columns.map((col, i) => (
            <Column key={col.field} field={col.field} header={col.header} />
          ))}

        </DataTable>
      </div>
    </div>
  )
}

export default StatusOfManusscript