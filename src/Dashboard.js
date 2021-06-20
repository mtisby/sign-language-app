import React, { useState, useEffect } from "react";
// @flow
export type dashboardProps = {
  handleLogOut: (string) => void,
};
const Dashboard = ({handleLogOut }: dashboardProps) => {
  const [user, setUser] = useState([]);
  function getUsers() {
    fetch(`http://localhost:5000/api/v1/users?email=example@gmail.com`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUser(response.users[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {" "}
      Hello {user.email}
      <p onClick={handleLogOut}>Logout</p>
    </div>
  );
};
export default Dashboard;
