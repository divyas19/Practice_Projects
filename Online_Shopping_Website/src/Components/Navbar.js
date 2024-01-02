import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
export default function Navbar() {
    return (
        <div className="navbar-parent">
            <div className="navbar-parent-child1">
                <h1>E-Buy</h1>
            </div>
            <div className="navbar-parent-child2">
                <div className="link-1">
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? "black" : "grey",

                            textDecoration: "none",
                        })}
                        to="/"
                    >
                        Home
                    </NavLink>
                </div>
                <div className="link-1">
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? "black" : "grey",

                            textDecoration: "none",
                        })}
                        to="/products"
                    >
                        Products
                    </NavLink>
                </div>
                <div className="link-1">
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? "black" : "grey",

                            textDecoration: "none",
                        })}
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
            <div className="navbar-parent-child3">
                <div>
                    <span
                        onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = "#f0f0f0")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "transparent")
                        }
                    >
                        <NavLink
                            style={({ isActive }) => ({
                                background: isActive ? "#f0f0f0" : "",
                                textDecoration: "none",
                                fontSize: "18px",
                                color: "black",
                                padding: "10px",
                            })}
                            to="/login"
                        >
                            <i className="fa-solid fa-right-to-bracket"></i> Login
                        </NavLink>
                    </span>
                </div>
                <div>
                    <span
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = "#f0f0f0";
                        }}
                        onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "transparent")
                        }
                    >
                        <NavLink
                            style={({ isActive }) => ({
                                background: isActive ? "#f0f0f0" : "",
                                textDecoration: "none",
                                fontSize: "18px",
                                color: "black",
                                padding: "10px",
                            })}
                            to="/cart"
                        >
                            <i className="fa-solid fa-cart-shopping"></i> Cart(1)
                        </NavLink>
                    </span>
                </div>
            </div>
        </div>
    );
}
