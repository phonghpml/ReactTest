import React from "react";
export class Home extends React.Component<
  {},
  { stories: any[]; errorMessage: any }
> {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      errorMessage: null,
    };
  }

  getStories() {
    const token = localStorage.getItem("jwt_token");
    fetch("http://localhost:2000/stories", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(state), // body data type must match "Content-Type" header
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          stories: data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      });
  }
  async componentDidMount() {
    this.getStories();
  }

  render() {
    return (
      <div className="container mx-auto">
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        <ul>
          {this.state.stories.map((e) => {
            return (
              <li key={e._id}>
                <div>
                  <div>{e.name}</div>
                  <div>{e.author.username}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
