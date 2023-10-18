import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 100,
    };
    console.log(props.name);
  }

  render() {
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>{this.props.name}</h1>
        <h2>Mumbai - Kurla</h2>
        <h4>Contact - ky69452@gmail.com</h4>
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increment
        </button>

        <h1>{count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count2: count2 - 1,
            });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default UserClass;
