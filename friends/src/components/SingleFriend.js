import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import SingleFriendView from "./SingleFriendView";
import SingleFriendEdit from "./SingleFriendEdit";

const SingleFriend = () => {
    const [friend, setFriend] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const {id} = useParams();

    let history = useHistory();

    useEffect(() => {
        axiosWithAuth().get(`/api/friends/${id}`)
        .then(response => {
            //console.log(response);
            setFriend(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [id])

    const startEdit = () => {setIsEditing(true)};

    const saveEdit = event => {
        event.preventDefault();
        // PUT here
        axiosWithAuth().put(`/api/friends/${friend.id}`, friend)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setIsEditing(false);
        });
    }

    const deleteFriend = event => {
        event.preventDefault();
        // DELETE here
        axiosWithAuth().delete(`/api/friends/${friend.id}`)
        .then(response => {
            console.log(response);
            history.push("/friends");
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <div>
            {isEditing ?
                <SingleFriendEdit friend={friend} setFriend={setFriend} /> :
                <SingleFriendView friend={friend} hideView={true} /> }
            <Link to="/friends">Back</Link>
            {isEditing ?                
                <button onClick={saveEdit}>Save</button> : 
                <button onClick={startEdit}>Edit</button> }
            <button onClick={deleteFriend}>Delete</button>
        </div>
    )
}

export default SingleFriend;