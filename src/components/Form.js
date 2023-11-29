import { useEffect, useState } from "react";

const Form = ({ name }) => {
  const [value, setValue] = useState("");

  function handleClick(e) {
    console.log(e.target.value);
  }

  return (
    <div className="form">
      <form>
        <input type="text" placeholder={name} onChange={handleClick} />
      </form>
    </div>
  );
};

export default Form;
