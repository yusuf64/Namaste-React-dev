import React from "react";
import UserClass from "./UserClass";

export default class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("from super constructore");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("from constructor");
  }

  componentDidUpdate() {
    console.log("upated");
  }

  render() {
    const { count } = this.state;

    console.log("from render method");
    return (
      <div
        className="
        "
      >
        <h1>Welcome to my World {count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: count + 1,
            })
          }
        ></button>

        <UserClass name="Yusuf Khan class()" />
      </div>
    );
  }
}
