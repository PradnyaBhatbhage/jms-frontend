import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const ReviewerDashBoard = () => {
  const [submissions, setSubmissions] = useState([]);

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

  const downloadIcon = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80px' }}>
        <FontAwesomeIcon color='blue' icon={faFileArrowDown} />
      </div>
    )
  }



  useEffect(() => {
    axios.get("http://localhost:8080/submission/fetchBySubmissionsByEmail", {
      params: {
        email: sessionStorage.getItem("email"),
      }
    })
      .then((response) => {
        console.log('email:', sessionStorage.getItem("email"))
        setSubmissions(response.data);
        console.log(submissions)
      });
  }, [])



  const approveSubmission = (submissionId) => {
    // Add your approval logic here
    alert(`Submission ${submissionId} has been approved.`);
  };

  const rejectSubmission = (submissionId) => {
    // Add your rejection logic here
    alert(`Submission ${submissionId} has been rejected.`);
  };

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
    <div style={{ marginTop: "20px" }}>
      <h1>Reviewer Dashboard</h1>
      <h2>Welcome {sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")}</h2>

      {/* <h1>Journal Submissions</h1> */}
      <div className="p-grid p-justify-center">
        <div className="p-col-8">

          <DataTable value={submissions}>
            <Column field="title" header="Title" />
            <Column field="domain" header="Domain" />
            <Column field="description" header="Description" />
            <Column body={approve} header="Approve" />
            <Column body={reject} header="Reject" />
            <Column body={downloadIcon} header='Download' />
            <Column field="comment" header="Comment" editor={commentEditor} />

            <Column header="Date of Acceptance"></Column>
            <Column header="Date of Submission"></Column>
            <Column header="Upload File"> </Column>

            {/* <Column field="button" header="Submit"></Column> */}

          </DataTable>
        </div>
      </div>
    </div>
  )
}

export default ReviewerDashBoard
