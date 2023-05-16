import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Appointment from "./pages/Appointment";
import LabTest from "./pages/LabTest";
import MedicineOrder from "./pages/MedicineOrder";
import Message from "./pages/Message";
import Payment from "./pages/Payment";
import Settings from "./pages/Settings";



function App() {
  return (
    <div className="h-screen w-screen flex bg-primary ">
      <Router>
        <Sidebar />
        <div className="flex flex-col w-full h-full ">
          <Topbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/labtest" element={<LabTest />} />
            <Route path="/medicineorder" element={<MedicineOrder />} />
            <Route path="/message" element={<Message />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
