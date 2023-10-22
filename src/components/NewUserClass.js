import React from "react";

export default class NewUserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("from render child");
  }

  componentDidMount() {
    console.log("child did mount");
  }

  render() {
    console.log("render child");
    let { name, location, bio } = this.props;
    return (
      <div className="wrapper">
        <h1>Name - {name}</h1>
        <h3>Address - {location}</h3>
        <p>About me - {bio}</p>
      </div>
    );
  }
}
