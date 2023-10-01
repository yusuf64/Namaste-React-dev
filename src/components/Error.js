import { useRouteError } from "react-router-dom";

const Error = () => {
  const er = useRouteError();
  console.log(er);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops !!!</h1>
      <p>Something went wrong !!!</p>
    </div>
  );
};

export default Error;
