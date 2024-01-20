import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemCategory = ({ e }) => {
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <div
      className="accordion-inner-box w-full px-3 shadow-md my-3 rounded-md "
      key={e.title}
    >
      <div
        className="flex justify-between cursor-pointer items-center"
        onClick={handleClick}
      >
        <h1 className="title py-3 my-3  rounded-md w-full block font-bold text-xl cursor-pointer">
          {e?.title}({e?.itemCards.length})
        </h1>
        <span
          className={
            showList
              ? `rotate-90 font-extrabold text-2xl`
              : `font-extrabold text-2xl`
          }
        >{`>`}</span>
      </div>

      {showList && <ItemList e={e.itemCards} />}
    </div>
  );
};

export default ItemCategory;
