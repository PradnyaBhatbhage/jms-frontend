import React, { useState } from 'react';
import "/src/css/sidebar.css";
import { Button } from 'primereact/button';
import Upload from './Upload';
const UserDashBoardNew = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className='main' style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
           
            <div className="sidebar" style={{marginTop:'236px'}}>
              <ul>
                <li><Button className='btn-sidebar' severity="secondary" label="Upload" text /></li>
                <li><Button className='btn-sidebar' severity="secondary" label="Upload History" text /></li>
              </ul>
            </div>
            <div className='content'>
              <Upload/>
            </div>
        </div>
    )
}

export default UserDashBoardNew