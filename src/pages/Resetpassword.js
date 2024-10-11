import React from 'react'
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";

const Resetpassword = () => {
    return (
        <>
            <Meta title={"Resetpassword"}/>
            <BreadCrumb title="Resetpassword"/>
            <div className="login-wrapper py-5 bg-white ">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Signup</h3>
                                <form action="" className="d-flex flex-column gap-30">

                                    {/* Wrap these inputs inside their own div */}
                                    <div>
                                        <input type="password" className="form-control mt-1" name="Password"
                                               placeholder="Password"/>
                                    </div>
                                    <div>
                                        <input type="password" className="form-control mt-1" name="ConfirmPassword"
                                               placeholder="ConfirmPassword"/>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                                        <button className="button border-0 fw-bold">
                                            OK
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resetpassword
