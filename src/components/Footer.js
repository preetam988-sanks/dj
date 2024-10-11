import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src="/images/newsletter.png" alt="newsPaper" />
                                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control py-1"
                                    placeholder="Your Email Address."
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2 hr" id="basic-addon2 ">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div className="footer-links d-flex flex-column">
                                <address className="text-white fs-5">
                                    k/b:Sion,<br />
                                    Mumbai,<br />
                                    Maharashtra PinCode: 422241
                                </address>
                                <a href="tel:6361162248" className="mt-2 d-block mb-3 text-white">
                                    +91 6361162248
                                </a>
                                <a href="mailto:preetam.sankannawar@gmail.com" className="mt-3 d-block mb-3 text-white">
                                    preetam.sankannawar@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-30  ">
                                    <a href="#" className="text-white">
                                        <FaLinkedin className=" fs-5" />
                                    </a>
                                    <a href="#" className="text-white">
                                        <FaGithub className=" fs-5" />

                                    </a>
                                    <a href="#" className="text-white">
                                        <FaYoutube className=" fs-5" />

                                    </a>
                                    <a href="#" className="text-white">
                                        <FaInstagram className=" fs-5" />

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1" to="/PrivacyPolicy">Privacy Policy</Link>
                                <Link className="text-white py-2 mb-1" to="/RfundPolicy">Refund Policy</Link>
                                <Link className="text-white py-2 mb-1" to="/ShippingPolicy">Shipping Policy</Link>
                                <Link className="text-white py-2 mb-1" to="/TermsAndCondition">Terms & Conditions</Link>
                                <Link className="text-white py-2 mb-1" to="/Blog">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1" to="/">About-Us</Link>
                                <Link className="text-white py-2 mb-1" to="/">Faq</Link>
                                <Link className="text-white py-2 mb-1" to="/">Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1" to="/">Laptop</Link>
                                <Link className="text-white py-2 mb-1" to="/">HeadPhones</Link>
                                <Link className="text-white py-2 mb-1" to="/">Tablets</Link>
                                <Link className="text-white py-2 mb-1" to="/">Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered By Developer's Corner
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

