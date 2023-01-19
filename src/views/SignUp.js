import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignFild from "../components/SignFild";
import validate from "../components/validate";
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
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
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify("error");
    }
  };
  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touch]);
  return (
    <div className=" text-center flex justify-center items-center bg-gray-200 h-screen">
      <form
        onSubmit={submitHndler}
        className=" border border-gray-400 md:w-[45%] w-full rounded-lg h-fit p-16 bg-white"
      >
        <h2 className="font-bold text-right text-4xl text-blue-500  mb-6">
          ثبت نام
        </h2>
        <SignFild
          type="text"
          name="name"
          lablename="نام کاربری"
          value={data.name}
          onchange={changeHandler}
          errors={errors}
          touch={touch}
          onFocus={focusHandler}
        />
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
        <SignFild
          type="password"
          name="confirmPassword"
          lablename="رمز وزود"
          value={data.confirmPassword}
          onchange={changeHandler}
          errors={errors}
          touch={touch}
          onFocus={focusHandler}
        />

        <div className="flex justify-between w-full mt-8">
          <Link className="font-bold text-lg mt-2 text-blue-500" to={"/signin"}>
            ورود
          </Link>

          <button
            type="submit"
            className="text-lg bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            ثبت نام
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
