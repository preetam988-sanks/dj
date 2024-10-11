import React from 'react';
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";

const RefundPolicy = () => {
    return (
        <>
            <Meta title={"Refund Policy"}/>
            <BreadCrumb title="Refund Policy"/>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">
                            <h1>Refund Policy</h1>
                            <p>Last updated: [Date]</p>

                            <p>Thank you for shopping at [Your E-Commerce Website Name]. If you are not entirely satisfied with your purchase, we're here to help.</p>

                            <h2>1. Returns</h2>
                            <p>- You have [X] days to return an item from the date you received it.</p>
                            <p>- To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                            <p>- To complete your return, we require a receipt or proof of purchase.</p>

                            <h2>2. Refunds</h2>
                            <p>- Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item.</p>
                            <p>- If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>

                            <h2>3. Late or Missing Refunds</h2>
                            <p>- If you haven’t received a refund yet, first check your bank account again.</p>
                            <p>- Then contact your credit card company, it may take some time before your refund is officially posted.</p>
                            <p>- If you’ve done all of this and you still have not received your refund yet, please contact us at [Support Email].</p>

                            <h2>4. Sale Items</h2>
                            <p>- Only regular-priced items may be refunded. Sale items are non-refundable.</p>

                            <h2>5. Exchanges</h2>
                            <p>- We only replace items if they are defective or damaged. If you need to exchange it for the same item, contact us at [Support Email] and send your item to: [Your Address].</p>

                            <h2>6. Shipping</h2>
                            <p>- You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</p>
                            <p>- If you receive a refund, the cost of return shipping will be deducted from your refund.</p>

                            <h2>7. Contact Us</h2>
                            <p>If you have any questions about our Refund Policy, please contact us at [Support Email] or [Phone Number].</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RefundPolicy;
