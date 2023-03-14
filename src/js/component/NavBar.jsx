import React from "react";
import Home from "./home.jsx";;

const NavBar = () => {
    return (
        
                <nav className="navbar navbar-dark bg-dark fixed-top p-0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Bootsrap Work</a>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                            <nav className="navbar navbar-expand-lg bg-dark-tertiary ">

                                <div className="container-fluid">
                                    <a className="navbar-brand" href="#"></a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon text-white">☰</span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                               
                                                <a className="nav-link active text-secondary" aria-current="page" href="#">Home</a>
                                                
                                            </li>
                                            <li className="nav-item ">
                                                <a className="nav-link text-secondary" href="#">About</a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="nav-link text-secondary" href="#">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-secondary" href="#">Contact</a>
                                            </li>
                                            <li className="nav-item dropdown bg-secondary">


                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>



                        </div>


                    </div>
                </nav>
            );
        };
 

export default NavBar;