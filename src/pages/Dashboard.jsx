import React from "react";
import Table from "../components/Table";
const Dashboard = () => {
  const items = [
    {
      title: "Customer",
      placeholder: "Enter Customer Name",
    },
    {
      title: "Invoice ID",
      placeholder: "Enter Invoice ID",
    },
    {
      title: "Start Date",
      placeholder: "Enter Start Date",
    },
    {
      title: "End Date",
      placeholder: "Enter End Date",
    },
  ];
  return (
    <div
      className="flex flex-col w-full p-10"
      style={{
        fontFamily: "Poppins",
      }}
    >
      <div className="flex ">
        <p className="font-medium text-2xl">Sales Information</p>
      </div>
      <div className="flex py-6 gap-6 w-full">
        {items.map((item) => {
          return (
            <div className="flex flex-col gap-4 w-1/4" key={item.title}>
              <p className="font-normal text-base">{item.title}</p>
              <div class="flex  ">
                <input
                  type="text"
                  placeholder={item.placeholder}
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none  w-full"
                />
              </div>
            </div>
          );
        })}
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;
