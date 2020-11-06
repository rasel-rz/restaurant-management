import React from 'react';

function Navbar(){
    return (
        <nav className="navbar navbar-expand navbar-light bg-transparent topbar static-top">
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>
                    <ul className="navbar-nav ml-auto">
                        <form
                            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group mb-3 search_input_group">
                                <input type="text" className="form-control header_search" placeholder="Search here"
                                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <label className="header_search_label" type="button" id="button-addon2"><i
                                            className="fas fa-search fa-sm"></i></label>
                                </div>
                            </div>
                        </form>
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="img-profile rounded-circle"
                                    src="https://icon-library.com/images/user-icon-png/user-icon-png-16.jpg" />
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small pl-2">Admin</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
    )
}

export default Navbar;