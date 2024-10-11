import React from 'react'
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";
import { IoMdHome } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInfo } from "react-icons/fa";
const Contact = () => {
    return (
        <>
            <Meta title={"Contact Us"} />
            <BreadCrumb title="Contact Us" />
            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204531.55638527567!2d74.73192342778799!3d14.110474465376805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc76664b17889b%3A0x3aed952e47e24900!2sSharavati%20Valley%20Wildlife%20Sanctuary!5e0!3m2!1sen!2sin!4v1727509908266!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                className="border-0 w-100"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Map showing Sharavati Valley Wildlife Sanctuary"
                            ></iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-around">
                                <div>
                                    <h3 className="contact-title mb-4">Contact</h3>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div className="mb-3">
                                            <input type="text" placeholder="Your Name" className="form-control" required/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" placeholder="Your Email" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="number" placeholder="Your Phone Number" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <textarea
                                                placeholder="Your Message"
                                                className="form-control w-100   "
                                                rows="5"
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">Get in touch with Us</h3>
                                    <div>
                                        <ul className="ps-0">
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <IoMdHome  className="fs-5" />
                                                <address className="mb-0">
                                                    k/B-201 Lokamanya Pan Bazar
                                                    sion,mumbai,Maharashtra,India
                                                </address>

                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <IoCallOutline className="fs-5"/>
                                                <a href="tel:+916361162248">+91-6361162248</a>

                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <CiMail  className="fs-5" />
                                                <a href="mailto:-preetam.sankannawar@gmail.com ">
                                                    preetam.sankannawar@gmail.com
                                                </a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center"><FaInfo  className="fs-5" />
                                                <p className={"mb-0"}>Monday-Friday 10 AM-8 PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
