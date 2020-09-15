import React from "react";
import StyledSingleFriend from "./styled/StyledSingleFriend";

const SingleFriendView = ({friend, setFriend}) => {

    const changeHandler = event => {
        setFriend({...friend, [event.target.name]: event.target.value});
    }

    return(
        <StyledSingleFriend>
            <label>
                Name: 
                <input type="text" name="name" value={friend.name} onChange={changeHandler} />
            </label>
            <label>
                Email: 
                <input type="text" name="email" value={friend.email} onChange={changeHandler} />
            </label>
            <label>
                Age: 
                <input type="text" name="age" value={friend.age} onChange={changeHandler} />
            </label>
        </StyledSingleFriend>
    )
}

export default SingleFriendView;