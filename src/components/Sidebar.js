import React, { Component } from 'react'

class Sidebar extends Component {

    render(){
        return (
            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center " href="index.html">
                <div className="sidebar-brand-icon">
                    <img src="https://static.thenounproject.com/png/33767-200.png" />
                </div>
                <div className="sidebar-brand-text mx-3 text-center">Restaurant</div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <a className="nav-link" href="data.html">
                    <i className="mdi mdi-view-dashboard" aria-hidden="true"></i>
                    <span>Dashboard</span></a>
            </li>

            <li className="nav-item mt-auto">
                <a className="nav-link" href="login.html">
                    <i className="mdi mdi-logout"></i>
                    <span>Log Out</span></a>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>)
    }
}

export default Sidebar;