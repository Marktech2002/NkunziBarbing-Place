/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
const BlankAppointment = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-64 ml-10 font-display ">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="103" height="86">
            <g fill="none">
              <path fill="#FBD74C" d="M1 1h57v57H1z"></path>
              <path
                fill="#101928"
                d="M72.4 53.9c8.781 0 15.9 7.119 15.9 15.9s-7.119 15.9-15.9 15.9-15.9-7.119-15.9-15.9 7.119-15.9 15.9-15.9zm0 3c-7.124 0-12.9 5.776-12.9 12.9 0 7.124 5.776 12.9 12.9 12.9 7.124 0 12.9-5.776 12.9-12.9 0-7.124-5.776-12.9-12.9-12.9zM69 12.3a1.5 1.5 0 011.5 1.5v4.9h9.7a6.3 6.3 0 016.296 6.069L86.5 25v25.62a1.5 1.5 0 01-2.993.144l-.007-.145V37.7H19.3V73a3.3 3.3 0 003.113 3.295l.187.005h26.9a1.5 1.5 0 01.144 2.993l-.144.007H22.6a6.3 6.3 0 01-6.296-6.069L16.3 73V25a6.3 6.3 0 016.069-6.296l.231-.004h9.7v-4.9a1.5 1.5 0 011.356-1.493l.144-.007a1.5 1.5 0 011.493 1.356l.007.144v4.9h32.2v-4.9a1.5 1.5 0 011.356-1.493zm-36.7 9.4h-9.7a3.3 3.3 0 00-3.295 3.113L19.3 25v9.7h64.2V25a3.3 3.3 0 00-3.113-3.295L80.2 21.7h-9.7v4.9a1.5 1.5 0 01-1.356 1.493L69 28.1a1.5 1.5 0 01-1.5-1.5v-4.9H35.3v4.9a1.5 1.5 0 01-1.356 1.493l-.144.007a1.5 1.5 0 01-1.493-1.356L32.3 26.6v-4.9z"
              ></path>
              <path
                stroke="#101928"
                d="M75.994 66.323l-6.788 6.788m0-6.788l6.788 6.788"
              ></path>
            </g>
          </svg>
        </div>
        <p>Opps No appointments..</p>
        <p className="text-center leading-[24px] mt-3 min-w-0 text-grayColor mr-2 md:text-[20px]">
          You don't have upcoming appointments. Once you do, they'll show up
          here. Now get booking!.
        </p>
      </div>
      {/* check if subscribed here */}
      <Link to="/appointments">
        <p className="px-5 py-3.5 text-lg mx-auto mt-8 text-white w-max leading-none rounded-lg hover:bg-bgLight hover:text-black bg-black font-display">
          BOOK AN APPOINTMENT
        </p>
      </Link>
    </>
  );
};

export default BlankAppointment;
