import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
const Topbar = () => {
  return (
    <div className=" flex justify-between  h-12  w-full px-10 py-14 ">
      <div class=" gap-6 relative   ">
        <span className="absolute flex items-center p-3">
          <RiSearchLine className="text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Search"
          class="border border-gray-300 px-9 py-2 rounded-sm focus:outline-none w-[600px] "
        />
      </div>
      <div className=" ">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.02 1.10352C6.34002 1.10352 3.36002 4.08352 3.36002 7.76352V9.86352C3.36002 10.5435 3.08002 11.5635 2.73002 12.1435L1.46002 14.2635C0.68002 15.5735 1.22002 17.0335 2.66002 17.5135C7.44002 19.1035 12.61 19.1035 17.39 17.5135C18.74 17.0635 19.32 15.4835 18.59 14.2635L17.32 12.1435C16.97 11.5635 16.69 10.5335 16.69 9.86352V7.76352C16.68 4.10352 13.68 1.10352 10.02 1.10352Z"
            stroke="#ADA7A7"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>

        {/* <AiOutlineBell size={20} className=" p-4 rounded-sm bg-white" /> */}
      </div>
    </div>
  );
};

export default Topbar;
