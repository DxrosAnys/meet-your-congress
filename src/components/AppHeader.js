import React, {useState} from "react";
import classes from "./AppHeader.module.css";
import CIcon from '@coreui/icons-react';
import {
    CContainer, CHeader, CHeaderBrand, CHeaderNav, CHeaderToggler,
    CNavItem,
    CNavLink,
} from "@coreui/react";
// import {useDispatch, useSelector} from "react-redux";


const AppHeader = () => {
    const classesHeader = `bg-light ${classes.header}`;
    const [visible, setVisible] = useState(false);

  //  const sidebarShow = useSelector((state) => state.sidebarShow);
//    const dispatch = useDispatch({ type: 'set', sidebarShow: !sidebarShow });
    return (
        <CHeader position="sticky" className="mb-4">
            <CContainer fluid>
                <CHeaderToggler
                    className="ms-md-3 d-lg-none"
                    onClick={() => false} //dispatch({ type: 'set', sidebarShow: !sidebarShow })}
                >
                    <CIcon name="cil-menu" size="lg" />
                </CHeaderToggler>
                <CHeaderBrand className="mx-auto d-md-none" to="/">
                    <CIcon name="logo" height="48" alt="Logo" />
                </CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem>
                        <CNavLink href="#">Agenda Documentada</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Decretos de Urgencia</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Proyectos de Ley</CNavLink>
                    </CNavItem>
                </CHeaderNav>
            </CContainer>
        </CHeader>
    );
};

export default AppHeader;