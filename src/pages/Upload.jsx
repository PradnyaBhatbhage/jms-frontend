import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import DataGrid from '../components/DataGrid';
import { Button } from 'primereact/button';
import axios from 'axios';
const Upload = () => {


  const [reviewersList, setReviewersList] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState();

  const [submission, setSubmission] = useState({
    title: "",
    email: sessionStorage.getItem("email"),
    domainName: "",
    accountNo: sessionStorage.getItem("accountNo"),
    created: new Date().toLocaleDateString(),
    organization: "",
    status: "Pending",
    reviewer: "",
    description: "",
    fileId: "",
    editorsName: "",
    editorsContact: "",
    editorsEmail: "",
    domain: selectedDomain,
    reviewers: [reviewersList]
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmission({ ...submission, [name]: value });
  };

  const handleSubmit = (e) => {
    const form = new FormData();
    form.append("file", selectedFile);
    console.log(form);
    if (submission.title === "" && submission.domainName === "") {
      alert("Please Fill All the Fields");
    } else {
      e.preventDefault();

      axios
        .post("http://localhost:8080/journal/upload", form, {
          header: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          submission.fileId = response.data.id;
          console.log(submission.fileId);
        });
      console.log(submission);
      axios
        .post("http://localhost:8080/submission/submit", submission, {
          header: { "Content-Type": "application/json" },
        })
        .then((response) => {
          alert("Journal Uploaded Successfully");
          console.log(response);
        });
    }
  };

  const [domainNames, setDomainNames] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/domain/findAll").then((response) => {
      setDomainNames(response.data);
      console.log(domainNames);
      setCount(100)
    })
  }, [count])

  return (
    <div className="upload-div">
      <form>
        <h2>Upload Manuscript</h2>

        <div className="p-fluid">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="p-field">
              <label style={{ fontWeight: "bold" }} htmlFor="title">
                Title
              </label>
              <InputText
                className="p-inputtext-l"
                style={{ marginTop: "10px" }}
                id="title"
                name="title"
                value={submission.title}
                onChange={handleChange}
              />
            </div>

            <div className="p-field">
              <label style={{ fontWeight: "bold" }} htmlFor="domainName">
                Domain Name
              </label>
              <div className="card flex justify-content-center" style={{ marginTop: '10px' }}>
                <Dropdown style={{ height: '39px.59px', color: 'black' }} value={selectedDomain} onChange={(e) => setSelectedDomain(e.value)} options={domainNames} optionLabel="domainName"
                  placeholder="Select a Domain" className=" w-full" />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontWeight: "bold" }} htmlFor="organization">
                Organization
              </label>
              <InputText
                className="p-inputtext-l"
                style={{ marginTop: "10px" }}
                id="organization"
                name="organization"
                value={submission.organization}
                onChange={handleChange}
              />
            </div>
            <div className="p-field">
              <label style={{ fontWeight: "bold" }} htmlFor="description">
                Description
              </label>
              <InputText
                className="p-inputtext-l"
                style={{ marginTop: "10px" }}
                id="description"
                name="description"
                value={submission.description}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="p-field">
              <label style={{ fontWeight: "bold" }} htmlFor="reviewersName">
                Editor's Name
              </label>
              <InputText
                className="p-inputtext-l"
                style={{ marginTop: "10px" }}
                id="editorsName"
                name="editorsName"
                value={submission.editorsName}
                onChange={handleChange}
              />
            </div>
            <div className="p-field">
              <label style={{ fontWeight: "bold" }} htmlFor="reviewersName">
                Editor's Contact
              </label>
              <InputText
                className="p-inputtext-l"
                style={{ marginTop: "10px" }}
                id="editorsName"
                name="editorsName"
                value={submission.editorsContact}
                onChange={handleChange}
              />
            </div>
          </div> */}
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* <div className="p-field">
              <label style={{ fontWeight: "bold" }} htmlFor="reviewersName">
                Editor's Email
              </label>
              <InputText
                className="p-inputtext-l"
                style={{ marginTop: "10px" }}
                id="editorsName"
                name="editorsName"
                value={submission.editorsEmail}
                onChange={handleChange}
              />
            </div> */}
            <div
              style={{ fontWeight: "bold" }}
              className="p-field"
            >
              <label htmlFor="role">Upload Manuscript</label>
              <br />
              <input
                style={{ marginLeft: "90px", marginTop: "10px", display: 'flex', justifyContent: 'center' }}
                type="file"
                accept=".pdf, .doc"
                onChange={(event) => {
                  setSelectedFile(event.target.files[0]);
                }}
              />
            </div>

          </div>
          <div>
            <DataGrid />
          </div>
        </div>
        <div className="p-field">
          <Button onClick={handleSubmit} type="submit" label="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Upload