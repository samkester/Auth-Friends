import React from "react";
import { Link } from "react-router-dom";
import StyledSingleFriend from "./styled/StyledSingleFriend";

const SingleFriendView = ({friend, hideView}) => {
    return(
        <StyledSingleFriend>
            <div>{friend.name}</div>
            <div>{friend.email}</div>
            <div>{friend.age}</div>
            {!hideView && <Link to={`/friend/${friend.id}`}>View</Link>}
        </StyledSingleFriend>
    )
}

export default SingleFriendView;