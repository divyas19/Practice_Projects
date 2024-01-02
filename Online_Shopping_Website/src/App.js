import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar.js";
import Products from "./Components/Products.js";
import Contact from "./Components/Contact.js";
import Home from "./../src/Components/Home.js";
import Login from "./../src/Components/Login.js";
import Cart from "./../src/Components/Cart.js";

import EachProduct from "./Components/EachProduct.js";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route
          path="/eachproduct/:receivedProductId"
          element={<EachProduct />}
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

// import './App.css';
// import { Routes, Route } from "react-router-dom"
// import Navbar from "../src/Components/Navbar.js"
// import Products from './Components/Products.js';
// import Contact from './Components/Contact.js';

// // import Navbar from './Components/Navbar';
// import Home from './../src/Components/Home.js';
// import Login from './../src/Components/Login.js';
// import Cart from './../src/Components/Cart.js';

// import EachProduct from './Components/EachProduct.js';
// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>

//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/products" element={<Products />} />
//         <Route exact path="/eachproduct" element={<EachProduct />} />
//         <Route exact path="/contact" element={<Contact />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/cart" element={<Cart />} />

//       </Routes>
//     </>
//   );
// }

// export default App;
