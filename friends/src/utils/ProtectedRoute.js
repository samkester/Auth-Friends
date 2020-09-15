import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={() => {
                if(localStorage.getItem("token")) return <Component />;
                return <Redirect to="/login" />
            }}
        />
    )
}

export default ProtectedRoute;