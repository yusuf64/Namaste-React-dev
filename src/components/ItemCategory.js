const ItemCategory = ({ e }) => {
  return (
    <h1 className="title py-3 my-3  rounded-md w-full block font-bold text-xl cursor-pointer">
      {e?.card?.card?.title}({e?.card?.card?.title.length})
    </h1>
  );
};

export default ItemCategory;
