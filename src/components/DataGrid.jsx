import React from 'react' 
import "/src/css/datagrid.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import DialogComponent from './DialogComponent';
import { useState } from 'react';
import { Button } from 'primereact/button';
const DataGrid = () => {

    const [visible, setVisible] = useState(false);

    const onClickAddButtton = () =>{
        if(!visible){
            setVisible(true);
        }
    } 

    return (
        <div>
            <Button style={{width: '100px'}} type="add" severity="help" label="Add" icon="pi-pi plus"/>
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
            <DialogComponent visible={visible}/>
        </div>
    )
}

export default DataGrid