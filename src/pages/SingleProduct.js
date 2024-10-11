import React, { useState } from 'react';
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";
import ProducCard from "../components/ProducCard";
import ReactStars from "react-rating-stars-component";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Color from "../components/Color";
import {Link} from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { GrCompare } from "react-icons/gr";


const SingleProduct = () => {
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) =>
    {
        console.log("text", text);
        var textField=document.createElement("textarea");
        textField.innerText=text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();

    };
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <InnerImageZoom
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s"
                                        zoomSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s"
                                        zoomScale={1.5}
                                        alt="Product"
                                    />
                                </div>
                            </div>
                            <div className="d-flex other-product-images flex-wrap gap-15">
                                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s" className="img-fluid" alt=""/></div>
                                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s" className="img-fluid" alt=""/></div>
                                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s" className="img-fluid" alt=""/></div>
                                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s" className="img-fluid" alt=""/></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3>GOOD</h3>
                                </div>
                                <div className="border-bottom pt-3">
                                    <p className="price">$100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0 t-review">(2 reviews)</p>
                                    </div>
                                    <a className="review-btn" href="#review">Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Type:</h3><p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Brand:</h3><p
                                        className="product-data">Havells</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Categories:</h3><p
                                        className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Tags:</h3><p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Availability:</h3><p className="product-data">In
                                        Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-coloumn mt-2 mb-3">
                                        <h3 className="product-heading">Size:</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span
                                                className="border badge border-1 bg-white text-dark border-secondaryborder">S</span>
                                            <span
                                                className="border badge border-1 bg-white text-dark border-secondaryborder">M</span>
                                            <span
                                                className="border badge border-1 bg-white text-dark border-secondaryborder">X</span>
                                            <span
                                                className="border badge border-1 bg-white text-dark border-secondaryborder">XXL</span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-coloumn mt-2 mb-3">
                                        <h3 className="product-heading">Color:</h3>
                                        <Color/>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <div>
                                            <a href="">
                                                <GrCompare className="fs-5 me-2"/> Add to Compare</a>
                                        </div>
                                        <a href=""><GiSelfLove className="fs-5 me-2"/> Add to wishlist</a>
                                    </div>
                                    <div className="d-flex gap-10 flex-row mt-2 mb-3 align-items-center">
                                        <h3 className="product-heading">Quantity:</h3>
                                        <div className=""><input type="number"
                                                                 name=""
                                                                 min={1}
                                                                 max={100}
                                                                 className="form-control"
                                                                 style={{width: "70px"}}
                                                                 id=""

                                        /></div>
                                        <div className="mt-3 d-flex align-items-center gap-15">
                                            <button className="button border-0">
                                                Add To Cart
                                            </button>
                                            <button className="button signup">Buy Now</button>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Shipping Policy:</h3>
                                        <p className="product-data">
                                            We offer fast and reliable shipping. Orders are processed within 1-2
                                            business days and typically arrive within 3-5 business days, depending on
                                            your location.
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Return Policy:</h3>
                                        <p className="product-data">
                                            If you’re not fully satisfied, returns are accepted within 14 days of
                                            delivery. Products must be in original condition. Refunds are processed
                                            promptly, though shipping fees are non-refundable.
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Copy Product Link:</h3>
                                        <button
                                            className="button border-0"
                                            onClick={() => copyToClipboard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s")}
                                        >
                                            Copy Link
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <h4>Description</h4>
                                <div>
                                    <p className="bg-white gap-3">Grate Works take Grate TIme</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="review" className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customer Reviews</h4>
                                        <div className="d-flex gap-10 align-items-center">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0">Based On 2 reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <a href="" className="text-dark text-decoration-underline">Write a Review</a>
                                        </div>
                                    )}
                                </div>
                                <div className="review-form">
                                    <h4>Write Review</h4>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className="w-100 form-control" cols="30" rows="4"
                                                      placeholder="Comments"
                                            />
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="button border-0">Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Preetam</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="mt-3">Grate Works</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProducCard/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
