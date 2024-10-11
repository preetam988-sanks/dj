import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact  from "./pages/Contact"
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct"
import Wishlist from "./pages/Wishlist";
import CheckOut from "./pages/CheckOut";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RfundPolicy from "./pages/RfundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";



function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="store" element={< OurStore/>} />
              <Route path="/store/SingleProduct" element={<SingleProduct />} />
              <Route path="Blog" element={< Blog/>} />
              <Route path="Blog/:id" element={< SingleBlog/>} />
              <Route path="Cart" element={< Cart/>} />
                <Route path="Contact" element={<Contact/>}/>
                <Route path="CompareProduct" element={<CompareProduct />} />
              <Route path="Wishlist" element={<Wishlist />} />
              <Route path="Login" element={<Login/>} />
              <Route path="forgot-password" element={<Forgotpassword />} />
              <Route path="Signup" element={<Signup />}  />
              <Route path="Resetpassword" element={<Resetpassword />}  />
              <Route path="PrivacyPolicy" element={<PrivacyPolicy />}  />
              <Route path="RfundPolicy" element={<RfundPolicy />}  />
              <Route path="ShippingPolicy" element={<ShippingPolicy />}  />
              <Route path="TermsAndCondition" element={<TermsAndCondition />}  />
              <Route path="CheckOut" element={<CheckOut />}  />
              <Route path="payment" element={<Payment />} />




            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
