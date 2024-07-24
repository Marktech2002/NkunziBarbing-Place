import { Barbingbarber } from "../assets/img";
import { Link } from "react-router-dom";
const Appointments = ({ appointments }) => {
  const appointmentDate = appointments[1].appointmentDate;
  const dateObj = new Date(appointmentDate);
  const dateString = dateObj.toDateString();
  const timeString = dateObj.toLocaleTimeString();
  console.log(dateObj.toLocaleTimeString(), dateObj.toDateString());
  return (
    <>
      <div className="mt-[110px] mr-3 font-display flex flex-col justify-center items-center space-x-6 max-w-screen-xl md:items-start md:ml-16 md:flex-row">
        <div className="w-fit ">
          <h2 className="text-xl font-semibold tracking-wide leading-8">
            Upcoming Appointments
            <span className="bg-white px-2.5 ml-3 py-0.5 rounded-full">
              {`${appointments.length}`}
            </span>
          </h2>
          {appointments.map((appointment) => (
            <div
              key={appointment.userId}
              className="flex gap-8 mt-10 md:ml-3 items-center justify-center px-4 md:pl-8 md:pr-24 py-4 border-2 border-black border-opacity-25 rounded-lg shadow-lg hover:shadow-tomatoColor"
            >
              <img
                src={Barbingbarber}
                width="90px"
                className="rounded-lg"
                alt=""
              />
              <div className="" key={appointment.userId}>
                <p className="text-grayColor">{`${dateString} , ${timeString}`}</p>
                <p>{appointment.description}</p>
                <p className="text-grayColor">Nkunzi Barbering Shop</p>
              </div>
            </div>
          ))}
        </div>
        {/* left side */}
        <div className="mt-10 px-4 py-9 mb-5 border-1 w-fit border-b-2 border-t-2 border-r-2 rounded-lg shadow-lg md:p-6 md:max-w-[600px]">
          <div className="flex items-center gap-2 bg-tomatoColor w-fit px-5 py-1 rounded-full">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#252525">
                <path d="M6.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2 2c.2.2.4.3.7.3.3 0 .5-.1.7-.3l7-7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L8 7.6 6.7 6.3z"></path>
                <path d="M8 15c3.9 0 7-3.1 7-7 0-.6-.4-1-1-1s-1 .4-1 1c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5c.6 0 1.1.1 1.7.3.5.2 1.1-.1 1.3-.6.2-.5-.1-1.1-.6-1.3C9.6 1.1 8.8 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7z"></path>
              </g>
            </svg>
            <text x="20" y="14">
              Confirmed
            </text>
          </div>
          <h2 className="text-2xl my-8 font-semibold tracking-wide leading-8">
            {`${dateString} at ${timeString}`}
          </h2>

          {/*  */}
          <div className="flex items-center gap-[80px]">
            <p>
              Nkunzi Barbing Salon
              <br />
              <span className="text-tomatoColor underline cursor-pointer">
                {" "}
                15 Pluto Road, Zeh Nation Way, UAR .
              </span>
            </p>
            <img
              src={Barbingbarber}
              width="100px"
              className="rounded-lg md:ml-[165px] "
              alt=""
            />
          </div>
          <Link to="/appointments/manage">
            <p className="border-2 px-12 mt-10 py-2.5 md:px-24 w-fit rounded-lg hover:border-black ">
              Manage Appointment
            </p>
          </Link>

          {/*  */}
          <h1 className="mt-11 text-xl font-semibold">Appointment Details</h1>
          <table className="table-auto border-separate border-spacing-8 border-b border-slate-500">
            <tbody>
              <tr>
                <td className="border-b md:tracking-wider md:text-lg border-slate-400">
                  {appointments[1].description}
                </td>
                <td className="truncate font-bold md:pl-20"> NGN 25K/250K </td>
              </tr>
              <tr>
                <td className="border-b md:tracking-wider md:text-lg border-slate-400">
                  Subscription Status :{" "}
                </td>
                <td className="font-bold md:pl-20"> Active </td>
              </tr>
            </tbody>
            <td className="text-grayColor truncate">
              {" "}
              Booking Ref: <span className="inline">B32EJDCM</span>
            </td>
          </table>

          <h1 className="mb-2 mt-[70px] text-xl font-semibold">
            Cancellation Policy{" "}
          </h1>
          <p className="my-5">
            Please avoid cancelling within 12 hours of your appointment
          </p>
          <h1 className="mb-5 mt-11 text-xl font-semibold">Important Info </h1>
          <p>
            We require you to treate the appointmet with urgency . Your
            subscription already validates your booking. Incase you are rich
            like mad. Drop something for boys Stanbic bank 0028870220. Thanks.
          </p>
        </div>
      </div>
    </>
  );
};

export default Appointments;
