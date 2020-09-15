import React from "react";
import { useHistory } from "react-router-dom";
import FriendList from "./FriendList";
import StyledFriendPage from "./styled/StyledFriendPage";

const FriendPage = () => {
    let history = useHistory();

    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        history.push("/login");
    }

    return(
        <StyledFriendPage>
            <button className="logout" onClick={logout}>Log Out</button>
            <FriendList />
            {/* add friend form */}
        </StyledFriendPage>
    )
}

export default FriendPage;