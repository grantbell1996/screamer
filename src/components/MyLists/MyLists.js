import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getCurrentUser } from "../Users/UserManager";
import { getLists, getSingleList } from "./ListsManager";
import React, { useState, useEffect } from "react";

export const MyLists = () => {
  const [lists, setLists] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getLists().then((data) => {
      setLists(data);
    });
  }, []);

  useEffect(() => {
    getCurrentUser().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <>
      {lists?.user?.id === user.id ? (
        <div className="list_title">{lists.title}</div>
      ) : (
        <div>
          You don't have any lists yet <Link to="/create_list"> create one here</Link>
        </div>
      )}
    </>
  );
};
