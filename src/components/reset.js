import React, { useState } from "react";
import { useFormik } from "formik";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";

import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function Reset() {
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
          history.push("/newPassword");
        }, 5000);
       
    },
  });

  return (
    <div className="flex flex-row justify-evenly h-screen">
      
      {!loading && (
          
        <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3  ">
          

          

        

          <form
            className="w-full md:w-3/5 mt-5"
            action=""
            onSubmit={formik.handleSubmit}
          >
              
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

           
            <button
              className="bg-blue-900 text-white font-bold w-full mt-7 h-10"
              type="submit"
            >
           send
            </button>
          </form>

          
        </div>
     
      
     )}
     </div>
   );
 }
 
