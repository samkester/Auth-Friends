import React from "react";
import SingleFriendView from "./SingleFriendView";

const FriendList = ({friends}) => {
        return(
        <div className="list">
            {friends && friends.map(
                friend => <SingleFriendView key={friend.id} friend={friend} />
            )}
        </div>
    )
}

export default FriendList;