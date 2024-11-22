import { blue } from '@mui/material/colors';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
    const location = useLocation();
    const {displayName,email} = location.state || {};

    return (
        <div className='main1'>
            <div className="main">
                <div className="div1">
                    <div className="form">
                        <div className="txt">
                            <center>
                            <h1 style={{alignItems:"center"}}>Welcome, {displayName}!</h1>
                            <p>Your Email : {email}</p>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
