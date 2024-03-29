import React, { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

/**
 * Used to show all of the users on the admin-page
 * @returns all of the users and some information about them
 */
function ShowUserList() {
  const [users, setUsers] = useState([]);
  // Get all of the users
  useEffect(() => {
    axios
      .get("places.json")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowUserList");
      });
  }, []);

  // TODO: Change this so it only adds alive users here, add a new page for dead players
  // Makes all of the users into UserCard objects
  console.log(users)
  const userList =
    users.length === 0
      ? "there is no user record!"
      : users.map((user, k) => <UserCard user={user} key={k} />);

  return (
    <div className="ShowUserList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Users List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/"
              className="btn btn-outline-warning float-left"
            >
              Homepage
            </Link>

            <Link
              to="/create-user"
              className="btn btn-outline-warning float-right"
            >
              + Add New User
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="col-md-11">
          <Link
            to="/assassin-graph"
            className="btn btn-outline-warning float-left"
          >
            + Look To Assassin Graph
          </Link>
          <br />
          <br />
          <hr />
        </div>

        <div className="list">{userList}</div>
      </div>
    </div>
  );
}

export default ShowUserList;