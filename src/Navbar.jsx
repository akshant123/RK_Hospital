import React from 'react';
import  {NavLink} from "react-router-dom";
import logo from '../src/images/RKLOGO.jpg';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 col-sm-5 ">
                            <p>Welcome to a Professional Health Care</p>
                        </div>

                        <div className="col-md-8 col-sm-7 text-align-right">
                            <span className="phone-icon m-3"><i className="fa fa-phone"></i> 010-060-0160</span>
                            <span className="date-icon m-3"><i className="fa fa-calendar-plus-o"></i> 6:00 AM - 10:00 PM (Mon-Fri)</span>
                            <span className="email-icon m-3"><i className="fa fa-envelope-o"></i> <a href="#">info@company.com</a></span>
                        </div>

                    </div>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" width="30" height="24" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink activeClassName='menu_active' exact className="nav-link" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle "  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" to="/about">History</NavLink>
                                    <NavLink className="dropdown-item" to="/about">Promoters</NavLink>

                                    <NavLink className="dropdown-item" to="/about">List of Insurance Panels</NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Facilities
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Orthopedic/Joint Replacement</a>
                                    <a className="dropdown-item" href="#">Gynecology</a>

                                    <a className="dropdown-item" href="#">General Surgery</a>
                                    <a className="dropdown-item" href="#">Eye Department</a>
                                    <a className="dropdown-item" href="#">General Medicine</a>

                                    <a className="dropdown-item" href="#">Nephrology</a>
                                    <a className="dropdown-item" href="#">COVID- Treatment & Vaccination</a>
                                    <a className="dropdown-item" href="#">Physiotherapy</a>

                                    <a className="dropdown-item" href="#">Computerised Laboratory</a>
                                    <a className="dropdown-item" href="#">Ultra Sound</a>
                                    <a className="dropdown-item" href="#">Echo-Cardiogram</a>

                                    <a className="dropdown-item" href="#">Digital X-Ray</a>
                                    <a className="dropdown-item" href="#">ICU / OPD</a>
                                    <a className="dropdown-item" href="#">Dental</a>

                                    <a className="dropdown-item" href="#">Skin & V.D.</a>
                                    <a className="dropdown-item" href="#">Endoscopy/laproscopy</a>
                                    <a className="dropdown-item" href="#">Color Doppler</a>
                                    <a className="dropdown-item" href="#">24 Hours Dialysis</a>

                                    <a className="dropdown-item" href="#">Pharmacy</a>
                                </div>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='menu_active' exact className="nav-link" to="/doctor">Doctors</NavLink>
                                
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='menu_active' exact className="nav-link" to="/photo-gallery">PhotoGallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Media Gallery</a>
                            </li>
                            <li class="appointment-btn"><a href="#appointment">Make an appointment</a></li>
                        </ul>

                    </div>
                </div>
            </nav>



        </>
    )









};

export default Navbar;