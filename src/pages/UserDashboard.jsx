import { useState, useEffect } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "/src/css/userdashboard.css";
import axios from "axios";
import { Dropdown } from 'primereact/dropdown';
import DataGrid from "../components/DataGrid";
import ProfileContainer from "../components/ProfileContainer";
import StatusOfManusscript from "../components/StatusOfManusscript";

function Reviewer(name, contact, email) {
  this.name = name;
  this.contact = contact;
  this.email = email;
}


const UserDashboard = () => {


  const [reviewersList, setReviewersList] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState({
    id: '',
    domainName: ''
  });

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
    transactionId: "",
    file: {},
    fileName: '',
    fileExt: '',
    domain: selectedDomain,
    reviewers: reviewersList
  });



  const [submissionData, setSubmissionData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/submission/getAll", {
  //       params: {
  //         email: sessionStorage.getItem("email"),
  //       },
  //     })
  //     .then((data) => {
  //       setSubmissionData(data);
  //       console.log(submissionData)
  //     });
  // }, [submissionData]);

  const MAX_FILE_SIZE_MB = 20;

  const [selectedFile, setSelectedFile] = useState(null);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmission({ ...submission, [name]: value });
  };

  const handleDomainChange = (value) => {
    selectedDomain.id = value.id;
    selectedDomain.domainName = value.domainName;
  }

  const handleSubmit = (e) => {
    console.log("Entered Handle Sumbit!!!")
    if (submission.title === "" && submission.domainName === "") {
      alert("Please Fill All the Fields");
    } else {
      e.preventDefault();
      console.log(submission);
      axios
        .post("http://localhost:8080/submission/submit", submission, {
          header: { "Content-Type": "application/json" },
        })
        .then((response) => {
          alert("Manuscript Uploaded Successfully");
          console.log(response);
        });
    }
  };


  const [domainNames, setDomainNames] = useState([]);
  const [count, setCount] = useState(0);
  const otherDomain = {
    id: 0,
    domainName: 'Other'
  }

  const [isDisabled, setIsDisabled] = useState(true)



  useEffect(() => {
    axios.get("http://localhost:8080/domain/findAll").then((response) => {
      const updatedDomainNames = [...response.data, otherDomain];
      setDomainNames(updatedDomainNames);
      console.log(updatedDomainNames);
    })
  }, [count])

  const handleGridData = (data) => {
    setReviewersList([...reviewersList, data])
    console.log('Inside Handle Grid Data', data);
    console.log('Data From Grid', reviewersList);
  }

  const domainName = '';

  const onDropDownChangeValue = (value) => {
    if (value.domainName === 'Other') {
      setIsDisabled(false)
    } else {
      console.log(value)
      selectedDomain.id = value.id;
      selectedDomain.domainName = value.domainName;
      console.log(selectedDomain)
      setIsDisabled(true)
    }
    setSelectedDomain(value);
  }

  const onFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert('File should be less than ' + MAX_FILE_SIZE_MB + 'mb')
    } else {
      let { name } = file;
      let ext = name.split(".").reverse()[0];
      const reader = new FileReader();
      reader.onload = () => {
        let { result } = reader;
        let index = result.indexOf("base64") + 7;
        let data = result.slice(index);
        submission.file  = data;
        submission.fileExt = ext;
        submission.fileName = name;
      };
      reader.readAsDataURL(file);
    }
  }

  const PDF_WARNING = 'Only doc file can be selected.'


  return (
    <div >
      <h2 style={{ marginTop: "20px" }}>
        Welcome{" "}
        {sessionStorage.getItem("firstName") +
          " " +
          sessionStorage.getItem("lastName")}
      </h2>
      <TabView style={{ marginTop: "60px", paddingTop: "0px" }}>
        <TabPanel header="Profile">
          <ProfileContainer />
        </TabPanel>
        <TabPanel header="Upload Manuscript">
          <div className="upload-div">
            <form>
              <h2>Upload Manuscript</h2>

              <div className="p-fluid">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div className="p-field">
                    <label style={{ fontWeight: "bold" }} htmlFor="title">
                      Title Of Paper
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
                      Domain/Subject Area
                    </label>
                    <div className="card flex justify-content-center" style={{ marginTop: '10px' }}>
                      <Dropdown style={{ height: '39px.59px', color: 'black' }} value={selectedDomain} onChange={(e) => onDropDownChangeValue(e.value)} options={domainNames} optionLabel="domainName"
                        placeholder="Select a Domain" className=" w-full" />
                    </div>
                  </div>
                </div>
                <div className="p-field" hidden={isDisabled}>
                  <label style={{ fontWeight: "bold" }} htmlFor="domainName">
                    Other Domain/Subject Area
                  </label>
                  <InputText
                    className="p-inputtext-l"
                    style={{ marginTop: "10px" }}
                    id="domain"
                    name="domain"
                    value={domainName}
                    onChange={handleChange}
                  />
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
                      Abstract
                    </label>
                    <InputText
                      className="p-inputtext-l"
                      style={{ marginTop: "10px" }}
                      id="description"
                      name="description"
                      maxLength={200}
                      value={submission.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>

                  <div
                    style={{ fontWeight: "bold" }}
                    className="p-field"
                  >
                    <label htmlFor="role">Attach Manuscript</label><br />
                    <label style={{ color: 'red', fontSize: '12px' }}>({PDF_WARNING})</label>
                    <br />
                    <input
                      style={{ marginLeft: "90px", marginTop: "10px", display: 'flex', justifyContent: 'center' }}
                      type="file"

                      // accept=".pdf, .doc"
                      accept=".doc"
                      onChange={onFileUpload}
                    />
                  </div>

                </div>
                <div style={{ marginTop: "10px" }}>
                  <DataGrid onGridDataChange={(data) => handleGridData(data)} />
                </div>
              </div>


              <div>
                <h5 style={{ textAlign: 'center', marginTop: '20px' }} >Payment Details</h5>
                <div style={{ fontWeight: "bold", marginTop: "20px", display: 'flex', flexDirection: 'row' }}>

                  <div className="p-field">
                    <label>Transaction Number</label>
                    <InputText
                      style={{ marginTop: "10px", marginLeft: "10px" }}
                      className="p-inputtext-l"
                      id="transactionid"
                      name="transactionId"
                      value={submission.transactionId}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-field">
                    <label style={{ marginTop: "10px" }}>Upload Payment Receipt</label>
                    <input style={{ marginLeft: "10px", marginTop: "10px", marginBottom: "20px" }} type="file"></input>
                  </div>


                </div>
              </div>


              <div className="p-field" style={{ width: '100%' }}>
                <Button onClick={handleSubmit} type="submit" label="Submit" />
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel header="Status Of Manuscript">
          <StatusOfManusscript/>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default UserDashboard;
