import React from "react";
import StyledSingleFriend from "./styled/StyledSingleFriend";

const SingleFriendView = ({friend, setFriend}) => {

    const changeHandler = event => {
        setFriend({...friend, [event.target.name]: event.target.value});
    }

    return(
        <StyledSingleFriend>
            <input type="text" name="name" value={friend.name} onChange={changeHandler} />
            <input type="text" name="email" value={friend.email} onChange={changeHandler} />
            <input type="text" name="age" value={friend.age} onChange={changeHandler} />
        </StyledSingleFriend>
    )
}

export default SingleFriendView;