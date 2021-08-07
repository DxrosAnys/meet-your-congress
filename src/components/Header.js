import React, { Fragment, useState } from "react";
import classes from "./Header.module.css";
import congress from "../../assets/congreso.png";
import {
  CButton,
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";


const Header = () => {
  const classesHeader = `bg-light ${classes.header}`;
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <CNavbar expand="lg" colorScheme="light" className={classesHeader}>
        <CContainer fluid>
          <CNavbarBrand>
            <img
              src={congress}
              alt="A congress"
              width="60"
              height="60"
              className="d-inline-block align-center"
            />{" "}
            <b>Conoce</b> a tu <b>Congresista</b>
          </CNavbarBrand>
          <CCollapse className="navbar-collapse left" visible={visible}>
            <CNavbarNav className="d-md-down-none mr-auto c-header-nav"></CNavbarNav>
            <CNavbarNav className="px-3 c-header-nav">
              <CNavItem>
                <CNavLink href="#">Agenda Documentada</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Decretos de Urgencia</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Proyectos de Ley</CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </Fragment>
  );
};

export default Header;
