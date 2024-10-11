import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate();

    const handlePayment = (event) => {
        event.preventDefault();


        const form = event.target;
        if (form.checkValidity()) {
            navigate('/payment');
        } else {
            form.reportValidity();
        }
    };

    return (
        <>
            <div className="checkout-wrapper py-5 bg-white">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">Dev Corner</h3>
                                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                                <h4 className="title">Contact Information</h4>
                                <p className="user-details">
                                    Preetam Sankannavar (preetam.sankannawar@gmail.com)
                                </p>


                                <form onSubmit={handlePayment} className="d-flex gap-15 flex-wrap">
                                    <div className="w-100">
                                        <select name="" id="" className="form-control form-select" required>
                                            <option value="">Select a Country</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" className="form-control" placeholder="First Name" required />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" className="form-control" placeholder="Last Name" required />
                                    </div>
                                    <div className="w-100">
                                        <input type="text" className="form-control" placeholder="Address Line 1" required />
                                    </div>
                                    <div className="w-100">
                                        <input type="text" className="form-control" placeholder="Address Line 2" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" className="form-control" placeholder="City" required />
                                    </div>
                                    <div className="flex-grow-1">
                                        <select name="" id="" className="form-control form-select" required>
                                            <option value="">Country</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" className="form-control" placeholder="Postal Code" required />
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-4">
                                        Proceed to Payment
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOut;
