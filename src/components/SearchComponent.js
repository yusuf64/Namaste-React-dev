import { useState } from "react";

const SearchComponent = () => {
  const [value, setValue] = useState("helo");
  return (
    <div className="searchbar">
      <input
        type="search"
        aria-label="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          console.log(value);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
