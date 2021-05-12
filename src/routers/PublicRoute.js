import React from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";

export default function PublicRoute({
    isAuthenticated,
    component: Component,
    ...rest
}){
    return (
        <Route
            {...rest}
            component={( routeProps ) =>
                isAuthenticated ? (
                    <Redirect to={{
                        pathname: `${process.env.PUBLIC_URL}/`,
                        state: { from: routeProps.location }
                    }} />
                ) : (
                    <Component {...routeProps}/>
                )
            }
        />
    );
}
