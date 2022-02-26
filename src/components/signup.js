import React, { useState } from "react";
import { useFormik } from "formik";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";

import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const [loading, setLoading] = useState(false);

  

  const formik = useFormik({
    initialValues: {
        name:"",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string("confirm password").required("Required"),
    }),
    onSubmit: (values) => {
       

      
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          history.push("/signup");
        }, 5000);
       
    },
  });

  return (
    <div className="flex flex-row justify-evenly h-screen">
      {!loading && (
        <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3  ">
          <h1 className="text-blue-900 font-bold text-4xl">Sign Up</h1>

          <div className="h-11 mt-7 flex flex-row border border-red-300 justify-evenly items-center md:w-3/5 ">
            <img className="w-8 " src={google} alt="" />
            <img className="w-11 " src={linkedin} alt="" />
            <img className="w-11 " src={insta} alt="" />
            <img className="w-1/5 " src={twitter} alt="" />
          </div>

          <div className="flex mt-5 ">
            <div className=" mt-2 grid grid-cols-1 w-1/2 divide-y divide-yellow-500">
              <p></p>
              <hr className="white" />
            </div>
            <p className="text-red-500 font-bold">or</p>

            <div className=" mt-2 grid grid-cols-1 w-1/2 divide-y divide-yellow-500">
              <p></p>
              <hr className="white" />
            </div>
          </div>

          <form
            className="w-full md:w-3/5"
            action=""
            onSubmit={formik.handleSubmit}
          >
              <div className="test relative w-full flex flex-col ">
              <label className="text-blue-900 font-medium" htmlFor="name">
                Name
              </label>

              <input
                className="  w-full border-t-0 -mt-1 border-b  border-blue-900 focus:outline-none"
                id="name"
                type="text"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <div className=" absolute top-6 left-0 text-red-600">
                {formik.touched.name && formik.errors.name}
              </div>
            </div>
            <div className="test relative w-full flex flex-col ">
              <label className="text-blue-900 font-medium" htmlFor="email">
                Email
              </label>

              <input
                className="  w-full border-t-0 -mt-1 border-b  border-blue-900 focus:outline-none"
                id="email"
                type="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className=" absolute top-6 left-0 text-red-600">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>

            <div className="test flex flex-col">
              <label className="text-blue-900 font-medium" htmlFor="email ">
                Password
              </label>
              <input
                className="border-t-0 -mt-1 border-b  border-blue-900 focus:outline-none"
                id="password"
                type="password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div className=" text-red-600">
                {formik.touched.password && formik.errors.password}
              </div>
            </div>

            <button
              className="bg-blue-900 text-white font-bold w-full mt-7 h-10"
              type="submit"
            >
              Sign in
            </button>
          </form>

          <p className="w-full md:w-3/5 ">
            already have an account?{" "}
            <span className="text-red-500 font-bold">Log in</span>
          </p>
        </div>
     
      
     )}
     </div>
   );
 }
 
