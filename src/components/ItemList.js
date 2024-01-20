import { UseDispatch, useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ e }) => {
  const dispatch = useDispatch();
  const newd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="accordioninner text-center" key={e.title}>
      {e.map((e) => {
        return (
          <div
            className="details flex justify-between items-center border-b-[1px] my-2 py-2"
            key={e.card.info.id}
          >
            <div className="info-box-block text-left w-8/12">
              <h2 className="font-medium">
                {e.card.info.name}{" "}
                <span className="block text-left">
                  ₹
                  {parseInt(e.card.info.price || e.card.info.defaultPrice) /
                    100}
                </span>
              </h2>

              <p className="text-[#282c3f73] text-sm">
                {e.card.info?.description}
              </p>
            </div>

            <div className="image-box-res w-3/12 text-right">
              <div className="inner-imgblock w-24 mr-0 ml-auto">
                <img
                  className="rounded-lg"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    e.card.info.imageId
                  }
                  alt=""
                />
                <button
                  onClick={() => newd(e)}
                  className="block relative
                         border px-6 m-auto py-1 bg-white text-green-500 rounded-md font-bold shadow-sm top-[-10px]"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
