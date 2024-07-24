/* eslint-disable no-unused-vars */
import { NavBar } from "../sections/Dashboard";
import { useState, useEffect } from "react";
import Loading from "../components/loading";
import { BackgroudImage } from "../assets/img";
import { planCodes } from "../constants";


const CreateSubscription = () => {
  const [loading, setLoading] = useState(true);
  const [newDate, setNewDate] = useState("");
  const [desc, setDesc] = useState("");
  const [planId, setPlanId] = useState("");
  const [amount, setAmount] = useState(0);

  const handlePlanChange = (e) => {
    const { value } = e.target;
    switch (value) {
      case "Yearly":
        setPlanId(planCodes.Yearly);
        setAmount(21000);
        break;
      case "Monthly":
        setPlanId(planCodes.Monthly);
        setAmount(250000);
        break;
      default:
        setAmount(0);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="font-display">
          <section>
            <NavBar />
          </section>
          <section className="w-screen mt-24 relative">
            <img
              src={BackgroudImage}
              alt="barber barbing"
              className="w-screen h-72 md:h-[300px] object-cover rounded-lg z-10"
            />
          </section>
          <section className="bg-bgLight -mt-[30px] flex justify-center z-20 md:ml-48 md:-mt-[220px]">
            <div className="absolute bg-bgLight p-10 rounded-lg z-20">
              <h2 className="text-xl tracking-wider">Subscribe Now !</h2>
              <p className="text-grayColor text-sm font-thin pt-2 tracking-wider">
                Subscribe to your preferred Plan today.
              </p>
              <form className="w-full max-w-sm">
                <div className="flex mt-5 items-center border-b border-grayColor py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight outline-none focus:ring-0 focus:border-transparent"
                    type="email"
                    placeholder="maktee@gmail.com"
                    name="Email"
                    aria-label="Email"
                    value={desc}
                    disabled
                  />
                </div>
                <div className="flex mt-8 items-center border-b border-grayColor py-2">
                  <select
                    onChange={handlePlanChange}
                    className="ppearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight outline-none focus:ring-0 focus:border-transparent"
                  >
                    <option value="">Choose A Plan</option>
                    <option>Yearly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div className="flex mt-5 items-center border-b border-grayColor py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight outline-none focus:ring-0 focus:border-transparent"
                    type="text"
                    placeholder={amount}
                    name="Amount"
                    aria-label=""
                    value={amount}
                  />
                </div>
                <div className="mt-6">
                  <p className="pb-5 pt-4">
                    You have choosen to Subscribe to a Plan : <br />
                    {}
                  </p>
                </div>
                <div className="flex items-center pt-2 pb-11 h-5 ">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-black checked:bg-black"
                    required
                  />
                  <label className="ml-2 text-sm font-medium text-gray-900">
                    I agree with the{" "}
                    <a href="#" className="dark:text-checkColor">
                      Terms and conditions.
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-[90%] flex mt-4 justify-center py-3 px-4 border-1 bg-black border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-slate-800 hover:scale-2 text-white md:w-[100%] "
                  onClick={onSubmit}
                >
                  Confirm
                </button>
              </form>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CreateSubscription;
