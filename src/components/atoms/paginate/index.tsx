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
    <div className="pagination-container">
      <ul className="pagination">
        <li
          onClick={() => {
            console.log("prev");
          }}
          className="page-number"
        >
          Prev
        </li>
        {pageNumbers.map((number: any) => (
          <li
            key={number}
            onClick={() => {
              console.log("paginate");
            }}
            className="page-number"
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage.bind(Home)} className="page-number">
          Next
        </li>
      </ul>
    </div>
  );
};
