import { useState} from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import SubmissionDataTable from "../components/SubmissionDataTable";
import "/src/css/userdashboard.css";
import axios from "axios";
const UserDashboard = () => {
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

  const fetchData = () =>{
    axios.get("http://localhost:8080/submission/getAll",{
      params:{
        email:sessionStorage.getItem("email"),
      }

    }).then((data) =>{
      setSubmissionData(data);
      console.log(submissionData)
    })
  }

  

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

  return (
    <div>
      <h2>
        Welcome{" "}
        {sessionStorage.getItem("firstName") +
          " " +
          sessionStorage.getItem("lastName")}
      </h2>
      <TabView>
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
        <TabPanel header="Upload Journal">
          <div className="upload-div">
            <form onSubmit={handleSubmit}>
              <h2>Upload Journal</h2>
              <div className="p-fluid">
                <div className="p-field">
                  <label style={{ fontWeight: "bold" }} htmlFor="title">
                    Title
                  </label>
                  <InputText
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
                  <InputText
                    style={{ marginTop: "10px" }}
                    id="domainName"
                    name="domainName"
                    value={submission.domainName}
                    onChange={handleChange}
                  />
                </div>

                <div className="p-field">
                  <label style={{ fontWeight: "bold" }} htmlFor="domainName">
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
                <div className="p-field">
                  <label style={{ fontWeight: "bold" }} htmlFor="role">
                    Reviewer
                  </label>
                  <Dropdown
                    style={{ marginTop: "10px" }}
                    id="reviewer"
                    name="reviewer"
                    value={submission.reviewer}
                    options={UserDashboard.reviewers}
                    onChange={handleChange}
                    placeholder="Select a reviewer"
                  />
                </div>
                <div
                  style={{ fontWeight: "bold" }}
                  className="card flex justify-content-center"
                >
                  <label htmlFor="role">Upload Journal</label>
                  <br />
                  <input
                    style={{ marginLeft: "90px", marginTop: "10px" }}
                    type="file"
                    accept=".pdf"
                    onChange={(event) => {
                      setSelectedFile(event.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <div className="p-field">
                <Button type="submit" label="Submit" />
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel header="History">
          <div>
           <table>
            <thead>
              <th>Title</th>
              <th>Domain Name</th>
              <th>Status</th>
              <th>Created</th>
            </thead>
            <tbody>
              <SubmissionDataTable/>
            </tbody>
           </table>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default UserDashboard;
