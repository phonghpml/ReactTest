import React from "react";
import { Paginate } from "../../components/atoms/paginate";
export class Home extends React.Component<
  {},
  {
    stories: any;
    errorMessage: any;
    totalItem: any;
    itemPerPage: any;
    prePage: any;
    nextPage: any;
    currentPage: any;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      stories: [],
      errorMessage: null,
      totalItem: 0,
      itemPerPage: 1,
      prePage: 0,
      nextPage: 0,
      currentPage: 1,
    };
  }

  getStories() {
    const token = localStorage.getItem("jwt_token");
    fetch(
      "http://localhost:2000/stories?" +
        new URLSearchParams({
          pageNumber: "0",
          limit: "1",
        }).toString(),
      {
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
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          stories: data.data,
          totalItem: data.totalStory,
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

  prePage() {
    if (this.state.currentPage !== 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  }
  nextPage() {
    console.log("this", this);
    if (
      this.state.currentPage !==
      Math.ceil(this.state.totalItem / this.state.itemPerPage)
    ) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  }

  render() {
    return (
      <div className="container mx-auto my-4 p-4">
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        <div>
          <div className="bg-slate-500 p-4">Danh sách truyện</div>
          {this.state.stories.map((e: any) => {
            return (
              <div key={e._id} className="p-4 border">
                <div>
                  <div className="text-lg text-black">{e.name}</div>
                  <div className="text-sm text-slate-400">
                    {e.author.username}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Paginate
          totalItem={this.state.totalItem}
          itemPerPage={this.state.itemPerPage}
          nextPage={this.nextPage}
          prePage={this.prePage}
        ></Paginate>
      </div>
    );
  }
}
