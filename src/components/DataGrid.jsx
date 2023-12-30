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
                    <tr>
                        <td>Test</td>
                        <td>324545634</td>
                        <td>test@gmail.com</td>
                        <td>
                            <span><FontAwesomeIcon style={{color: "red", marginRight:"20px"}} icon={faTrash} /></span>
                            <span><FontAwesomeIcon icon={faPen} /></span>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>Test</td>
                        <td>324545634</td>
                        <td>test@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Test</td>
                        <td>324545634</td>
                        <td>test@gmail.com</td>
                    </tr>

                </tbody>
            </table>
            <Button onClick={handleAddButtonClick} style={{width: '100px'}} type="add" severity="help" label="Add" icon="pi-pi plus"/>
            <Dialog visible={visible} style={{width:'450px',height:'580px'}} onHide={() => setVisible(false)}>
                
            <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
                <h3>Add Reviewer</h3>
                    <div className="p-field" >
                        <label style={{ fontWeight: "bold", alignSelf:'center' }} htmlFor="organization">
                            Reviewers Name
                        </label>
                        <InputText
                            className="p-inputtext-l"
                            style={{ marginTop: "10px" }}
                            id="organization"
                            name="organization"
                        />
                    </div>
                    <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: "bold" }} htmlFor="organization">
                            Reviewers Contact No
                        </label>
                        <InputText
                            className="p-inputtext-l"
                            style={{ marginTop: "10px" }}
                            id="organization"
                            name="organization"
                        />
                    </div>
                    <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: "bold" }} htmlFor="organization">
                            Reviewers Email
                        </label>
                        <InputText
                            className="p-inputtext-l"
                            style={{ marginTop: "10px" }}
                            id="organization"
                            name="organization"
                        />
                    </div>
                    <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                        <Button type="submit" label="Submit" />
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default DataGrid