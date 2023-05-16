import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

const Sidebar = () => {
  return (
    // wrap
    <div
      className="h-full flex flex-col w-56 bg-white py-14"
      style={{
        fontFamily: "Poppins",
      }}
    >
      {/* title */}
      <div className="text-secondary font-medium text-2xl px-7">
        <p>Sales.</p>
      </div>
      {/* side tabs wrap */}
      <div
        className="flex flex-col gap-5 py-10 px-10"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {/* side tabs */}
        <div className="flex gap-4">
          <MdOutlineDashboard size={20} />
          <p>Dashboard</p>
        </div>
        <div className="flex gap-4">
          <SiTestcafe size={20} />
          <p>Lab Test</p>
        </div>
        <div className="flex gap-4">
          <AiOutlineSchedule size={20} />
          <p>Appointment</p>
        </div>
        <div className="flex gap-4">
          <BsFillBagCheckFill size={20} />
          <p>Medicine Order</p>
        </div>
        <div className="flex gap-4">
          <AiOutlineMessage size={20} />
          <p>Message</p>
        </div>
        <div className="flex gap-4">
          <MdPayment size={20} />
          <p>Payment</p>
        </div>
        <div className="flex gap-4">
          <AiOutlineSetting size={20} />

          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
