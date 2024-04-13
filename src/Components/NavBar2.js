import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar2() {
    const [activeLink, setActiveLink] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();

    // Update active link based on current location
    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    // Function to handle toggling dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Toggle between black and white background color
        if (!isDarkMode) {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    };

    return (
        <div style={{ marginTop: "10px" }}> {/* Added margin-top */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Removed toggle theme button */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                                    to={`/`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === "/Entertainment" ? "active" : ""}`}
                                    to={`/Entertainment`}
                                >
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === "/Technology" ? "active" : ""}`}
                                    to={`/Technology`}
                                >
                                    Technology
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === "/Sports" ? "active" : ""}`}
                                    to={`/Sports`}
                                >
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === "/Business" ? "active" : ""}`}
                                    to={`/Business`}
                                >
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === "/Health" ? "active" : ""}`}
                                    to={`/Health`}
                                >
                                    Health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === "/Science" ? "active" : ""}`}
                                    to={`/Science`}
                                >
                                    Science
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Add dark/light mode indicator */}
                    <div 
                        className="btn btn-primary" 
                        style={{ cursor: "pointer" }}
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? "Dark Mode" : "Light Mode"}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar2;
