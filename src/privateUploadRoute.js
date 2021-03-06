import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import propTypes from 'prop-types';
import { userContext } from './appContext';

const PrivateUploadRoute = (props) => {
    const { state } = useContext(userContext);
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={() =>
                state.userdata ? (
                    <Component />
                ) : (
                    <Redirect to={{ pathname: '/login' }} />
                )
            }
        />
    );
};
PrivateUploadRoute.propTypes = {
    ownProps: propTypes.object.isRequired
}

export default PrivateUploadRoute;