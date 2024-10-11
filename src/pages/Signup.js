import React from 'react';
import Meta from "../components/meta";
import BreadCrumb from "../components/BreadCrumb";
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomInput from "../components/CustomInput";

const SignUpSchema = yup.object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup.string().nullable().email("Email should be valid"),
    mobile: yup.string().required("Mobile number is required"),
    password: yup.string().required("Password is required"),
});

const Signup = () => {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: SignUpSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <Meta title={"Signup"} />
            <BreadCrumb title="Signup" />
            <div className="login-wrapper py-5 bg-white">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Signup</h3>
                                <form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-30">
                                    <div>
                                        <CustomInput
                                            type="text"
                                            className="form-control"
                                            name="firstname"
                                            placeholder="First Name"
                                            value={formik.values.firstname}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.firstname && formik.errors.firstname ? (
                                            <div className="error">{formik.errors.firstname}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="text"
                                            className="form-control"
                                            name="lastname"
                                            placeholder="Last Name"
                                            value={formik.values.lastname}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.lastname && formik.errors.lastname ? (
                                            <div className="error">{formik.errors.lastname}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="error">{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="password"
                                            className="form-control mt-1"
                                            name="password"
                                            placeholder="Password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className="error">{formik.errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="tel"
                                            className="form-control mt-1"
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            value={formik.values.mobile}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.mobile && formik.errors.mobile ? (
                                            <div className="error">{formik.errors.mobile}</div>
                                        ) : null}
                                    </div>
                                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                                        <button type="submit" className="button border-0">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
