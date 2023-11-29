import { MENU_URL } from "./constant";

const useFetchData = async (resId) => {
  const data = await fetch(MENU_URL + resId);

  const r = await data.json();

  const p = r.data;

  return p;
};

export default useFetchData;
