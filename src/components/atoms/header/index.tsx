import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component<{}, { isLogin: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  componentDidMount() {
    let isLogin = localStorage.getItem("jwt_token");
    if (isLogin) {
      this.setState({
        isLogin: true,
      });
    }
  }
  render() {
    const listHeader = ["Home", "About", "Contact"];
    return (
      <div className="bg-slate-500 py-4">
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
              {this.state.isLogin ? (
                <Logout setState={this.setState} />
              ) : (
                <Login />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <Link to={`/login`} className="px-4 text-white capitalize">
        Login
      </Link>
    );
  }
}
class Logout extends React.Component<{ setState: any }> {
  render() {
    return (
      <Link
        to={`/login`}
        className="px-4 text-white capitalize"
        onClick={(e) => {
          localStorage.clear();
          this.props.setState({
            isLogin: false,
          });
        }}
      >
        Logout
      </Link>
    );
  }
}
