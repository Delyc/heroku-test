import React, { useState } from "react";
import { useFormik } from "formik";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";

import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function NewPassword() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const [loading, setLoading] = useState(false);

  

  const formik = useFormik({
    initialValues:{
        newpassword: "",
        confirmpassword: "",
    },
    validationSchema: Yup.object({
      newpassword: Yup.string("New passwprd is required").required("Required"),
      confirmpassword: Yup.string("confirm password").required("Required").oneOf([Yup.ref('newpassword'), null],'Password must match')
    }),
    onSubmit: (values) => {
       

      
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          history.push("/login");
        }, 5000);
       
    },
  });

  return (
    <div className="flex flex-row justify-evenly h-screen">
      {!loading && (
        <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3  ">
          


          <form
            className="w-full md:w-3/5"
            action=""
            onSubmit={formik.handleSubmit}
          >
            <div className="test relative w-full flex flex-col ">
              <label className="text-blue-900 font-medium" htmlFor="password">
                New Password
              </label>

              <input
                className="  w-full border-t-0 -mt-1 border-b  border-blue-900 focus:outline-none"
                id="newpassword"
                type="password"
                name="newpassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className=" absolute top-6 left-0 text-red-600">
                {formik.touched.newpassword && formik.errors.newpassword}
              </div>
            </div>

            <div className="test flex flex-col">
              <label className="text-blue-900 font-medium" htmlFor="password ">
                Confirm password
              </label>
              <input
                className="border-t-0 -mt-1 border-b  border-blue-900 focus:outline-none"
                id="confirmpassword"
                type="password"
                name="confirmpassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.confirmpassword}
              />
              <div className=" text-red-600">
                {formik.touched.confirmpassword && formik.errors.confirmpassword}
              </div>
            </div>

            <button
              className="bg-blue-900 text-white font-bold w-full mt-7 h-10"
              type="submit"
            >
             Reset
            </button>
          </form>

          
        </div>
      )}

      {loading && (
        <div className="flex flex-row justify-evenly h-screen bg-gray-600 w-screen">
          <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3  ">
            <h1 className=" bg-gray-500 text-gray-500 w-full">Sign up</h1>

            <div className="h-11 mt-7 flex flex-row justify-evenly items-center md:w-3/5 bg-gray-500 text-gray-500">
              <img className="w-8 bg-gray-500 hidden" src={google} alt="" />
              <img className="w-11 hidden" src={linkedin} alt="" />
              <img className="w-11 hidden" src={insta} alt="" />
              <img className="w-1/5 hidden" src={twitter} alt="" />
            </div>

            <div className="flex mt-5 ">
              <div className=" mt-2 grid grid-cols-1 w-1/2 divide-y divide-yellow-500">
                <p></p>
                <hr className="white" />
              </div>
              <p className="text-red-500 font-bold bg-gray-500 text-gray-500">or</p>

              <div className=" mt-2 grid grid-cols-1 w-1/2 divide-y divide-yellow-500 bg-gray-500 text-gray-500">
                <p></p>
                <hr className="white" />
              </div>
            </div>

            <form
              className="w-full md:w-3/5"
              action=""
              onSubmit={formik.handleSubmit}
            >
              <div className="test relative w-full flex flex-col bg-gray-500 text-gray-500 ">
                <label className="text-blue-900 font-medium bg-gray-500 text-gray-500" htmlFor="email">
                  Email
                </label>

                <input
                  className="  w-full border-t-0 -mt-1 border-b  border-blue-900 focus:outline-none bg-gray-500 text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div className=" absolute top-6 left-0 text-red-600 bg-gray-500 text-gray-500">
                  {formik.touched.newpassword && formik.errors.newpassword}
                </div>
              </div>

              <div className="test flex flex-col bg-gray-500 text-gray-500">
                <label className="text-blue-900 font-medium bg-gray-500 text-gray-500" htmlFor="email ">
                  Password
                </label>
                <input
                  className="border-t-0 -mt-1 border-b  border-blue-900 bg-gray-500 text-gray-500 focus:outline-none"
                  id="confirmpassword"
                  type="password"
                  name="confirmpassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.confirmpassword}
                />
                <div className=" text-red-600">
                  {formik.touched.confirmpassword && formik.errors.confirmpassword}
                </div>
              </div>

              <button
                className="bg-gray-500 text-gray-500 font-bold w-full mt-7 h-10"
                type="submit"
              >
                Sign in
              </button>
            </form>

           
          </div>
        </div>
      )}
    </div>
  );
}
