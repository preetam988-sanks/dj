import React from 'react';
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare Products"} />
            <BreadCrumb title="Compare Products" />
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src="/images/cross.svg"
                                    alt="Remove product"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="product-card-img">
                                    <img
                                        src="/images/watch.jpg"
                                        alt="Product watch"
                                    />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1 7.0 1GB RAM 7-Inch With Wi-Fi + 4G Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$100</h6>
                                    <div>
                                        <div className="product-details">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Type:</h5>
                                            <p>Tablet</p> {/* Modified for correctness */}
                                        </div>
                                        <div className="product-details">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p> {/* Modified for clarity */}
                                        </div>
                                        <div className="product-details">
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-details">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src="/images/cross.svg"
                                    alt="Remove product"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="product-card-img">
                                    <img
                                        src="/images/watch.jpg"
                                        alt="Product watch"
                                    />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1 7.0 1GB RAM 7-Inch With Wi-Fi + 4G Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$100</h6>
                                    <div>
                                        <div className="product-details">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Type:</h5>
                                            <p>Tablet</p> {/* Modified for correctness */}
                                        </div>
                                        <div className="product-details">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p> {/* Modified for clarity */}
                                        </div>
                                        <div className="product-details">
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-details">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompareProduct;
