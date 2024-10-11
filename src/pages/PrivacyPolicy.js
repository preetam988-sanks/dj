import React from 'react';
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Privacy Policy"}/>
            <BreadCrumb title="Privacy Policy"/>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">
                            <h1>Privacy Policy</h1>
                            <p>Last updated: [Date]</p>

                            <p>At DevCorner, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website.</p>

                            <h2>1. Information We Collect</h2>
                            <p>- We collect personal information such as your name, email address, shipping address, and payment details when you make a purchase or sign up for our newsletter.</p>
                            <p>- We also collect non-personal information such as your IP address, browser type, and device information for the purpose of improving our website and services.</p>

                            <h2>2. How We Use Your Information</h2>
                            <p>- To process your orders and provide customer support.</p>
                            <p>- To send you updates on your orders and promotional emails (you can opt-out at any time).</p>
                            <p>- To improve our website’s functionality, content, and user experience.</p>

                            <h2>3. Information Sharing</h2>
                            <p>- We do not sell, trade, or rent your personal information to third parties.</p>
                            <p>- We may share your information with trusted third-party services for the purpose of processing payments, shipping orders, and improving our website. These services are bound by strict confidentiality agreements.</p>

                            <h2>4. Cookies</h2>
                            <p>- We use cookies to enhance your browsing experience and collect information about how you use our website.</p>
                            <p>- You can disable cookies through your browser settings, but this may affect your ability to use certain features on our website.</p>

                            <h2>5. Data Security</h2>
                            <p>- We implement a variety of security measures to maintain the safety of your personal information.</p>
                            <p>- However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

                            <h2>6. Your Rights</h2>
                            <p>- You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at [Support Email].</p>

                            <h2>7. Changes to This Privacy Policy</h2>
                            <p>- We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.</p>

                            <h2>8. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at [Support Email] or [Phone Number].</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;
