import React from 'react';
import DashboardBody from './DashboardBody';
import Navbar from './Navbar';

function Dashboard(){
    return (
        <div id="content">
            <Navbar />
            <DashboardBody />
        </div>
    )
}

export default Dashboard;