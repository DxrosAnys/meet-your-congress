import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CCol,
  CContainer,
  CCreateNavItem,
  CDropdownMenu,
  CNavbarBrand,
  CNavGroup,
  CNavItem,
  CNavLink,
  CNavTitle,
  CRow,
  CSidebar,
  CSidebarNav,
} from "@coreui/react";
import classes from "./Main.module.css";

const Main = () => {
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

export default Main;
