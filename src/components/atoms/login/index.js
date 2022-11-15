import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [dataSubmit, setDataSubmit] = useState();

  // const callApi = async () => {
  //   if (localStorage.getItem("jwt_token")) {
  //     const data = await fetch("api", {
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         authen: localStorage.getItem("jwt_token"),
  //       },
  //     });
  //   } else {
  //     fetch("api", {
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     });
  //   }
  // };
  const navigate = useNavigate();
  useEffect(() => {
    if (dataSubmit) {
      console.log(dataSubmit.username);
      fetch("http://localhost:2000/auth/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username: dataSubmit.username,
          password: dataSubmit.password,
        }),
      }).then(async (data) => {
        const _data = await data.json();
        if (_data.status === "success") {
          localStorage.setItem("jwt_token", _data?.data?.access_token);
          navigate("/Home");
        }
      });
    }
  }, [dataSubmit, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(setDataSubmit({ username, password }));
  };

  return (
    <form className="container mx-auto">
      <div
        className="bg-slate-500 w-1/5 h-1/3 mx-auto my-5 min-w-max text-gray-700"
        // onSubmit={() => handleSubmit(e)}
      >
        <div className="flex justify-around p-4 m-2">
          <label className="m-2">Username</label>
          <input
            id="a"
            type={`text`}
            name="username"
            className="rounded"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex justify-around p-4 m-2">
          <label className="m-2">Password</label>
          <input
            type={`text`}
            name="password "
            className="rounded"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>

        <div className="flex justify-around p-4">
          <button
            // type="submit"
            // className="bg-white rounded p-1"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
