/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import NoActiveSubscription from "../../components/NoActiveSub";
import { BlankAppointment, Appointments } from "../../components/index";
import { dummyAppointments } from "../../constants";

const Body = () => {
  const [appointments, setAppointment] = useState([]);
  useEffect(() => {
    // simulating what actual api call will look like
    console.log("Setting appointtment :");
    setTimeout(() => {
      setAppointment(dummyAppointments);
    }, 2000);
  }, []);

  return (
    <div className="">
      {appointments.length === 0 ? (
        <BlankAppointment />
      ) : (
        <Appointments appointments={appointments} />
      )}
    </div>
  );
};

export default Body;
