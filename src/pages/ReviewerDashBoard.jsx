import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
const ReviewerDashBoard = () => {
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

  const actionTemplate = (rowData) => (
    <div>
      <button style={{padding:"10px", margin:"5px"}} className="p-button p-button-success" onClick={() => approveSubmission(rowData.id)}>Approve</button>
      <button style={{padding:"10px", margin:"5px"}} className="p-button p-button-danger" onClick={() => rejectSubmission(rowData.id)}>Reject</button>
    </div>
  );

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

  return (
    <div>
      <h2>Welcome {sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")}</h2>

      <h1>Journal Submissions</h1>
      <div className="p-grid p-justify-center">
      <div className="p-col-8">
        <h1>Reviewer Dashboard</h1>
        <DataTable value={submissions}>
          <Column field="title" header="Title" />
          <Column field="domain" header="Domain" />
          <Column field="description" header="Description" />
          <Column body={actionTemplate} header="Actions" />
          <Column field="comment" header="Comment" editor={commentEditor} />

        </DataTable>
      </div>
    </div>
    </div>
  )
}

export default ReviewerDashBoard
