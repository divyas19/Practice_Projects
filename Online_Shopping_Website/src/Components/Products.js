import React, { useEffect, useState } from "react";
import "./Products.css";
import axios from "axios";
import { Link } from "react-router-dom";

import Loading from "./Loading";
export default function Products() {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getAllProducts = async () => {
        setIsLoading(true);
        const response = await axios.get("https://dummyjson.com/products");

        setAllProducts(response.data.products);

        setIsLoading(false);
        // console.log(response);
    };

    useEffect(() => {
        getAllProducts();
    }, []);
    // useEffect(() => {
    //     console.log(allProducts);
    // }, [allProducts]);

    return (
        <div className="products-main-container">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="dist"></div>
                    <div className="heading">
                        {" "}
                        <h3>Products</h3>
                    </div>
                    <div className="products-container">
                        <ul className="items">
                            {allProducts.map(
                                ({ id, title, price, images }) =>
                                    id <= 28 && (
                                        <li className="eachitem" key={id}>
                                            <img src={images[0]} alt={`Product ${id}`} />
                                            <h5>{title} </h5>
                                            <h5>{`$ ${price}`}</h5>
                                            <div className="btn-container">
                                                <button className="btn1">
                                                    <Link to={`/eachproduct/${id}`}>View</Link>
                                                </button>
                                                <button className="btn2">
                                                    <Link to="/cart">Add To Cart</Link>
                                                </button>
                                            </div>
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

// import React, { useEffect, useState } from 'react'
// import "./Products.css"
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import Loading from './Loading';
// export default function Products() {

//     const [allProducts, setAllProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();
//     const getAllProducts = async () => {
//         setIsLoading(true);
//         const response = await axios.get("https://dummyjson.com/products");

//         setAllProducts(response.data.products);

//         setIsLoading(false);
//         // console.log(response);

//     }

//     const passVal = (id) => {
//         navigate("/eachproduct", { state: { id: id } });
//     }

//     useEffect(() => { getAllProducts() }, []);
//     // useEffect(() => {
//     //     console.log(allProducts);
//     // }, [allProducts]);

//     return (
//         <div className='products-main-container'>
//             {isLoading ? <Loading /> : <>
//                 <div className='dist'></div>
//                 <div className='heading'> <h3>Products</h3></div>
//                 <div className='products-container'>
//                     <ul className="items">
//                         {allProducts.map(({ id, title, price, images }) => (
//                             // Destructure each product's properties

//                             id <= 28 && (
//                                 <li className="eachitem" key={id}>
//                                     <img src={images[0]} alt={`Product ${id}`} />
//                                     <h5>{title} </h5>
//                                     <h5>{`$ ${price}`}</h5>
//                                     <div className='btn-container'>
//                                         <button className='btn1' onClick={() => passVal(id)}>View</button>
//                                         <button className='btn2'><Link to="/cart">Add To Cart</Link></button>
//                                     </div>

//                                 </li>
//                             )

//                         ))}

//                     </ul>

//                 </div>
//             </>}
//         </div >
//     )
// }
