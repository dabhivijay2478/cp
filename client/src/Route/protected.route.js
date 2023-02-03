import React from "react";
import { Route, redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("jwttoken") ) {
          return <Component {...props} />;
        } else {
          return (
            <>
              <redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location
                  }
                  
                }}
              />
            </>
          );
        }
      }}
    />
  );
};