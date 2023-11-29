import { useState, useEffect } from "react";

const useCheckconn = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    debugger;
    window.addEventListener("online", () => {
      setStatus(true);
    });

    window.addEventListener("offline", () => {
      setStatus(false);
    });
  }, []);

  console.log(status);
  return status;
};

export default useCheckconn;
