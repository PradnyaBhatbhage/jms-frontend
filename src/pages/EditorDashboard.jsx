import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { faFileArrowDown, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
const EditorDashboard = () => {

  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      title: 'Research Paper 1',
      domain: 'Science',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Research Paper 2',
      domain: 'Technology',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Research Paper 3',
      domain: 'Medicine',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ]);

  const approveSubmission = (submissionId) => {
    // Add your approval logic here
    alert(`Submission ${submissionId} has been approved.`);
  };

  const rejectSubmission = (submissionId) => {
    // Add your rejection logic here
    alert(`Submission ${submissionId} has been rejected.`);
  };

  const onDownloadPaper = () => {

  }

  const approve = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px' }}>
      <FontAwesomeIcon color='green' icon={faThumbsUp} />
      </div>
    )
  }

  const reject = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px' }}>
        <FontAwesomeIcon color='red' icon={faThumbsDown} />
      </div>
    )
  }

  const onCommentChange = (event, rowData) => {
    const updatedSubmissions = [...submissions];
    const index = updatedSubmissions.findIndex((s) => s.id === rowData.id);
    if (index !== -1) {
      updatedSubmissions[index].comment = event.target.value;
      setSubmissions(updatedSubmissions);
    }
  };

  const commentEditor = (rowData) => {
    return (
      <InputText
        value={rowData.comment}
        onChange={(e) => onCommentChange(e, rowData)}
        style={{ width: '100%' }}
      />
    );
  };

  const downloadIcon = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80px' }}>
        <FontAwesomeIcon color='blue' icon={faFileArrowDown} />
      </div>
    )
  }

  const onLogout = () =>{
    navigate('/')
  }

  return (
    <div style={{ marginTop: '25px' }}>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}} >
      
      <h2 style={{display:'block', marginLeft:'25px', marginRight:'auto'}}>Welcome {sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")}</h2>
      <Button style={{display:'block', marginLeft:'auto', marginRight:'20px'}} onClick={onLogout} label='Logout' outlined severity='danger'/>
      </div>
      <h1>Journal Submissions</h1>
      <div className="p-grid p-justify-center">
        <div className="p-col-8">
          <h1>Editor's Dashboard</h1>
          <DataTable value={submissions}>
            <Column field="title" header="Title" />
            <Column field="domain" header="Domain" />
            <Column field="description" header="Description" />
            <Column body={approve} header="Approve" />
            <Column body={reject} header="Reject" />
            <Column body={downloadIcon} header="Download" />
            <Column field="comment" header="Comment" editor={commentEditor} />

          </DataTable>
        </div>
      </div>
    </div>
  )
}


export default EditorDashboard;
