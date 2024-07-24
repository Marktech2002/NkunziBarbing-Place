/* eslint-disable no-unused-vars */
import { LoginImage } from "../assets/img";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/loading";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../feature/auth/authActions";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword } = user;
  const { loadings, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast("Kindly fill in all credentials!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        className:
          "text-black w-64 font-thin mx-auto font-display border-b-4 border-red-500 tracking-wide",
      });
    } else if (password.trim() !== confirmPassword.trim()) {
      toast("Passwords do not match", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        className:
          "text-black w-64 font-thin mx-auto font-display border-b-4 border-red-500 tracking-wide",
      });
    } else {
      console.log("Dispatching the login credntials");
      dispatch(loginUser({ email, password }));
    }
  };
  return (
    <section id="Login" className="absolute z-50 bg-white w-screen h-[100%]">
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
          <form action="" className="ml-7 md:ml-[100px]">
            <h3 className="md:ml-10 font-medium text-2xl mt-9 md:mt-12 font-display">
              Sign in or Login
            </h3>
            <div className="md:ml-10 mt-4">
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
              className="w-[90%] mt-8 flex justify-center py-3 px-4 border-1 bg-black border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-slate-800 hover:scale-2 text-white md:w-[34%] md:ml-10"
              onClick={onSubmit}
            >
              Continue
            </button>
          </form>
          <Link to="/">
            {" "}
            <FaArrowLeft className="ml-8 mt-5 text-[30px] md:ml-32 md:mt-4" />
          </Link>

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

export default Login;
