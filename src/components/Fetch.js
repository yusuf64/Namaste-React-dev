import React from "react";

const Fetch = () => {
  let a = new Promise((resolve, reject) => {
    let data = fetch("http://team-api.socialbeat.in/api/team/get");
    data.resolve((data) => {
      let newdata = data.json();
      console.log(newdata.body);
    });
  });
  return <div></div>;
};

export default Fetch;
