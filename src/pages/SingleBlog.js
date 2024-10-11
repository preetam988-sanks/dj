import React from 'react'
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import {Link} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"}/>
            <BreadCrumb title="Dynamic Blog Name"/>
            <div className="home-wrapper-2 blog-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">

                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/Blog"> <FaArrowLeft className="fs-5"/> Go Back To Blogs</Link>

                                <h3 className="titte">
                                    A Beautiful Sunday Morning Renaissance
                                </h3>
                                <img src="/images/blog-1.jpg" alt="blog1" className="img-fluid w-100  my-4"/>
                                <p className="bg-white">Whether you’re a busy freelancer, a web designer, a stay-at-home mom, or a college student, fashion is a powerful tool to elevate your everyday life.

                                    Fashion is NOT just about the latest trends; it’s a way to express yourself and feel confident. Being average is always boring and the joy of dressing is really an art.

                                    Want to become more stylish? You can choose to hire a professional fashion designer or do it yourself.

                                    So, if you are looking for effortless ways and ideas to become more fashionable, we have a curated list of the best fashion blogs to guide you. These fashion blogs aren’t just about the latest trends; they’ll show you how to explore new outfit ideas, learn how to style what you already own and build confidence through style.

                                    Let’s dive into these blogs and discover your unique style!

                                </p>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default SingleBlog
