/* eslint-disable no-unused-vars */
import { LoginImage } from "../assets/img";
import { Link } from "react-router-dom";
import Loading from "../components/loading";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../feature/auth/authActions";

const Register = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { firstName, secondName, email, password, confirmPassword } = user;
  const { loadings, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // preloader
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //redirect effect
  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [navigate, userInfo, success]);
 
  const onSubmit = (e) => {
    e.preventDefault();
    /* check if empty fields */
    if (
      firstName.trim() === "" ||
      secondName.trim() == "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      toast("Kindly fill in all credentials!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        className:
          "text-black w-64 font-thin mx-auto font-display border-b-4 border-red-500 tracking-wide",
      });
    }
    // if password matches
    else if (password !== confirmPassword) {
      toast("Password does not match", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        className:
          "text-black w-64 font-thin mx-auto font-display border-b-4 border-red-500 tracking-wide",
      });
    } else {
      console.log("Dispatching the credentials", {
        firstName,
        secondName,
        email,
        password,
      });
      dispatch(registerUser({ firstName, secondName, email, password }));
    }
  };
  return (
    <section
      id="Register"
      className="absolute z-50 bg-white w-screen h-screen overflow-x-hidden"
    >
      {loading ? (
        <Loading />
      ) : (
        <div className="">
          <Link to="/">
            <p className="font-semibold font-display ml-4 mt-9 text-3xl">
              <span className="text-bgColor">▼</span>NKUNZI
            </p>
          </Link>
          <div className="mt-[20px] flex flex-col justify-center items-center md:block md:ml-[290px] md:mt-5 font-display">
            <h2 className="font-bold text-[20px] md:text-[30px]">
              {" "}
              ©️N K U N Z I
            </h2>
            <p className="md:ml-7 leading-4 text-bgColor">
              Make Unique , Styles..
            </p>
          </div>
          {/* form section */}
          <form action="" className="ml-7 md:ml-[100px]" autoComplete="off">
            <h3 className="md:ml-10 font-medium text-2xl mt-9 md:mt-12 font-display">
              Sign up or register
            </h3>
            <div className="md:ml-10 mt-6">
              <label className="block">
                <span className="block text-sm font-medium">First Name *</span>
              </label>
              <input
                type="text"
                value={firstName}
                name="firstName"
                onChange={onChange}
                className="peer ... border-2 focus:outline-none py-2.5 pl-3.5 w-[90%] rounded-lg  focus:border-bgColor md:w-[34%]"
                required
              />
              <p className="mt-1 invisible peer-invalid:visible text-pink-500 text-sm">
                First Name is required
              </p>
            </div>
            <div className="md:ml-10">
              <label className="block">
                <span className="block text-sm font-medium">Last Name *</span>
              </label>
              <input
                type="text"
                value={secondName}
                name="secondName"
                onChange={onChange}
                className="peer ... border-2 focus:outline-none py-2.5 pl-3.5 w-[90%] rounded-lg  focus:border-bgColor md:w-[34%]"
                required
              />
              <p className="mt-1 invisible peer-invalid:visible text-pink-500 text-sm">
                Last Name is required
              </p>
            </div>
            <div className="md:ml-10">
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Email *
                </span>
              </label>
              <input
                type="email"
                value={email}
                name="email"
                onChange={onChange}
                className="peer ... border-2 focus:outline-none py-2.5 pl-3.5 w-[90%] rounded-lg  focus:border-bgColor md:w-[34%]"
                required
              />
              <p className="mt-1 invisible peer-invalid:visible text-pink-500 text-sm">
                Please provide a valid email address.
              </p>
            </div>
            <div className="md:ml-10">
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Password *
                </span>
              </label>
              <input
                type="password"
                value={password}
                name="password"
                onChange={onChange}
                className="peer ... border-2 focus:outline-none py-2.5 pl-3.5 w-[90%] rounded-lg  focus:border-bgColor md:w-[34%]"
                required
              />
              <p className="mt-1 invisible peer-invalid:visible text-pink-500 text-sm">
                Password is required
              </p>
            </div>
            <div className="md:ml-10">
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Confirm Password *
                </span>
              </label>
              <input
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={onChange}
                className="peer ... border-2 focus:outline-none py-2.5 pl-3.5 w-[90%] rounded-lg  focus:border-bgColor md:w-[34%]"
                required
              />
              <p className="mt-1 invisible peer-invalid:visible text-pink-500 text-sm">
                Confirm Password is required
              </p>
            </div>
            <div className="flex items-center h-5 mt-4 md:ml-10">
              <input
                id="terms"
                type="checkbox"
                className="h-5 w-5 rounded border-checkColor text-indigo-600 focus:ring-checkColor"
                required
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree with the{" "}
                <a
                  href="#"
                  className="text-checkColor hover:underline dark:text-checkColor"
                >
                  Terms and conditions.
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-[90%] mt-8 mb-5 flex justify-center py-3 px-4 border-1 bg-black border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-slate-800 hover:scale-2 text-white md:w-[34%] md:ml-10"
              onClick={onSubmit}
            >
              Continue
            </button>
          </form>
          {/* sider image */}
          <div className="hidden md:block absolute top-0 right-0">
            {/* This content will be shown on screens of medium (md) size and larger */}
            <img src={LoginImage} alt="" className="w-[800px] h-screen" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Register;
