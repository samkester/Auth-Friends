import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import SingleFriendView from "./SingleFriendView";
import SingleFriendEdit from "./SingleFriendEdit";

const SingleFriend = () => {
    const [friend, setFriend] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const {id} = useParams();

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

    const stopEdit = event => {
        event.preventDefault();
        // PUT here
        setIsEditing(false);
    }

    const deleteFriend = event => {
        event.preventDefault();
        // DELETE here
        // history over to /friends
    }

    return(
        <div>
            {isEditing ?
                <SingleFriendEdit friend={friend} setFriend={setFriend} /> :
                <SingleFriendView friend={friend} hideView={true} /> }
            <Link to="/friends">Back</Link>
            {isEditing ?                
                <button onClick={stopEdit}>Save</button> : 
                <button onClick={startEdit}>Edit</button> }
            <button onClick={deleteFriend}>Delete</button>
        </div>
    )
}

export default SingleFriend;