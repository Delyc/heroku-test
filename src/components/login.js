import React, { useState } from "react";
import { useFormik } from "formik";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../assets/google.png";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  /*  ======================================== Google auth ====================================================== */
  const clientId =
    "583371354557-oj2mn29eih6004btma89tba8f50s52k7.apps.googleusercontent.com";

  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login success:", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const onFailureSuccess = (res) => {
    console.log("login failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("you have been signed out successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
    history.push("/login");
  };

  /* ============================ Google auth render button ========================================*/

  function googlebutton(renderProps) {
    return (
      <button
        className="h-full flex items-center shadow-6xl text-blue-900 font-semibold "
        onClick={() => renderProps.onClick()}
      >
        <img className="w-7 mr-2 " src={google} alt="" />
        Sign up with google
      </button>
    );
  }

  function googleskeletonbutton(renderProps) {
    return (
      <button
        className="h-full flex items-center shadow-6xl text-blue-200 font-semibold text-text"
        onClick={() => renderProps.onClick()}
      > 
      <div className="w-7 h-7 rounded-full bg-gray-200 mr-2 ">
        <img
          
          src={google} hidden
          alt=""
        />
        </div>
        <div className="bg-gray-200 rounded-lg text-gray-200">
        Sign up with google
        </div>
      </button>
    );
  }

  /*================================================  Validation ==========================================*/

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Email is required"),
      password: Yup.string("confirm password").required("Password is required"),
    }),


    /* ======================================Submti function ============================*/
    onSubmit: (values) => {
      setLoading(true);
      toast.info("Signed in successfully");

      setTimeout(() => {
        setLoading(false);

        history.push("/signup");
      }, 5000);
    },
  });



  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <>
        <ToastContainer />
      </>

      {!loading && (
        <div className="flex flex-col justify-center items-center  md:w-1/3   ">
          <h1 className="text-blue-200 text-center font-bold text-4xl">
            Sign Up
          </h1>

          {/* ============================= google login ======================================= */}

          <div className="h-9 mt-7 flex flex-row  w-full md:w-3/5 border border-red-100 justify-evenly items-center  ">
            {showLoginButton ? (
              <GoogleLogin
                clientId={clientId}
                render={googlebutton}
                onSuccess={onLoginSuccess}
                onFailure={onFailureSuccess}
                cookiePolicy={"single_host_origin"}
              />
            ) : null}

            {showLogoutButton ? (
              <GoogleLogout
                clientId={clientId}
                buttonText=""
                onLogoutSuccess={onSignoutSuccess}
              ></GoogleLogout>
            ) : null}
          </div>

          <div className="flex mt-5 ">
            <div className=" mt-2 grid grid-cols-1 w-1/5 mr-10 divide-y-2 divide-blue-200">
              <p></p>
              <hr className="white" />
            </div>
            <p className="text-red-200 font-bold">or</p>

            <div className=" mt-2 grid grid-cols-1 w-1/5 ml-10 divide-y-2 divide-blue-200">
              <p></p>
              <hr className="white" />
            </div>
          </div>

          {/* ============================= form ================================================ */}

          <form
            className="w-full md:w-3/5"
            action=""
            onSubmit={formik.handleSubmit}
          >
            <div className="test relative w-full flex flex-col ">
              <label className="text-blue-200  font-medium" htmlFor="email">
                Email
              </label>

              <input
                className="  w-full border-t-0 -mt-1 border-b  border-blue-200 focus:outline-none"
                id="email"
                type="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className=" absolute top-7 left-0 text-red-200 text-sm">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>

            <div className="test relative w-full flex flex-col">
              <label className="text-blue-900 font-medium" htmlFor="email ">
                Password
              </label>
              <input
                className=" w-full border-t-0 -mt-1 border-b  border-blue-200 focus:outline-none"
                id="password"
                type="password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div className=" absolute top-6 left-0 text-red-200 text-sm">
                {formik.touched.password && formik.errors.password}
              </div>
            </div>

            <button
              className="bg-blue-200 text-white font-bold w-full mt-7 h-9"
              type="submit"
            >
              Sign in
            </button>
          </form>

          <p className="w-full md:w-3/5 ">
            don't have an account?{" "}
            <span className="text-red-200 font-bold">Sign up</span>
          </p>
        </div>
      )}

      {/*================================================== Skeleton ======================================================*/}

      {loading && (
        <div className="flex flex-row justify-evenly h-screen bg-gray-100 animate-pulse  rounded-lg w-screen">
          <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3  ">
            <h1 className="text-gray-200 bg-gray-300 animate-pulse  rounded-lg font-bold h-6 w-5/6"></h1>

            <div className="h-9 mt-7 flex flex-row w-full justify-evenly items-center md:w-3/5 ">
              {showLoginButton ? (
                <GoogleLogin
                  clientId={clientId}
                  render={googleskeletonbutton}
                  onSuccess={onLoginSuccess}
                  onFailure={onFailureSuccess}
                  cookiePolicy={"single_host_origin"}
                />
              ) : null}

              {showLogoutButton ? (
                <GoogleLogout
                  clientId={clientId}
                  buttonText=""
                  onLogoutSuccess={onSignoutSuccess}
                ></GoogleLogout>
              ) : null}
            </div>

            <div className="flex mt-5 ">
              <div className=" mt-2 grid grid-cols-1 w-1/2 divide-y divide-yellow-500">
                <p></p>
                <hr className="white" />
              </div>
              <p className="text-gray-300 bg-gray-300 animate-pulse  w-10 font-bold">or</p>

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
                <label className="text-gray-300 bg-gray-300 animate-pulse  rounded-lg mt-2 h-2 w-1/3 font-medium" htmlFor="email">
                  
                </label>

                <input
                  className=" animate-pulse flex space-x-4 h-4 bg-gray-300 text-gray-300 rounded-lg mt-2 font-medium "
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

              <div className=" test relative w-full flex flex-col">
            
                <label className="text-gray-300 bg-gray-300 animate-pulse  rounded-lg mt-2 h-2 w-1/3 font-medium" htmlFor="email">
              
             
                </label>
                <input
                  className="text-gray-300 bg-gray-300 animate-pulse h-4  rounded-lg mt-2 font-medium"
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
                className="bg-gray-300 animate-pulse  rounded-lg h-4 font-bold w-full mt-7 h-9"
                type="submit"
              ></button>
            </form>

            <p className="w-full mt-3 rounded-lg md:w-3/5 bg-gray-300 animate-pulse h-5 ">
              {" "}
              <span className=" bg-gray-300 animate-pulse  h-5 font-bold"></span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
