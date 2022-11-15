import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component  {
  listHeader = ["Home", "About", "Contact"];
  render(){
    return (
      <div className="bg-yellow-600 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex">
              {listHeader.map((item) => {
                return (
                  <Link to={`/${item}`} key={item}>
                    <div className="px-4">
                      <p className="text-white capitalize">{item}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="flex">
              <Link to={`/Login`}  className="px-4 text-white capitalize">
                Login
              </Link>
              <Link to={`/Logout`} className="px-4 text-white capitalize">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
