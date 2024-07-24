import { NavBar } from "../sections/Dashboard";
import { useState, useEffect } from "react";
import Loading from "../components/loading";
import { BackgroudImage } from "../assets/img";

const ManageAppointment = () => {
  const [loading, setLoading] = useState(true);
  const [desc, setDesc] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleDateChange = (e) => {
    const { value } = e.target;
    setNewDate(formattedDate(value));
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
              <h2 className="text-base">Your Appointment</h2>
              <p className="text-grayColor font-thin pt-2">
                Welcome champ , manage your scheduled appointment here!
              </p>
              <h1 className="text-xl mt-12">Review Appointment</h1>
              <form className="w-full max-w-sm">
                <div className="flex mt-5 items-center border-b border-grayColor py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight outline-none focus:border-transparent focus:ring-0"
                    type="text"
                    placeholder=" Change Description"
                    aria-label="Full name"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                <div className="flex mt-10 items-center border-b border-grayColor py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-0 focus:ring-0"
                    type="datetime-local"
                    id="appointmentDateTime"
                    name="appointmentDateTime"
                    defaultValue="2023-07-15T14:30"
                    onChange={handleDateChange}
                  />
                </div>
                <div className="mt-6">
                  <p className="pb-5 pt-4">
                    You are booking a new appointment with Nkunzi: <br />
                    {newDate}
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
                    <a
                      href="#"
                      className="dark:text-checkColor"
                    >
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

export default ManageAppointment;
 const formattedDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};
