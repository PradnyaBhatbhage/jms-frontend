import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'

const DialogComponent = (visible) => {

    const [isVisible, setIsVisible] = useState(visible)


    return (
        
            <Dialog isVisible={isVisible} style={{width:'50vw',height:'350px'}} onHide={() => setIsVisible(false)}>
                
            </Dialog>
    )
}

export default DialogComponent