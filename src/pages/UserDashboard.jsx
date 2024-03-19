import { useState, useEffect } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "/src/css/userdashboard.css";
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';
import axios from "axios";
import { Dropdown } from 'primereact/dropdown';
import DataGrid from "../components/DataGrid";

function Reviewer(name, contact, email) {
  this.name = name;
  this.contact = contact;
  this.email = email;
}


const UserDashboard = () => {

  const [visible, setVisible] = useState(false);
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

  const fetchData = () => {
    axios.get("http://localhost:8080/submission/fetchByEmail", {
      params: {
        email: sessionStorage.getItem("email"),
      }

    }).then((data) => {
      console.log(data)
      setSubmissionData(data.data);
      console.log(submissionData)
    })
  }

  useEffect(() => {
    // Call fetchData when the component mounts
    fetchData();
    console.log(submissionData)
  }, []);



  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmission({ ...submission, [name]: value });
  };

  const handleSubmit = (e) => {
    const form = new FormData();
    submission.reviewers = reviewersList;
    console.log('Reviewers List', submission.reviewers)
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
          alert("Manuscript Uploaded Successfully");
          console.log(response);
        });
    }
  };



  const columns = [
    { field: 'title', header: 'Title' },
    { field: 'organization', header: 'Organization' },
    { field: 'reviewersName', header: 'Reviewers Name' },
    { field: 'description', header: 'Description' }
  ];

  const [domainNames, setDomainNames] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/domain/findAll").then((response) => {
      setDomainNames(response.data);
      console.log(domainNames);
      setCount(100)
    })
  }, [count])


  const handleGridData = (data) => {
    setReviewersList([...reviewersList, data])
    console.log('Inside Handle Grid Data', data);
    console.log('Data From Grid', reviewersList);
  }


  return (
    <div >
      <h2>
        Welcome{" "}
        {sessionStorage.getItem("firstName") +
          " " +
          sessionStorage.getItem("lastName")}
      </h2>
      <TabView style={{ marginTop: "90px", paddingTop: "0px" }}>
        <TabPanel header="Profile">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TabPanel>
        <TabPanel header="Upload Manuscript">
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
                      Domain/Subject Area
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
                      Abstract
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
                    <label htmlFor="role">Attach Manuscript</label>
                    <br />
                    <input
                      style={{ marginLeft: "90px", marginTop: "10px", display: 'flex', justifyContent: 'center' }}
                      type="file"
                      // accept=".pdf, .doc"
                      accept=".doc"
                      onChange={(event) => {
                        setSelectedFile(event.target.files[0]);
                      }}
                    />
                  </div>

                </div>
                <div>
                  <DataGrid onGridDataChange={(data) => handleGridData(data)} />
                </div>
              </div>
              <div className="p-field" style={{ width: '100%' }}>
                <Button onClick={handleSubmit} type="submit" label="Submit" />
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel header="Status Of Manuscript">
          <div className="card">
            <DataTable value={submissionData} tableStyle={{ minWidth: '50rem' }}>

              {columns.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} />
              ))}
            </DataTable>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default UserDashboard;
