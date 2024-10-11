import React from 'react';
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";


const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <div className="wishlist-wrapper home-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">

                            <div className="wishlist-card position-relative">
                                <img
                                    src="/images/cross.svg"
                                    alt="Remove product"
                                    className="position-absolute cross img-fluid    "
                                />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" alt="watch" className="image-fluid w-100"/>


                                </div>
                                <div className="bg-white py-3 px-4">
                                    <h5 className="title ">Honor T1 7.0 1GB RAM 7-Inch With Wi-Fi + 4G Tablet</h5>
                                    <h6 className="price color">
                                        $ 100
                                    </h6>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">

                            <div className="wishlist-card position-relative">
                                <img
                                    src="/images/cross.svg"
                                    alt="Remove product"
                                    className="position-absolute cross img-fluid    "
                                />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" alt="watch" className="image-fluid w-100"/>


                                </div>
                                <div className="bg-white py-3 px-4">
                                    <h5 className="title ">Honor T1 7.0 1GB RAM 7-Inch With Wi-Fi + 4G Tablet</h5>
                                    <h6 className="price color">
                                        $ 100
                                    </h6>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">

                            <div className="wishlist-card position-relative">
                                <img
                                    src="/images/cross.svg"
                                    alt="Remove product"
                                    className="position-absolute cross img-fluid    "
                                />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" alt="watch" className="image-fluid w-100"/>


                                </div>
                                <div className="bg-white py-3 px-4">
                                    <h5 className="title ">Honor T1 7.0 1GB RAM 7-Inch With Wi-Fi + 4G Tablet</h5>
                                    <h6 className="price color">
                                        $ 100
                                    </h6>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">

                            <div className="wishlist-card position-relative">
                                <img
                                    src="/images/cross.svg"
                                    alt="Remove product"
                                    className="position-absolute cross img-fluid    "
                                />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" alt="watch" className="image-fluid w-100"/>


                                </div>
                                <div className="bg-white py-3 px-4">
                                    <h5 className="title ">Honor T1 7.0 1GB RAM 7-Inch With Wi-Fi + 4G Tablet</h5>
                                    <h6 className="price color">
                                        $ 100
                                    </h6>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Wishlist
