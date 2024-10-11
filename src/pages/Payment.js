import React from 'react';

const Payment = () => {
    const handlePaymentSubmission = (event) => {
        event.preventDefault();


        const form = event.target;
        if (form.checkValidity()) {
            alert("Payment processing...");
        } else {
            form.reportValidity();
        }
    };

    return (
        <div className="payment-wrapper py-5 bg-light">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Payment Gateway</h2>
                        <p className="text-center">Enter your payment details below:</p>


                        <form onSubmit={handlePaymentSubmission} className="d-flex gap-15 flex-wrap justify-content-center">
                            <div className="w-50">
                                <input type="text" className="form-control" placeholder="Cardholder Name" required />
                            </div>
                            <div className="w-50">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Card Number"
                                    required
                                    pattern="\d{16}"
                                    title="Card number should be 16 digits"
                                />
                            </div>
                            <div className="w-25">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Expiry Date (MM/YY)"
                                    required
                                    pattern="\d{2}/\d{2}"
                                    title="Expiry date should be in MM/YY format"
                                />
                            </div>
                            <div className="w-25">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="CVV"
                                    required
                                    pattern="\d{3}"
                                    title="CVV should be 3 digits"
                                />
                            </div>

                            <div className="text-center mt-4 w-100">
                                <button type="submit" className="btn btn-success">
                                    Pay Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
