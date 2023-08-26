import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // This function will run after the component has rendered.

    // Fetch data from an API (simulated here)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data: ", error));

    // You can also perform cleanup operations here if needed
    // For example, unsubscribe from event listeners, clear timers, etc.

    return () => {
      // Cleanup code here
    };
  }, []); // The empty dependency array means this effect runs once after initial render

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
