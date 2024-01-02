import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import "./EachProduct.css";
import axios from "axios";
export default function EachProduct() {
    const { receivedProductId } = useParams();

    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `https://dummyjson.com/products/${receivedProductId}`
                );
                const data = await response.data;
                console.log("API Response:", data);

                setTitle(data.title);
                setImg(data.images[0]);
                setPrice(data.price);
                setDescription(data.description);
                console.log("Child Title:", data.title);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setIsLoading(false);
            }
        };

        if (receivedProductId) {
            getSingleProduct();
        }
    }, [receivedProductId]);

    return (
        <div className="eachproduct-main-container">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="eachproduct-sub-container">
                        <div className="box1">
                            <img src={img} alt="img" />
                        </div>
                        <div className="box2">
                            <div className="box-info1">
                                <p>
                                    <i className="fa fa-long-arrow-left left-arrow"></i>Back
                                </p>
                                <p>
                                    <i
                                        className="fa fa-shopping-cart text-muted"
                                        aria-hidden="true"
                                    ></i>
                                </p>
                            </div>
                            <div className="box-info2">
                                <div className="item-name">
                                    ORIANZ
                                    <br />
                                    <h3>{title}</h3>
                                </div>
                                <div className="item-price">
                                    <h5 className="price-val">${price}</h5>
                                </div>
                            </div>
                            <div className="box-info3">
                                <p>{description}</p>
                            </div>
                            <div className="box-info4">
                                <button className="buy-now">BUY NOW</button>
                                <i className="fa fa-heart text-muted" aria-hidden="true"></i>
                                <i className="fa fa-share-alt text-muted" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Loading from "./Loading";
// import "./EachProduct.css";
// import axios from "axios";
// export default function EachProduct() {
//     const [receivedProductId, setReceivedProductId] = useState("");
//     const [title, setTitle] = useState("");
//     const [img, setImg] = useState("");
//     const [price, setPrice] = useState("");
//     const [description, setDescription] = useState("");
//     const [isLoading, setIsLoading] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         const idFromLocation = location.state?.id || "";
//         setReceivedProductId(idFromLocation);
//     }, [location.state]);

//     useEffect(() => {
//         const getSingleProduct = async () => {
//             try {
//                 setIsLoading(true);
//                 const response = await axios.get(
//                     `https://dummyjson.com/products/${receivedProductId}`
//                 );
//                 const data = response.data;
//                 // console.log("Child:", data);
//                 setTitle(data.title);
//                 setImg(data.images[0]);
//                 setPrice(data.price);
//                 setDescription(data.description);
//                 console.log("Child Title:", data.title);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error("Error fetching product:", error);
//                 setIsLoading(false);
//             }
//         };

//         if (receivedProductId) {
//             getSingleProduct();
//         }
//     }, [receivedProductId]);

//     return (
//         <div className="eachproduct-main-container">
//             {isLoading ? <Loading /> : <>
//                 <div className="eachproduct-sub-container">
//                     <div className="box1">
//                         <img src={img} alt="img" />
//                     </div>
//                     <div className="box2">
//                         <div className="box-info1">
//                             <p>
//                                 <i className="fa fa-long-arrow-left left-arrow"></i>Back
//                             </p>
//                             <p>
//                                 <i className="fa fa-shopping-cart text-muted" aria-hidden="true"></i>
//                             </p>
//                         </div>
//                         <div className="box-info2">
//                             <div className="item-name">
//                                 ORIANZ
//                                 <br />
//                                 <h3>{title}</h3>
//                             </div>
//                             <div className="item-price">
//                                 <h5 className="price-val">${price}</h5>
//                             </div>
//                         </div>
//                         <div className="box-info3">
//                             <p>{description}</p>
//                         </div>
//                         <div className="box-info4">
//                             <button className="buy-now">BUY NOW</button>
//                             <i className="fa fa-heart text-muted" aria-hidden="true"></i>
//                             <i className="fa fa-share-alt text-muted" aria-hidden="true"></i>
//                         </div>
//                     </div>
//                 </div>
//             </>
//             }
//         </div>
//     );
// }
