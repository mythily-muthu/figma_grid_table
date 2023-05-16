import React from "react";

const Table = () => {
  const tableHeaders = [
    "Invoice ID",
    "Date",
    "Customer",
    "Payable Amount",
    "Paid Amount",
    "Due",
  ];
  const tableDatas = [
    {
      id: "#AHGA68",
      date: "23/09/2022",
      customer_name: "Jacob Marcus",
      payable_amount: "$100",
      paid_amount: "$000",
      due: "$000",
    },
    {
      id: "#AHGA68",
      date: "23/09/2022",
      customer_name: "Jacob Marcus",
      payable_amount: "$100",
      paid_amount: "$000",
      due: "$000",
    },
    {
      id: "#AHGA68",
      date: "23/09/2022",
      customer_name: "Jacob Marcus",
      payable_amount: "$100",
      paid_amount: "$000",
      due: "$000",
    },
    {
      id: "#AHGA68",
      date: "23/09/2022",
      customer_name: "Jacob Marcus",
      payable_amount: "$100",
      paid_amount: "$000",
      due: "$000",
    },
    {
      id: "#AHGA68",
      date: "23/09/2022",
      customer_name: "Jacob Marcus",
      payable_amount: "$100",
      paid_amount: "$000",
      due: "$000",
    },
  ];
  // return (
  //   <div className="flex flex-col w-full h-full rounded-md overflow-hidden">
  //     {/* header */}

  //     <div className="grid grid-cols-12 w-full p-5 bg-white border-b border-b-gray-300 ">
  //       {tableHeaders.map((header, index) => {
  //         return (
  //           <div className="grid col-span-2  whitespace-nowrap">{header}</div>
  //         );
  //       })}
  //     </div>

  //     {tableDatas.map((value, index) => {
  //       return (
  //         <div className="grid grid-cols-12 w-full p-5 bg-white border-b border-b-gray-300 ">
  //           <div className="grid col-span-2  whitespace-nowrap">{value.id}</div>
  //           <div className="grid col-span-2  whitespace-nowrap">
  //             {value.date}
  //           </div>
  //           <div className="grid col-span-2  whitespace-nowrap">
  //             {value.customer_name}
  //           </div>
  //           <div className="grid col-span-2  whitespace-nowrap">
  //             {value.payable_amount}
  //           </div>
  //           <div className="grid col-span-2  whitespace-nowrap">
  //             {value.paid_amount}
  //           </div>
  //           <div className="grid col-span-2  whitespace-nowrap">
  //             {value.payable_amount}
  //           </div>
  //         </div>

  //       );
  //     })}

  //     {/* values  map*/}
  //   </div>
  // );

  const TableField = ({ value }) => {
    return <div className="col-span-2 flex   p-5">{value}</div>;
  };

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-md">
      <div className=" w-full grid grid-cols-12">
        {tableHeaders.map((header, i) => {
          return <div className="col-span-2 p-5">{header}</div>;
        })}
      </div>
      {tableDatas.map((data) => {
        return (
          <div className=" w-full grid grid-cols-12 border-t border-gray-200">
            <TableField value={data.id} />
            <TableField value={data.date} />
            <TableField value={data.customer_name} />
            <TableField value={data.payable_amount} />
            <TableField value={data.paid_amount} />
            <TableField value={data.due} />
          </div>
        );
      })}
    </div>
  );
};

export default Table;
