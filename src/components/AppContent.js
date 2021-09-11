import React, {Fragment, useState} from "react";
import {
    CAvatar,
    CCol,
    CContainer,
    CRow
} from "@coreui/react";
import classes from "./AppContent.module.css";

/**
 * Shape formation of congress by #Diego
 * V0.0.1
 * @return MainPage - First page of this project.
 * **/
const AppContent = () => {
    const classesHeader = `sidebar-fixed context ${classes["main-content"]}`;

    let rowMax = 16;
    let colMax = 15;
    let row = 0;
    let col = 0;
    let spaceCounter = 6;
    let paternCounter = 1;
    let  use = 1;

    let middleCounter = 0;
    let iterationCounter = 0;


    let middle = ((colMax - 1) / 2);

    const emptyCol = <CCol/>;
    const listCol = (row) => {
        let congressRow = [];

        if (row % 2 === 0 && row > 0) {
            paternCounter = paternCounter + 2;
            spaceCounter = spaceCounter - 1;
            iterationCounter = iterationCounter + 1;
            if (paternCounter === middle + 4 ) {
                spaceCounter = spaceCounter -1;
            }
        }

        if (row % iterationCounter === 0) {
            if (paternCounter > middle ) {
                if (paternCounter !== middle + 2) {
                    middleCounter = middleCounter + 1 + use;

                    if(use !== 0)
                        use = use - 1;
                }


            }
        }

        for (col = 0; col < colMax; col++) {
            console.log("spaceCounter " + spaceCounter);
            if (col < spaceCounter || col >= colMax - spaceCounter) {
                congressRow.push(emptyCol);
            }

            if (col >= spaceCounter && col < colMax - spaceCounter) {

                if (middle > col - middleCounter && middle < col + middleCounter) {
                    congressRow.push(emptyCol);
                } else {
                    const values =
                        <CCol>
                                <span className={classes.cat_circle}>
                                    <img src="/avatars/8.jpg" className="rounded-circle" alt=""/>
                                </span>
                        </CCol>;
                    congressRow.push(values);
                }
            }

        }

        return congressRow;

    };
    const rows = () => {
        const adds = [];
        let congress = "";
        for (row = 0; row < rowMax; row++) {

            congress =
                (<CRow id={row} lg={{cols: 15, gutter: 15}}>
                    {listCol(row)}
                </CRow>);

            adds.push(congress);
        }
        return adds;

    };

    // const xxx = <CAvatar className={classes.cat_circle} src="/avatars/8.jpg" size="lg" />;


    const congressCol = (<CCol><span className={classes.cat_circle}><img src="/avatars/8.jpg" alt=""/></span></CCol>);

    return (
        <Fragment>
            <div className={classesHeader} lg xl xxl>
                <CContainer fluid='true'>
                    <CRow lg={{cols: 1, gutter: 1}}>
                        <h1 className='text-lg-center'>Congreso de la República</h1>
                    </CRow>
                    {rows()}

                </CContainer>
            </div>
        </Fragment>
    );
};

export default AppContent;