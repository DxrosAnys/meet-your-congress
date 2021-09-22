import React, {Fragment, useState, Suspense} from "react";
import {
    CButton,
    CCol,
    CContainer, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle,
    CRow, CSpinner
} from "@coreui/react";
import classes from "./base/CongressContent.module.css";
import MemberCard from "./base/utilities/MemberCard";
import {Redirect, Route, Switch} from "react-router-dom";

// routes config
import routes from '../routes';

/**
 * Shape formation of congress by #Diego
 * V0.0.1
 * @return MainPage - First page of this project.
 * **/
const AppContent = () => {

// fluid='true'
    return (
        <Fragment>
            <Suspense fallback={<CSpinner color="primary" />}>
                <Switch>
                    {routes.map((route, idx) => {
                        return (
                            route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => (
                                        <>
                                            <route.component {...props} />
                                        </>
                                    )}
                                />
                            )
                        )
                    })}
                    <Redirect from="/" to="/congress"/>
                </Switch>
            </Suspense>
        </Fragment>
    );
};

export default React.memo(AppContent);