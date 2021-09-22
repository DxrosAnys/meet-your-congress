import classes from "../AppContent.module.css";
import React, {Fragment, useState} from "react";
import {CCol, CContainer, CRow, CSpinner} from "@coreui/react";
import MemberCard from "./utilities/MemberCard";
import {Switch} from "react-router-dom";
import {useDispatch} from "react-redux";

const DUMMY_CONGRESSMAN = [
    {
        idParty: "2",
        id: 'AP01MGAP',
        image: '/congressman/AP01MGAP.jpg',
        color: 'blue',
        name: 'María Grimaneza Acuña Peralta'
    }, {
        idParty: "2",
        id: 'AP02SHAP',
        image: '/congressman/AP02SHAP.jpg',
        color: 'blue',
        name: 'Segundo Héctor Acuña Peralta'
    }, {
        idParty: "5",
        id: 'SP01YKAA',
        image: '/congressman/SP01YKAA.jpg',
        color: 'red',
        name: 'Yorel Kira Alcarraz Aguero'
    }, {
        idParty: "5",
        id: 'SP02AAL',
        image: '/congressman/SP02AAL.jpg',
        color: 'red',
        name: 'Alfredo Azurín Loayza'
    }, {
        idParty: "3",
        id: 'AC01LAAC',
        image: '/congressman/AC01LAAC.jpg',
        color: 'black',
        name: 'Luis Ángel Aragón Carreño'
    }, {
        idParty: "3",
        id: 'AP01JAAT',
        image: '/congressman/AP01JAAT.jpg',
        color: 'black',
        name: 'José Alberto Arriola Tueros'
    }, {
        idParty: "4",
        id: 'PP01WJCR',
        image: '/congressman/PP01WJCR.jpg',
        color: 'red',
        name: 'Waldemar José Cerrón Rojas'
    }, {
        idParty: "4",
        id: 'PP02FCM',
        image: '/congressman/PP02FCM.jpg',
        color: 'red',
        name: 'Flavio Cruz Mamani'
    }];

const CongressContent = (props) => {
    const dispatch = useDispatch();
    const classesHeader = `sidebar-fixed context ${classes["main-content"]}`;
    const [visible, setVisible] = useState(false);

    const congressMen = DUMMY_CONGRESSMAN;

    const onMouseEnterInfoMan = (idMember, getIdParty) => {
        if (getIdParty !== null && getIdParty !== undefined) {
            if (!idMember.match("^[a-zA-Z]*$") && !idMember.match("^[0-9]*$")) {
                dispatch({ type: 'set', infoPartyShow: getIdParty });
            //    props.showInfoParty(idMember, getIdParty);

            }
        }
    };

    let rowMax = 16;
    let colMax = 15;
    let row = 0;
    let col = 0;
    let spaceCounter = 6;
    let patternCounter = 1;
    let use = 1;

    let middleCounter = 0;
    let iterationCounter = 0;
    let countFullSpace = 0;

    let countCongress = 0;
    let middle = ((colMax - 1) / 2);

    const emptyCol = (id) => {
        return <CCol key={"CE" + id}/>;
    };
    const listCol = (row) => {

        let congressRow = [];

        if (row % 2 === 0 && row > 0) {
            patternCounter = patternCounter + 2;
            spaceCounter = spaceCounter - 1;
            iterationCounter = iterationCounter + 1;
            if (patternCounter === middle + 4) {
                spaceCounter = spaceCounter - 1;
            }
        }

        if (row % iterationCounter === 0) {
            if (patternCounter > middle) {
                if (patternCounter !== middle + 2) {
                    middleCounter = middleCounter + 1 + use;

                    if (use !== 0)
                        use = use - 1;
                }


            }
        }

        for (col = 0; col < colMax; col++) {
            if (col < spaceCounter || col >= colMax - spaceCounter) {
                congressRow.push(emptyCol(countFullSpace));
            }

            if (col >= spaceCounter && col < colMax - spaceCounter) {
                if (middle > col - middleCounter && middle < col + middleCounter) {
                    congressRow.push(emptyCol(countFullSpace));
                } else {
                    const getMan = congressMen[countCongress];

                    const getIdParty = getMan !== undefined ? getMan.idParty : null;
                    const getIdMan = getMan !== undefined ? getMan.id : countCongress;
                    const getColorMan = getMan !== undefined ? getMan.color : 'gray';
                    const getImageMan = getMan !== undefined ? getMan.image : '/avatars/1.jpg';

                    const values = (
                        <Fragment>
                            <CCol key={countCongress}>
                                <MemberCard key={countCongress} id={getIdMan} idParty={getIdParty}
                                            colorParty={getColorMan} srcImage={getImageMan}
                                            onChooseMember={onMouseEnterInfoMan}/>
                            </CCol>
                        </Fragment>);
                    countCongress = countCongress + 1;
                    congressRow.push(values);
                }
            }
            countFullSpace = countFullSpace + 1;
        }

        return congressRow;

    };

    const adds = [];
    let congress = "";

    const rows = () => {
        for (row = 0; row < rowMax; row++) {
            congress =
                (<CRow key={row} lg={{cols: 15, gutter: 15}}>
                    {listCol(row)}
                </CRow>);

            adds.push(congress);
        }
        return adds;

    };


    return (
        <Fragment>
            <div className={classesHeader}>
                <CContainer>
                    <CRow lg={{cols: 1, gutter: 1}}>
                        <h1 className='text-lg-center'>Congreso de la República</h1>
                    </CRow>
                    {rows()}
                </CContainer>
                </div>
        </Fragment>
);
};

export default CongressContent;