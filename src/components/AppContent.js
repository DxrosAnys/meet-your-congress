import React, { Fragment, useState } from "react";
import {
    CCol,
    CContainer,
    CRow
} from "@coreui/react";
import classes from "./AppContent.module.css";

const AppContent = () => {
    const classesHeader = `sidebar-fixed context ${classes["main-content"]}`;

    return (
        <Fragment>
            <div className={classesHeader} xxl>
                <CContainer >
                    <CRow lg={{ cols: 5, gutter: 3 }}>
                        <CCol>One of three columns</CCol>
                        <CCol>One of three columns</CCol>
                        <CCol>One of three columns</CCol>
                    </CRow>
                    <CRow className="align-items-center">
                        <CCol>One of three columns</CCol>
                        <CCol>One of three columns</CCol>
                        <CCol>One of three columns</CCol>
                    </CRow>
                    <CRow className="align-items-end">
                        <CCol>One of three columns</CCol>
                        <CCol>One of three columns</CCol>
                        <CCol>One of three columns</CCol>
                    </CRow>
                </CContainer>
            </div>
        </Fragment>
    );
};

export default AppContent;