import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getCurrentUser } from "../Users/UserManager";
import { getLists, getSingleList } from "./ListsManager";
import React, { useState, useEffect } from "react";
import "./MyLists.css";

export const MyLists = () => {
  const [lists, setLists] = useState([]);
  const [user, setUser] = useState({});
  const history = useHistory();

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
        <div className="noListContainer"> 
        <div className="no_list_message">
          You don't have any lists yet <button className="createButton" onClick={() => history.push(`/create_list`)}> create one here</button>
        </div>
        </div>
      )}
    </>
  );
};
