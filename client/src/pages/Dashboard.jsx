import { NavBar, Body , FooterDashboard} from "../sections/Dashboard/index";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import { dummyAppointments } from "../constants";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [hasPendingAppointments, setHasPendingAppointments] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    if (dummyAppointments.length > 0) {
        setHasPendingAppointments(true);
      }
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <section>
            <NavBar />
          </section>
          <section className="mb-64x">
            <Body />
          </section>
          <section className="">
            {!hasPendingAppointments && <FooterDashboard />}
          </section>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
