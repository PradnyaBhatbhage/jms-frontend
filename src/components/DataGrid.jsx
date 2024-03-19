import React, { useRef } from 'react'
import "/src/css/datagrid.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPenToSquare, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
const DataGrid = (props) => {

    const [visible, setVisible] = useState(false);

    const handleAddButtonClick = (e) => {
        e.preventDefault();
        setVisible(true);
    };

    let count = 0;

    const [reviewer, setReviewer] = useState({
        reviewersName: "",
        reviewersContact: "",
        reviewersEmail: "",
        reviewersDesignation: "",
        reviewersOrganisation: ""
    });


    const [reviewers, setReviewers] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewer({ ...reviewer, [name]: value });

    };

    const toast = useRef(null);

    const cancel = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Maximum Number of Editors has been Selected.',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'cancel',
        });
    };



    const onSubmit = () => {
        if (count > 3) {
            confirm1();
        } else {
            setReviewers([...reviewers, reviewer])
            setVisible(false);
            console.log("Clicked On Submit")
            props.onGridDataChange(reviewer);
            count++;
        }

    }

    const editIcon = () => {
        return (
            <FontAwesomeIcon color='blue' icon={faPenToSquare} />
        )
    }

    const deleteIcon = () => {
        return (
            <FontAwesomeIcon color='red' icon={faTrashCan} />
        )
    }

    const header = () => {
        return (
            <div className='flex justify-content-between' >
                <Button onClick={handleAddButtonClick} outlined type="button" label="Add Reviewer" icon="pi-pi plus" />
            </div>

        )
    }





    return (
        <div>

            <DataTable value={reviewers} tableStyle={{ minWidth: '50rem' }} header={header}>
                <Column field="reviewersName" header="Name"></Column>
                <Column field="reviewersEmail" header="Email"></Column>
                <Column field="reviewersContact" header="Contact"></Column>

                <Column field="reviewersDesignation" header="Designation"></Column>
                <Column field="reviewersOrganisation" header="Organisation"></Column>

                <Column field="delete" header="Delete" body={deleteIcon}></Column>
                <Column field="edit" header="Edit" body={editIcon}></Column>

            </DataTable>

            <Dialog visible={visible} style={{ width: '450px', height: '580px' }} onHide={() => setVisible(false)}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h3>Add Reviewer</h3>
                    <div className="p-field" >
                        <label style={{ fontWeight: "bold", alignSelf: 'center' }} htmlFor="reviewersName">
                            Name
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
                        <label style={{ fontWeight: "bold" }} htmlFor="reviewersEmail">
                            Email
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
                        <label style={{ fontWeight: "bold" }} htmlFor="reviewersContact">
                            Contact Number
                        </label>
                        <InputText
                            className="p-inputtext-l"
                            style={{ marginTop: "10px" }}
                            id="reviewersContact"
                            name="reviewersContact"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: "bold" }} htmlFor="reviewersDesignation">
                            Designation
                        </label>
                        <InputText
                            className="p-inputtext-l"
                            style={{ marginTop: "10px" }}
                            id="reviewersDesignation"
                            name="reviewersDesignation"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: "bold" }} htmlFor="reviewersOrganisation">
                            Organisation
                        </label>
                        <InputText
                            className="p-inputtext-l"
                            style={{ marginTop: "10px" }}
                            id="reviewersOrganisation"
                            name="reviewersOrganisation"
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