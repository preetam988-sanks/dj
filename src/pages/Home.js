import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProducCard from "../components/ProducCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">

                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative ">
                                <img src="/images/main-banner-1.jpg" alt="Girl with Headphones"
                                     className="img-fluid rounded-3"/>
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>iPad s13+ pro.</h5>
                                    <p>From $888.00 or $41.62/mo.</p>
                                    <Link to="/" className="button">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-6">
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                                <div className="small-banner position-relative ">
                                    <img src="/images/catbanner-01.jpg" alt="Girl with Headphones"
                                         className="img-fluid rounded-3"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>BEST SALE.</h4>
                                        <h5>Laptop Max</h5>
                                        <p>From $1699.00 or $64.62/mo.</p>

                                    </div>

                                </div>
                                <div className="small-banner position-relative ">
                                    <img src="/images/catbanner-02.jpg" alt="Girl with Headphones"
                                         className="img-fluid rounded-3"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch7</h5>
                                        <p>Shop the latest band Styles <br></br>
                                            and Colors
                                        </p>

                                    </div>

                                </div>
                                <div className="small-banner position-relative ">
                                    <img src="/images/catbanner-03.jpg" alt="Girl with Headphones"
                                         className="img-fluid rounded-3"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>New ARRIVAL</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From $599.00 or$49.91mo.<br></br>
                                            for 12 mo.
                                        </p>

                                    </div>

                                </div>
                                <div className="small-banner position-relative ">
                                    <img src="/images/catbanner-04.jpg" alt="Girl with Headphones"
                                         className="img-fluid rounded-3"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>FREE ENGRAVING</h4>
                                        <h5>AirPods Max</h5>
                                        <p>High-fidelity playback.&<br></br>
                                            ultra-low distortion
                                        </p>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">

                            <div className="services d-flex align-items-center justify-content-between gap-10">
                                <div className="d-flex align-items-center gap-10">
                                    <img src="/images/service.png" alt="services"/>
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className="mb-0">From all orders over $20</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <img src="/images/service-02.png" alt="services"/>
                                    <div>
                                        <h6>Daily Surprise offers</h6>
                                        <p className="mb-0">Save up to 25% off</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <img src="/images/service-03.png" alt="services"/>
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className="mb-0">Shop with an Expert</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <img src="/images/service-04.png" alt="services"/>
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className="mb-0">Get Factory direct Price </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <img src="/images/service-05.png" alt="services"/>
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className="mb-0">100% Protected Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="categories d-flex justify-content-space-between flex-wrap align-items-center">
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="cameras"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/tv.jpg" alt="cameras"/>
                                </div>
                                <div className="d-flex gap align-items-center ">
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/watch.jpg" alt="cameras" height="150px"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/gaming.jpg" alt="cameras" height="150px" width="150px"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Music</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/headphone.jpg" alt="cameras"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="cameras"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/tv.jpg" alt="cameras"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/watch.jpg" alt="cameras"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/gaming.jpg" alt="cameras" height="150px" width="150px"/>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Music</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/headphone.jpg" alt="cameras"/>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-wrapper py-5 home-wrapper-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Featured Collection</h3>
                        </div>
                        <ProducCard/>
                        <ProducCard/>
                        <ProducCard/>
                        <ProducCard/>
                        <ProducCard/>

                        <ProducCard/>


                    </div>
                </div>
            </section>
            <section className="famous-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row " >
                        <div className="col-4 mb-3">
                            <div className="famous-card position-relative">
                                <img src="/images/famous.jpeg" alt="Smart Watch" height="225" width="400px"
                                     className="image-fluid "/>
                                <div className="famous-content position-absolute ">
                                    <h5>Big Screen </h5>
                                    <h6>Smart Watch <br/>series 7</h6>
                                    <p>From $399or $16.62/mo.for 24 mo.*</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-4">
                            <div className="famous-card position-relative bc">
                                <img src="/images/laptop.jpeg" alt="Smart Watch" height="225px" width="400px"
                                     className="image-fluid"/>
                                <div className="famous-content position-absolute ">
                                    <h5>Studio Display </h5>
                                    <h6> 600 nits of brightness</h6>
                                    <p>27-inch 5K Retina display</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-4">
                            <div className="famous-card position-relative bc">
                                <img src="/images/Phone.jpeg" alt="Smart Watch" height="225px" width="400px"
                                     className="image-fluid"/>
                                <div className="famous-content position-absolute ">
                                    <h5 className="text-danger">SMARTPHONES </h5>
                                    <h6 className="text-danger"> Smartphone 13 Pro</h6>
                                    <p className="text-danger">From $999.00 or $41.62.for <br/>24mo.footnote*</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative ">
                                <img src="/images/soundBox.jpg" alt="Smart Watch" height="300px" width="300px"
                                     className="image-fluid "/>
                                <div className="famous-content position-absolute ">
                                    <h5>Home Speaker</h5>
                                    <h6>Mivi Play Bluetooth Speaker with 12 Hours Playtime</h6>
                                    <p>Price:$10</p>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className="special-wrapper py-5 home-wrapper-2 bg-white">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading mc">Our Hot Products</h3>
                        </div>
                    </div>
                    <div className="row   ">
                        <SpecialProduct/>

                        <SpecialProduct/>

                        <SpecialProduct/>

                        <SpecialProduct/>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products </h3>
                        </div>



                    </div>
                    <div className="row">

                        <ProducCard/>
                        <ProducCard/>
                        <ProducCard/>
                        <ProducCard/>
                    </div>

                </div>
            </section>

            <section className="marque-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className="d-flex">
                                    <div className="mx-4 w-25"><img src="/images/brand-01.png" alt="Brand"/></div>
                                    <div className="mx-4 w-25"><img src="/images/brand-02.png" alt="Brand"/></div>
                                    <div className="mx-4 w-25"><img src="/images/brand-03.png" alt="Brand"/></div>
                                    <div className="mx-4 w-25"><img src="/images/brand-04.png" alt="Brand"/></div>
                                    <div className="mx-4 w-25"><img src="/images/brand-05.png" alt="Brand"/></div>
                                    <div className="mx-4 w-25"><img src="/images/brand-06.png" alt="Brand"/></div>
                                    <div className="mx-4 w-25"><img src="/images/brand-07.png" alt="Brand"/></div>
                                    <div className="mx-4 w-25"><img src="/images/brand-08.png" alt="Brand"/></div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="blog-wrapper py-5 home-wrapper-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Latest Blogs</h3>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-3">
                            <BlogCard/>

                        </div>
                        <div className="col-3">
                            <BlogCard/>

                        </div>
                        <div className="col-3">
                            <BlogCard/>

                        </div>
                        <div className="col-3">
                            <BlogCard/>

                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;