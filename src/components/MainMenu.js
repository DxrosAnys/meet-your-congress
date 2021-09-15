import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CCreateNavItem,
  CNavbarBrand,
  CNavGroup,
  CNavItem,
  CNavLink,
  CNavTitle,
  CSidebar,
  CSidebarNav,
} from "@coreui/react";
import classes from "./MainMenu.module.css";
import "@coreui/coreui/dist/css/coreui.min.css";

const DUMMY_PARTIES = [
  {
    id: "1",
    party_name: "Partido Morado",
    party_president: "Julio Guzmán",
    foundation: "18 Noviembre, 2017",
    campus: "Calle Ignacio Merino 375, Miraflores, Lima",
    color: "purple",
    number_congressman: 6,
    number_andean_parliament: 0,
    number_regional_governors: 0,
    number_provincial_mayors: 3,
    number_district_mayors: 30
  },
  {
    id: "2",
    party_name: "Alianza Por El Progreso",
    party_president: "Dios Acuña",
    foundation: "8 de diciembre de 2001",
    campus: "Trujillo, La Libertad",
    color: "blue",
    number_congressman: 3,
    number_andean_parliament: 2,
    number_regional_governors: 4,
    number_provincial_mayors: 4,
    number_district_mayors: 62,
  },
  {
    id: "3",
    party_name: "Acción Popular",
    party_president: "Yonhy Lescano",
    foundation: "	7 de julio de 1956",
    campus: "Av. 9 de diciembre 218, Lima, Lima",
    color: "black",
    number_congressman: 16,
    number_andean_parliament: 1,
    number_regional_governors: 3,
    number_provincial_mayors: 13,
    number_district_mayors: 118,
  },
  {
    id: "4",
    party_name: "Peru Libre",
    party_president: "Av. Brasil 170, Breña, Lima",
    foundation: "",
    campus: "Av. 9 de diciembre 218, Lima, Lima",
    color: "red",
    number_congressman: 32,
    number_andean_parliament: 2,
    number_regional_governors: 6,
    number_provincial_mayors: 17,
    number_district_mayors: 74,
  }
];

const MainMenu = () => {
  const [visible, setVisible] = useState(true);
  const classesHeader = `sidebar-fixed ${classes["main-menu"]}`;
  const parties = DUMMY_PARTIES.map(party => {
    return (
          <CNavGroup toggler={party.party_name}>
            <CNavItem id={party.id}>
             <label>Presidente: {party.party_president}</label> 
             <label> Fundación: {party.foundation}</label>
             <label> Sede: {party.campus}</label>
             <label>Congresistas: {party.number_congressman}</label>
             <label> Parlamento Andino: {party.number_andean_parliament}</label>
             <label>Gobernadores Regionales: {party.number_regional_governors}</label>
             <label> Alcaldías provinciales: {party.number_provincial_mayors}</label>
             <label>Alcaldías distritales: {party.number_district_mayors}</label>    
            </CNavItem>
          </CNavGroup>
    );
  });
  return (
    <Fragment>
      <CSidebar className={classesHeader} visible={visible}>
        <CSidebarNav>
          <CNavTitle>Partidos Póliticos</CNavTitle>
          {parties}
        </CSidebarNav>
      </CSidebar>
    </Fragment>
  );
};

export default MainMenu;
