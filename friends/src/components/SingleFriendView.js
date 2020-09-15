import React from "react";
import StyledSingleFriend from "./styled/StyledSingleFriend";

const SingleFriendView = ({friend}) => {
    return(
        <StyledSingleFriend>
            <div>{friend.name}</div>
            <div>{friend.email}</div>
            <div>{friend.name}</div>
        </StyledSingleFriend>
    )
}

export default SingleFriendView;