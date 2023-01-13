import React from "react";
import { Home } from "../../../pages";
export const Paginate = ({
  totalItem,
  itemPerPage,
  paginate,
  prePage,
  nextPage,
}: any) => {
  const pageNumbers: any = [];
  console.log("totalItem", totalItem);
  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {<div className="">
      <ul className="flex float-right">
        <li
          onClick={() => {
            console.log("prev");
          }}
          className="block border bg-slate-300 p-2 cursor-pointer"
        >
          Prev
        </li>
        {pageNumbers.map((number: any) => (
          <li
            key={number}
            onClick={() => {
              console.log("paginate");
            }}
            className="block border p-2 cursor-pointer"
          >
            {number}
          </li>
        ))}
        <li onClick={() => nextPage()} className="block border bg-slate-300 p-2 cursor-pointer">
          Next
        </li>
      </ul>
    </div>}
    </div>
    
  );
};
