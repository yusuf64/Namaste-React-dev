import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://corsproxy.io/?https://api.github.com/users/yusuf64"
    );
    const j = await data.json();
    console.log(j.avatar_url);
    this.setState({
      userInfo: j,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <img src={avatar_url} alt="" />
        <h2>{location}</h2>
        <h4>Contact - ky69452@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
