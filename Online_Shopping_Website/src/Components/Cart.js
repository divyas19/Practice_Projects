import React from "react";
import "./Cart.css";
export default function Cart() {
    return (
        <div className="main-cart-container">
            <div className="sub-cart-container">
                <div className="cartdata1">Shopping Cart</div>
                <div className="cartdata2">
                    <div className="cart-img-name">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            alt="img"
                        />
                        <p className="cart-val">
                            Iphone
                            <br />
                            Color: Grey
                        </p>
                    </div>
                    <input value="1" />
                    <p className="price">$499.00</p>
                    <i className="fas fa-trash  delete-icon"></i>
                </div>
                <div className="cartdata3">
                    <button>Proceed to Pay</button>
                </div>
            </div>
        </div>
    );
}
