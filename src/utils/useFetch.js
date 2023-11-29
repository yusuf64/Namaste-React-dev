import { useEffect } from "react";
import { useState } from "react";
import { RES_URL } from "./constant";

const useFetch = (res) => {
  const [list, setList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fData = await fetch(res);

    const data = await fData.json();

    const c = data?.data;

    const d = Object.entries(c)[2][1];
    console.log(d);

    const fi = d.filter((e) => {
      return e.card.card.gridElements?.infoWithStyle.restaurants;
    });

    const cardss = await fi[0]?.card?.card?.gridElements?.infoWithStyle
      .restaurants;

    setList(cardss);
    setFilterRes(cardss);
  };
  return { list, filterRes };
};

export default useFetch;
