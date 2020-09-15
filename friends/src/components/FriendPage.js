import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendList from "./FriendList";
import SingleFriendEdit from "./SingleFriendEdit";
import StyledFriendPage from "./styled/StyledFriendPage";

const defaultNewFriend = {name: "", age: "", email: "",};

const FriendPage = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState(defaultNewFriend);

    let history = useHistory();

    useEffect(() => {
        axiosWithAuth().get("/api/friends")
        .then(response => {
            //console.log(response);
            setFriends(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        history.push("/login");
    }

    const addFriend = (event) => {
        event.preventDefault();
        axiosWithAuth().post("/api/friends", newFriend)
        .then(response => {
            //console.log(response);
            setFriends(response.data);
            setNewFriend(defaultNewFriend);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <StyledFriendPage>
            <h1>Friends</h1> 
            <button className="logout" onClick={logout}>Log Out</button>
            <FriendList friends={friends} />
            <h2>Add New Friend</h2>
            <SingleFriendEdit friend={newFriend} setFriend={setNewFriend} />
            <button className="addFriend" onClick={addFriend}>Add Friend</button>
        </StyledFriendPage>
    )
}

export default FriendPage;