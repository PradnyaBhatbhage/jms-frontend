import React from 'react' 
import "/src/css/datagrid.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { Button } from 'primereact/button';
const DataGrid = () => {

    const [visible, setVisible] = useState(false);

    const handleAddButtonClick = (e) => {
        e.preventDefault();
        setVisible(true);
      };

      const [index,setIndex] = useState(null)
    
const [reviewer, setReviewer] = useState({
    reviewersName: "",
    reviewersContactNo: "",
    reviewersEmail:""
});     


const [reviewers, setReviewers] = useState([]);
const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewer({ ...reviewer, [name]: value });

  };

const onSubmit = () => {
    console.log(reviewer);
    setReviewers([...reviewers, reviewer])
    console.log(reviewers);
    setVisible(false);
}



  

    return (
        <div>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Editors Name</th>
                        <th>Contact Info</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reviewers.map((reviewer) => {
                         <tr>
                         <td>{reviewer.reviewersName}</td>
                         <td>{reviewer.reviewersContactNo}</td>
                         <td>{reviewer.reviewersEmail}</td>
                         <td>
                             <span><FontAwesomeIcon style={{color: "red", marginRight:"20px"}} icon={faTrash} /></span>
                             <span><FontAwesomeIcon icon={faPen} /></span>
                         </td>
                         
                     </tr>
                        
                    })}
                   
                   

                </tbody>
            </table>
            <Button onClick={handleAddButtonClick} style={{width: '100px'}} type="add" severity="help" label="Add" icon="pi-pi plus"/>
            <Dialog visible={visible} style={{width:'450px',height:'580px'}} onHide={() => setVisible(false)}>
                
            <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
                <h3>Add Reviewer</h3>
                    <div className="p-field" >
                        <label style={{ fontWeight: "bold", alignSelf:'center' }} htmlFor="reviewersName">
                            Reviewer's Name
                        </label>
                        <InputText
                            className="p-inputtext-l"
                            style={{ marginTop: "10px" }}
                            id="reviewersName"
                            name="reviewersName"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: "bold" }} htmlFor="reviewersContactNo">
                            Reviewer's Contact No
                        </label>
                        <InputText
                            className="p-inputtext-l"
                            style={{ marginTop: "10px" }}
                            id="reviewersContactNo"
                            name="reviewersContactNo"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: "bold" }} htmlFor="reviewersEmail">
                            Reviewer's Email
                        </label>
                        <InputText
                            className="p-inputtext-l"
                            style={{ marginTop: "10px" }}
                            id="reviewersEmail"
                            name="reviewersEmail"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                        <Button onClick={onSubmit} type="submit" label="Submit" />
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default DataGrid