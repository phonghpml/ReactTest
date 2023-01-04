import React from "react";
import { Link } from "react-router-dom";
export class Login extends React.Component<
  {},
  { username: string; password: string }
> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  async handleSubmit(e, state) {
    e.preventDefault();
    const response = await fetch("http://localhost:2000/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(state), // body data type must match "Content-Type" header
    });
    const jsonData = await response.json();
    if (jsonData.status === "success") {
      localStorage.setItem("jwt_token", jsonData.data.access_token);
      window.location.assign("/Home");
    }
  }

  render() {
    return (
      <>
        <div className="container mx-auto mt-10">
          <div className="mx-auto w-1/3">
            <form>
              <div className="">
                <label className="m-4">username</label>
                <input
                  className="border m-4 w-full"
                  value={this.state.username}
                  onChange={(e) => {
                    this.setState({
                      username: e.target.value,
                    });
                  }}
                ></input>
              </div>
              <div className="">
                <label className="m-4">password</label>
                <input
                  className="border m-4 w-full"
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({
                      password: e.target.value,
                    });
                  }}
                ></input>
              </div>
              <div className="mx-auto w-1/3 text-center">
                <button
                  onClick={(e) => {
                    this.handleSubmit(e, this.state);
                    this.setState({
                      username: "",
                      password: "",
                    });
                  }}
                >
                  Submit
                </button>
                <button className="mx-2">
                  <Link to={`/signup`} className="px-4 capitalize">
                    Sign up
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
