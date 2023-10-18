import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(1);

  return (
    <div className="user-card">
      <h1>{name}</h1>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <h2>Mumbai - Kurla</h2>
      <h4>Contact - ky69452@gmail.com</h4>
    </div>
  );
};

export default User;
