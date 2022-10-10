import React from "react";
const Login = () => {
  let username, password;
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(username);
    console.log(password);
  };

  return (
    <div className="container mx-auto">
      <form
        className="bg-slate-500 w-1/5 h-1/3 mx-auto my-5 min-w-max text-gray-700"
        onSubmit={handleSubmit}
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
              username = e.target.value;
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
              password = e.target.value;
            }}
          ></input>
        </div>

        <div className="flex justify-around p-4">
          <input type="submit" className="bg-white rounded p-1"></input>
        </div>
      </form>
    </div>
  );
};

export default Login;
