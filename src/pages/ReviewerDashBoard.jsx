import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const ReviewerDashBoard = () => {
  // const [submission, setSubmission] = useState({
  //   title: "",
  //   email: sessionStorage.getItem("email"),
  //   domainName: "",
  //   created: new Date().toLocaleDateString(),
  //   organization: "",
  //   status: "Pending",
  //   reviewer: "",
  //   description: "",
  //   fileId: "",
  //   transactionId: "",
  //   file: {},
  //   fileName: '',
  //   fileExt: '',
  //   domain: '',
  //   reviewers: []
  // });
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

  const onDownload = (data) => {
    console.log(data)
    var arrayBuffer = data.file;
    console.log('Inside onload')
    var blob = new Blob([arrayBuffer], { type: data.fileExt });
    var url = URL.createObjectURL(blob);
    // Create a temporary <a> element
    const tempLink = document.createElement('a');
    tempLink.href = url;
    tempLink.setAttribute('download', data.fileName);
    tempLink.setAttribute('target', '_blank');

    // Append the <a> element to the body
    document.body.appendChild(tempLink);

    // Simulate a click event to download the file
    tempLink.click();

    // Remove the temporary <a> element
    document.body.removeChild(tempLink);
  }


  const downloadIcon = (data) => {

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80px' }}>
        <FontAwesomeIcon color='blue' icon={faFileArrowDown} onClick={() => onDownload(data)} />
      </div>
    )
  }



  useEffect(() => {
    axios.get("http://localhost:8080/submission/fetchByReviewerEmail", {
      params: {
        email: sessionStorage.getItem("email"),
      }
    })
      .then((response) => {
        console.log('email:', sessionStorage.getItem("email"))
        setSubmissions(response.data);
        console.log('Submission Data :', response)
      });
  }, [])



  return (
    <div style={{ marginTop: "20px" }}>
      <h1>Reviewer Dashboard</h1>
      <h2>Welcome {sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")}</h2>

      {/* <h1>Journal Submissions</h1> */}
      <div className="p-grid p-justify-center">
        <div className="p-col-8">

          <DataTable value={submissions}>
            <Column field="applicationNo" header="Title" />
            <Column field="domain.domainName" header="Domain" />
            <Column field="description" header="Description" />
            <Column body={approve} header="Approve" />
            <Column body={reject} header="Reject" />
            <Column body={(data) => downloadIcon(data)} header='Download' />
            {/* <Column field="comment" header="Comment" editor={commentEditor} /> */}

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
