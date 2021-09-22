import {
    CButton,
    CCard,
    CCardText,
    CCardTitle, CCol, CImage,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle, CRow
} from "@coreui/react";
import React, {Fragment, useState} from "react";
import classes from "../CongressContent.module.css";

const MEMBER_CONGRESS = [{
    id: 'AP01MGAP',
    image: '/congressman/AP01MGAP.jpg',
    name: 'María Grimaneza Acuña Peralta',
    voting_obtained: '11,384',
    period_functions_start: '26-Jul-2021',
    period_functions_finish: '27-Jul-2021',
    political_party: 'Alianza para el Progreso',
    represented_to: 'Lambayeque',
    condition: 'En Ejercicio'
}, {
    id: 'AP02SHAP',
    image: '/congressman/AP02SHAP.jpg',
    color: 'blue',
    name: 'Segundo Héctor Acuña Peralta',
    voting_obtained: '11,384',
    period_functions_start: '26-Jul-2021',
    period_functions_finish: '27-Jul-2021',
    political_party: 'Alianza para el Progreso',
    represented_to: 'Lambayeque',
    condition: 'En Ejercicio'
}, {
    id: 'SP01YKAA',
    image: '/congressman/SP01YKAA.jpg',
    color: 'red',
    name: 'Yorel Kira Alcarraz Aguero',
    voting_obtained: '11,384',
    period_functions_start: '26-Jul-2021',
    period_functions_finish: '27-Jul-2021',
    political_party: 'Alianza para el Progreso',
    represented_to: 'Lambayeque',
    condition: 'En Ejercicio'
}, {
    id: 'SP02AAL',
    image: '/congressman/SP02AAL.jpg',
    color: 'red',
    name: 'Alfredo Azurín Loayza',
    voting_obtained: '11,384',
    period_functions_start: '26-Jul-2021',
    period_functions_finish: '27-Jul-2021',
    political_party: 'Alianza para el Progreso',
    represented_to: 'Lambayeque',
    condition: 'En Ejercicio'
}, {
    id: 'AC01LAAC',
    image: '/congressman/AC01LAAC.jpg',
    color: 'black',
    name: 'Luis Ángel Aragón Carreño',
    voting_obtained: '11,384',
    period_functions_start: '26-Jul-2021',
    period_functions_finish: '27-Jul-2021',
    political_party: 'Alianza para el Progreso',
    represented_to: 'Lambayeque',
    condition: 'En Ejercicio'
}, {
    id: 'AP01JAAT',
    image: '/congressman/AP01JAAT.jpg',
    color: 'black',
    name: 'José Alberto Arriola Tueros',
    voting_obtained: '11,384',
    period_functions_start: '26-Jul-2021',
    period_functions_finish: '27-Jul-2021',
    political_party: 'Alianza para el Progreso',
    represented_to: 'Lambayeque',
    condition: 'En Ejercicio'
}, {
    id: 'PP01WJCR',
    image: '/congressman/PP01WJCR.jpg',
    color: 'red',
    name: 'Waldemar José Cerrón Rojas',
    voting_obtained: '11,384',
    period_functions_start: '26-Jul-2021',
    period_functions_finish: '27-Jul-2021',
    political_party: 'Alianza para el Progreso',
    represented_to: 'Lambayeque',
    condition: 'En Ejercicio'
}, {
    id: 'PP02FCM',
    image: '/congressman/PP02FCM.jpg',
    color: 'red',
    name: 'Flavio Cruz Mamani',
    voting_obtained: '11,384',
    period_functions_start: '26-Jul-2021',
    period_functions_finish: '27-Jul-2021',
    political_party: 'Alianza para el Progreso',
    represented_to: 'Lambayeque',
    condition: 'En Ejercicio'
}];

const MemberCard = (props) => {
    const [visible, setVisible] = useState(false);
// onClick={() => setVisible(!visible)
    //  <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
    const infoMember = MEMBER_CONGRESS.filter(value =>  props.id === value.id);

    return (
        <Fragment>
            <span id={props.id}
                  className={`${'bg-color-' + props.colorParty} ${classes.cat_circle}`}
                  onPointerEnter={() => props.onChooseMember(props.id, props.idParty)}
                  onClick={() => setVisible(!visible)}>
            <img src={props.srcImage} className={`rounded-circle`} alt=""/>
            </span>
            <CModal visible={visible} onDismiss={() => setVisible(false)}>
                <CModalHeader onDismiss={() => setVisible(false)}>
                    <CModalTitle>Ficha de Congresista</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CCard>
                        <CRow>

                            <CCol>
                                <CCardTitle>Datos Personales</CCardTitle>
                                <CCardText>Nombres: {infoMember[0] !== undefined ? infoMember[0].name : 'Sin nombres'} </CCardText>
                            </CCol>
                            <CCol> <CImage src={props.srcImage} orientation={"overlay-padding"} /></CCol>
                        </CRow>
                        <CCardTitle>Datos Generales</CCardTitle>
                        <CCardText>Periodo de Funciones: </CCardText>
                        <CCardText>Inicio: {infoMember[0] !== undefined ? infoMember[0].period_functions_start : 'Sin nombres'}</CCardText>
                        <CCardText>Fin: {infoMember[0] !== undefined ? infoMember[0].period_functions_finish : 'Sin nombres'}</CCardText>
                        <CCardText>Grupo o Partido Político: {infoMember[0] !== undefined ? infoMember[0].political_party : 'Sin nombres'} </CCardText>
                        <CCardText>Bancada: {infoMember[0] !== undefined ? infoMember[0].political_party.toString().toUpperCase() : 'Sin nombres'} </CCardText>
                        <CCardText>Representa a: {infoMember[0] !== undefined ? infoMember[0].represented_to : 'Sin nombres'} </CCardText>
                        <CCardText>Condición: {infoMember[0] !== undefined ? infoMember[0].condition : 'Sin nombres'} </CCardText>
                    </CCard>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                    <CButton color="primary">Save changes</CButton>
                </CModalFooter>
            </CModal>
        </Fragment>
    );
};

export default MemberCard;