// import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import ReactStars from "react-rating-stars-component";
import React, {useState} from "react";
import ProducCard from "../components/ProducCard";
import Color from "../components/Color";

const OurStore = () => {
    const  [grid,setGrid] = useState(4);

    return (
        <>
            <   Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Shop By Categories</h3>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>

                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Availability</h5>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="availability1"
                                        />
                                        <label className="form-check-label" htmlFor="availability1">
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="availability2"
                                        />
                                        <label className="form-check-label" htmlFor="availability2">
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>

                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control py-1"
                                            id="floatingInput"
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control py-1"
                                            id="floatingInput1"
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>

                                <h5 className="sub-title">Colors</h5>
                                <div>
                                    <Color />
                                </div>

                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="size1"
                                        />
                                        <label className="form-check-label" htmlFor="size1">
                                            Small (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="size2"
                                        />
                                        <label className="form-check-label" htmlFor="size2">
                                            Medium (0)
                                        </label>
                                    </div>
                                </div>

                                <div className="filter-card mb-3">

                                    <h3 className="filter-title">Product Tags</h3>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            HeadPhone
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                                Laptop
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mobile
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            wire
                                        </span>

                                    </div>
                                    {/* Add content for product tags */}
                                </div>

                                <div className="filter-card mb-3">
                                    <h3 className="filter-title">Random Product</h3>
                                    <div className="random-products d-flex align-items-center">
                                        {/* Adjust image wrapper */}
                                        <div className="w-50">
                                            <img src="/images/watch.jpg" className="img-fluid" alt="watch"/>
                                        </div>
                                        {/* Adjust text wrapper */}
                                        <div className="w-50">
                                            <h5>Kids HeadPhone bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$300</b>
                                        </div>
                                    </div>

                                </div>
                                <div className="filter-card mb-3">
                                    <h3 className="filter-title">Random Product</h3>
                                    <div className="random-products d-flex align-items-center">
                                        {/* Adjust image wrapper */}
                                        <div className="w-50">
                                            <img src="/images/watch.jpg" className="img-fluid" alt="watch"/>
                                        </div>
                                        {/* Adjust text wrapper */}
                                        <div className="w-50">
                                            <h5>Kids HeadPhone bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$300</b>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            </div>

                            {/* Other store content can go here */}


                            <div className="col-9">
                                <div className="filter-sort-grid mb-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-10">
                                            <p className="mb-0 d-block " style={{"width":"100px"}}>Sort By:</p>

                                            <select name="" className="form-control form-select">
                                                <option value="manual">Featured</option>
                                                <option value="best-selling">Best Selling</option>
                                                <option value="title-ascending">Alphabetically, A-Z</option>
                                                <option value="title-descending">Alphabetically, Z-A</option>
                                                <option value="price-ascending">Price, low to high</option>
                                                <option value="price-descending">Price, high to low</option>
                                                <option value="created-ascending">Date, old to new</option>
                                                <option value="created-descending">Date, new to old</option>
                                            </select>

                                        </div>
                                        <div className="d-flex align-items-center gap-10">
                                            <p className="totalProducts mb-0">
                                                21 Products
                                            </p>
                                            <div className="d-flex align-items-center gap-10 grid">

                                                <img onClick={()=>{setGrid(3)}} src="/images/gr4.svg" alt="gri/images/gr.svgd"
                                                     className="d-block img-fluid"/>

                                                <img onClick={()=>{setGrid(4)}} src="/images/gr3.svg" alt="gri/images/gr.svgd"
                                                     className="d-block img-fluid"/>

                                                <img onClick={()=>{setGrid(6)}} src="/images/gr2.svg" alt="gri/images/gr.svgd"
                                                     className="d-block img-fluid"/>
                                                <img onClick={()=>{setGrid(12)}} src="/images/gr.svg" alt="gri/images/gr.svgd"
                                                     className="d-block img-fluid"/>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div className="product-list pb-5">
                                    <div className="d-flex gap-10 flex-wrap"><ProducCard grid={grid} /></div>


                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStore;
