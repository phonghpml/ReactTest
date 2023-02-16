import React from "react";
export class Paginate extends React.Component<{totalItem: any,itemPerPage: any, nextPage: any, prePage: any}>{
  constructor(props: any){
    super(props)
  }

  return() {
    {let pageNumbers: any = [];
      for (let i = 1; i <= Math.ceil(this.props.totalItem / this.props.itemPerPage); i++) {
        pageNumbers.push(i);
      }}
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
        {/* {pageNumbers.map((number: any) => (
          <li
            key={number}
            onClick={() => {
              console.log("paginate");
            }}
            className="block border p-2 cursor-pointer"
          >
            {number}
          </li>
        ))} */}
        <li onClick={this.props.nextPage} className="block border bg-slate-300 p-2 cursor-pointer">
          Next
        </li>
      </ul>
    </div>}
    </div>
    
          };
};
