import React from 'react'
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";
import {NavLink,Link} from "react-router-dom";

const Login = () => {
    return (
     <>
         <Meta title={"Login"} />
         <BreadCrumb title="Login" />
         <div className="login-wrapper py-5 bg-white">
             <div className="container-xxl">
                 <div className="row">
                     <div className="col-12">
                         <div className="auth-card">
                             <h3 className="text-center mb-3">Login</h3>
                             <form action="" className="d-flex flex-column gap-30">
                                 <div><input type="email" className="form-control" name="Email" placeholder="Email"/>
                                 </div>
                                 <div><input type="password" className="form-control mt-1" name="Password"
                                             placeholder="Password"/></div>
                                 <div>
                                     <Link to="/forgot-password " style={{color: 'red'}}>Forgot Password</Link>
                                     <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                                         <button className="button border-0">
                                             LogIn
                                         </button>
                                         <Link to="/Signup" className="button signup">Signup</Link>
                                     </div>
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
export default Login
