import React from 'react';
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";

const ShippingPolicy = () => {
    return (
        <>
            <Meta title={"Shipping Policy"}/>
            <BreadCrumb title="Shipping Policy"/>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">
                            <h1>Shipping Policy</h1>
                            <p>Last updated: [Date]</p>

                            <p>Welcome to [Your E-Commerce Website Name]'s Shipping Policy page!</p>

                            <h2>1. Shipping Times</h2>
                            <p>- We aim to process and ship all orders within [Processing Time] business days.</p>
                            <p>- Delivery times vary depending on your location. Standard shipping typically takes [X-Y] days within [Your Country] and [X-Y] days for international orders.</p>

                            <h2>2. Shipping Costs</h2>
                            <p>- Shipping costs are calculated at checkout based on your location and the weight of the order.</p>
                            <p>- Free shipping is available for orders over [Amount] in [Your Country] (or applicable regions).</p>

                            <h2>3. Order Tracking</h2>
                            <p>- Once your order has been shipped, we will provide a tracking number via email. You can track your order through [Tracking URL or Shipping Provider].</p>

                            <h2>4. International Shipping</h2>
                            <p>- We offer international shipping to most countries. Delivery times may vary depending on customs clearance in your country.</p>
                            <p>- Please note that any import duties, taxes, or customs fees are the responsibility of the customer and are not included in the shipping cost.</p>

                            <h2>5. Delayed or Lost Orders</h2>
                            <p>- If your order is delayed or lost in transit, please contact our support team at [Support Email] with your order number and tracking information. We will investigate and assist you with a resolution.</p>

                            <h2>6. Shipping Address Errors</h2>
                            <p>- Please ensure that your shipping address is correct at checkout. We are not responsible for orders shipped to incorrect addresses provided by the customer.</p>

                            <h2>7. Shipping Restrictions</h2>
                            <p>- Certain items may not be eligible for international shipping due to local laws and regulations. Please review product details before placing an order.</p>

                            <h2>8. Changes to Shipping Policy</h2>
                            <p>We reserve the right to update or change this shipping policy at any time. Changes will be effective immediately upon posting on the website.</p>

                            <h2>9. Contact Us</h2>
                            <p>If you have any questions regarding our shipping policy, feel free to contact us at [Support Email] or [Phone Number].</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShippingPolicy;

