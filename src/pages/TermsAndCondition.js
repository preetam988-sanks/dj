import React from 'react';
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";

const TermsAndCondition = () => {
    return (
        <>
            <Meta title={"Terms And Condition"} />
            <BreadCrumb title="Terms And Condition" />
            <section className="policy-wrapper py-5 home-wrapper-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy">
                                <h1>Terms and Conditions</h1>
                                <p>Last updated: [Date]</p>

                                <p>Welcome to [Your E-Commerce Website Name]!</p>

                                <p>These terms and conditions outline the rules and regulations for the use of [Your E-Commerce Website Name]'s Website, located at [Website URL].</p>

                                <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Your E-Commerce Website Name] if you do not agree to all the terms and conditions stated on this page.</p>

                                <h2>1. Introduction</h2>
                                <p>By accessing this website, you agree to comply with and be bound by these Terms and Conditions. These terms apply to all visitors, users, and others who access or use the website.</p>

                                <h2>2. Intellectual Property</h2>
                                <p>All content included on this website, including text, graphics, logos, images, and software, is the property of [Your E-Commerce Website Name] or its licensors and is protected by intellectual property laws.</p>

                                <h2>3. Use of the Website</h2>
                                <p>You are permitted to use the website for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the website.</p>

                                <h2>4. Products and Services</h2>
                                <p>- We make every effort to display the products as accurately as possible, but we do not guarantee that the display of any product on your screen will accurately reflect its actual size, color, or detail.</p>
                                <p>- Prices for our products are subject to change without notice.</p>
                                <p>- We reserve the right to discontinue any product at any time.</p>

                                <h2>5. Orders</h2>
                                <p>- By placing an order, you agree to provide current, complete, and accurate purchase and account information.</p>
                                <p>- We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person or per order.</p>

                                <h2>6. Shipping and Delivery</h2>
                                <p>- Shipping times may vary based on location and availability.</p>
                                <p>- We are not responsible for delays caused by external factors such as customs delays, shipping carrier delays, or unforeseen natural events.</p>

                                <h2>7. Returns and Refunds</h2>
                                <p>- We offer refunds or exchanges for faulty or damaged goods in accordance with our [Returns and Refund Policy].</p>
                                <p>- The product must be unused, in its original packaging, and accompanied by a receipt or proof of purchase.</p>

                                <h2>8. Limitation of Liability</h2>
                                <p>- [Your E-Commerce Website Name] will not be held liable for any direct, indirect, incidental, or consequential damages that may result from the use of, or the inability to use, the products sold on this site.</p>

                                <h2>9. Governing Law</h2>
                                <p>These terms and conditions are governed by the laws of [Your Country]. Any disputes arising from or relating to these terms will be resolved in the courts of [Your Jurisdiction].</p>

                                <h2>10. Changes to Terms and Conditions</h2>
                                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TermsAndCondition;

