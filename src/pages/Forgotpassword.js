import React from 'react'
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";
import {Link} from "react-router-dom";

const Forgotpassword = () => {
    return (
        <>
            <Meta title={"Forgotpassword"}/>
            <BreadCrumb title="Forgotpasssword"/>
            <div className="login-wrapper py-5 bg-white mb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Reset Your Password</h3>
                            <p className="text-center my-2 mt-2 mb-3">
                                we will send you email to reset Password
                            </p>
                            <form action="" className="d-flex flex-column gap-30">
                                <div><input type="email" className="form-control" name="Email" placeholder="Email"/>
                                </div>


                                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15 flex-column">
                                        <button className="button border-0" type="submit">
                                            Submit
                                        </button>
                                        <Link to="/login ">Cancel</Link>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Forgotpassword
