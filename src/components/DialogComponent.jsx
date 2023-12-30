import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'

const DialogComponent = (visible) => {

    const [isVisible, setIsVisible] = useState(visible)

    return (
        <div>
            <Dialog isVisible={isVisible}>
                <FormData>
                    <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: "bold" }} htmlFor="organization">
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
                            Reviewers Emailw
                        </label>
                        <InputText
                            className="p-inputtext-l"
                            style={{ marginTop: "10px" }}
                            id="organization"
                            name="organization"
                        />
                    </div>
                </FormData>
            </Dialog>
        </div>
    )
}

export default DialogComponent