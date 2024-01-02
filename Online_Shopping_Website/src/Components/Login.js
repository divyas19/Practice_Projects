import React from "react";
import "./Login.css";
import "@fortawesome/fontawesome-free/css/all.css";
export default function Login() {
    return (
        <div className="main-login-container">
            <form className="login-subcontainer">
                <h5 className="login-child1">Sign In</h5>

                <input
                    className="login-child2"
                    type="text"
                    placeholder="Email address"
                />
                <input className="login-child3" type="text" placeholder="Password" />
                <div className="login-child4">
                    <input type="checkbox" />
                    Remember password
                </div>
                <button className="login-child5">SIGN IN</button>
                <hr className="login-child6" />
                <button className="login-child7">
                    <span>
                        <i className="fab fa-google"></i>SIGN IN WITH GOOGLE
                    </span>
                </button>
                <button className="login-child8">
                    <span>
                        <i className="fab fa-facebook-f"></i>SIGN IN WITH FACEBOOK
                    </span>
                </button>
            </form>
        </div>
    );
}
