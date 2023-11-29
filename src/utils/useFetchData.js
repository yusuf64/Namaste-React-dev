import { MENU_URL } from "./constant";
import { useState } from "react";
import { useEffect } from "react";

const useFetchData = (resId) => {
  const [res, setres] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();

    const p = json.data;

    console.log(p);

    setres(p);
  };

  return res;
};

export default useFetchData;
