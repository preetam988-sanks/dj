import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import {NavLink,Link} from "react-router-dom";
import Meta from "../components/meta";
import { MdDeleteForever } from "react-icons/md";



const Cart = () => {
    return(<>
        <Meta title={"Cart"} />
        <BreadCrumb title="Cart" />
            <section className="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row ">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">Product</h4>
                                <h4 className="cart-col-2">Price</h4>
                                <h4 className="cart-col-3">Quantity</h4>
                                <h4 className="cart-col-4">Total</h4>
                            </div>
                            <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src="/images/watch.jpg" alt="" className="img-fluid rounded-3"/>
                                    </div>
                                    <div className="w-75">
                                        <h5 className="title">usaiuyiuewyiwyiuyadsa</h5>
                                        <p className="color">adoauoiduo</p>
                                        <p className="size">alkjdlkj</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">$100</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div><input type="number" name="" id="" className="form-control"
                                    min={1} max={10}
                                    /></div>
                                    <div ><MdDeleteForever size={30} /></div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">$100</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <Link to="/store" className="button">
                                Continue To Shopping
                            </Link>
                                <div>
                                    <h4>
                                        SubTotal: $100
                                    </h4>
                                    <Link to="/checkout" className="button">Checkout</Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Cart
