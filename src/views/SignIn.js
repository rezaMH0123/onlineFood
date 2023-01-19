import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import SignFild from "../components/SignFild";
import validate from "../components/validate";
const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});

  const notify = (type) => {
    if (type == "success") {
      toast.success("Wow so easy!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Please fill in all the blanks", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };
  const submitHndler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success");
    } else {
      setTouch({
        email: true,
        password: true,
      });
      notify("error");
    }
  };
  useEffect(() => {
    setErrors(validate(data, "signin"));
  }, [data, touch]);
  return (
    <div className="text-center flex justify-center items-center bg-gray-200 h-screen">
      <form
        onSubmit={submitHndler}
        className="border border-gray-400 md:w-[45%] w-full rounded-lg h-fit p-16 bg-white "
      >
        <h2 className="font-bold text-right text-4xl text-blue-500  mb-6">
          ورود
        </h2>
        <SignFild
          type="text"
          name="email"
          lablename="ایمیل"
          value={data.email}
          onchange={changeHandler}
          errors={errors}
          touch={touch}
          onFocus={focusHandler}
        />
        <SignFild
          type="password"
          name="password"
          lablename="رمز وزود"
          value={data.password}
          onchange={changeHandler}
          errors={errors}
          touch={touch}
          onFocus={focusHandler}
        />
        <div className="flex justify-between w-full mt-8">
          <Link className="font-bold text-lg mt-2 text-blue-500" to={"/signup"}>
            ثبت نام
          </Link>
          <button
            type="submit"
            className="text-lg bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            ورود
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
