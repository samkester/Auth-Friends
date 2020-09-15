import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import SingleFriendView from "./SingleFriendView";

const FriendList = () => {
    const [friends, setFriends] = useState([]);

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
    
    return(
        <div className="list">
            {friends && friends.map(
                friend => <SingleFriendView key={friend.id} friend={friend} />
            )}
        </div>
    )
}

export default FriendList;