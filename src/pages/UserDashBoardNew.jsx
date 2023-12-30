import React, { useState } from 'react';
import "/src/css/sidebar.css";
import { Button } from 'primereact/button';
const UserDashBoardNew = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className='main'>
            <h1>hELLO</h1>
            <div className="sidebar" style={{marginTop:'80px'}}>
              <ul>
                <li><Button className='btn-sidebar' severity="secondary" label="Upload" text /></li>
                <li><Button className='btn-sidebar' severity="secondary" label="Upload History" text /></li>
              </ul>
            </div>
        </div>
    )
}

export default UserDashBoardNew