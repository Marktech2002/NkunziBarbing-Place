/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ManageAppointment from "./pages/manageAppointment";
import Subscribe from "./pages/subscribe";
import CreateAppointment from "./pages/CreateAppointment";
import NotFound from "./components/Notfound";
import CreateSubscription from "./pages/CreateSubscription";


function App() {
  return (
    <>
      <Router>
        <div className="container overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/appointments" element={<Dashboard/>}> </Route>
            <Route path="/appointment/create" element={<CreateAppointment/>}></Route>
            <Route path="/appointments/manage" element={<ManageAppointment/>}></Route>
            <Route path="/subscription" element={<Subscribe/>}> </Route>
            <Route path="/subscribe" element={<CreateSubscription />}> </Route>
            <Route path="*" element={ <NotFound />}> </Route>
          </Routes>
        </div>
      </Router> 
    </>
  );
}

export default App;
