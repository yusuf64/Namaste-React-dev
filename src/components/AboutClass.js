import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

export default class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent MOunt()");
  }

  componentDidUpdate() {
    console.log("upated");
  }

  render() {
    console.log("Parent render ");
    return (
      <div
        className="
        "
      >
        <h1>Welcome to my World </h1>
        <UserContext.Consumer>
          {({ user }) => <h1 className="text-xl text-bold">{user}</h1>}
        </UserContext.Consumer>

        <UserClass name="Yusuf Khan" />
        <UserClass name="Berserk" />
        <UserClass name="Guts" />
      </div>
    );
  }
}
