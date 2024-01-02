import React from "react";
import "./Contact.css";
import Footer from "./Footer";
export default function Contact() {
    return (
        <>
            <div className="main-contact-container">
                <div className="contact-container-header">
                    <a href="https://www.linkedin.com/in/">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;
                    </a>
                    <a href="https://github.com/">
                        <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                </div>

                <div className="contact-container-info">
                    <div className="info1">
                        <h6 className="info-heading">
                            <i className="fas fa-gem " aria-hidden="true"></i>&nbsp;&nbsp;E-Buy
                        </h6>
                        <p>
                            Our website allows people to buy products <br />
                            over the internet rather than at a <br />
                            brick-and-mortar location.
                        </p>
                    </div>
                    <div className="info2">
                        <h6 className="info-heading">USEFUL LINKS</h6>
                        <p>
                            <u>Pricing</u>
                        </p>
                        <p>
                            <u>Settings</u>
                        </p>
                        <p>
                            <u>Orders</u>
                        </p>
                        <p>
                            <u>Help</u>
                        </p>
                    </div>
                    <div className="info3">
                        <h6 className="info-heading">CONTACT</h6>
                        <p>
                            <i className="fas fa-home"></i> &nbsp;At Post Bori , Parbhani
                        </p>
                        <p>
                            <i className="fas fa-envelope" aria-hidden="true"></i>&nbsp;
                            xyz@gmail.com
                        </p>
                        <p>
                            <i className="fas fa-phone " aria-hidden="true"></i> &nbsp;9998887776
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
