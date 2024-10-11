import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";


const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"} m-4`}>
                <Link to="SingleProduct" className="product-card position-relative">

                    <div className="wishlist-icon position-absolute">
                        <Link to="/Wishlist"><img src="/images/wish.svg" alt="Wishlist" /></Link>
                    </div>

                    {/* Product Images */}
                    <div className="product-image">
                        <img src="/images/watch.jpg" className="img-fluid" alt="product-image" />
                        <img src="/images/watch1.jpg" className="img-fluid" alt="product-alt-image" />
                    </div>

                    {/* Product Details */}
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids HeadPhones bulk 10 pack multi colored for students
                        </h5>

                        {/* Rating Stars */}
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Titan Zeal with 1.85" AMOLED Display with AOD, Industry Best 390 x 450 Pixel Resolution; Premium Body Design | Available in Leather and Mesh Straps | Functional Crown
                            SingleSync BT Calling with Favourite Contact Storage; 100+ Sports Modes with AI Coach and Auto Multisport Recognition
                        </p>

                        <p className="price">$100.00</p>
                    </div>

                    {/* Action Bar */}
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link to="/"><img src="/images/prodcompare.svg" alt="Compare" /></Link>
                            <Link to="/"><img src="/images/view.svg" alt="View" /></Link>
                            <Link to="/"><img src="/images/add-cart.svg" alt="Add to Cart" /></Link>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Second Product */}
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"} m-4`}>
                <div className="product-card position-relative">
                    {/* Wishlist Icon */}
                    <div className="wishlist-icon position-absolute">
                        <Link to="/"><img src="/images/wish.svg" alt="Wishlist" /></Link>
                    </div>

                    {/* Product Images */}
                    <div className="product-image">
                        <img src="/images/watch.jpg" className="img-fluid" alt="product-image" />
                        <img src="/images/watch1.jpg" className="img-fluid" alt="product-alt-image" />
                    </div>

                    {/* Product Details */}
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids HeadPhones bulk 10 pack multi colored for students
                        </h5>

                        {/* Rating Stars */}
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Titan Zeal with 1.85" AMOLED Display with AOD, Industry Best 390 x 450 Pixel Resolution; Premium Body Design | Available in Leather and Mesh Straps | Functional Crown
                            SingleSync BT Calling with Favourite Contact Storage; 100+ Sports Modes with AI Coach and Auto Multisport Recognition
                        </p>

                        <p className="price">$100.00</p>
                    </div>

                    {/* Action Bar */}
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link to="/"><img src="/images/prodcompare.svg" alt="Compare" /></Link>
                            <Link to="/"><img src="/images/view.svg" alt="View" /></Link>
                            <Link to="/"><img src="/images/add-cart.svg" alt="Add to Cart" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
