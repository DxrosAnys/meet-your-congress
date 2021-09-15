import React, {Fragment} from "react";
import {
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
const AppContent = (props) => {
    const classesHeader = `sidebar-fixed context ${classes["main-content"]}`;

   const congressMen =  props.congressList;

   const onClickInfoCongressman = (event) => {
       console.log(event);
   };

    let rowMax = 16;
    let colMax = 15;
    let row = 0;
    let col = 0;
    let spaceCounter = 6;
    let patternCounter = 1;
    let  use = 1;

    let middleCounter = 0;
    let iterationCounter = 0;
    let countFullSpace = 0;

    let countCongress = 0;
    let middle = ((colMax - 1) / 2);

    const emptyCol = (id) => {
        return <CCol key={id} />;
    };
    const listCol = (row) => {

        let congressRow = [];

        if (row % 2 === 0 && row > 0) {
            patternCounter = patternCounter + 2;
            spaceCounter = spaceCounter - 1;
            iterationCounter = iterationCounter + 1;
            if (patternCounter === middle + 4 ) {
                spaceCounter = spaceCounter -1;
            }
        }

        if (row % iterationCounter === 0) {
            if (patternCounter > middle ) {
                if (patternCounter !== middle + 2) {
                    middleCounter = middleCounter + 1 + use;

                    if(use !== 0)
                        use = use - 1;
                }


            }
        }

        for (col = 0; col < colMax; col++) {
            if (col < spaceCounter || col >= colMax - spaceCounter) {
                congressRow.push(emptyCol('y'+countFullSpace));
            }

            if (col >= spaceCounter && col < colMax - spaceCounter) {
                if (middle > col - middleCounter && middle < col + middleCounter) {
                    congressRow.push(emptyCol('x'+countFullSpace));
                } else {
                    const man = congressMen[countCongress];

                    document.querySelectorAll('.cat_circle')
                    const values = (
                        <CCol key={`${countCongress}${man !== undefined ? man.id : countCongress}`} >
                            <span  key={man !== undefined ? man.id : ''}
                                   className={` bg-color-${man !== undefined ? man.color : ''} ${classes.cat_circle}`}
                                   onMouseEnter={onClickInfoCongressman}>
                                <img key={man !== undefined ? man.id : countCongress}
                                     src={man !== undefined ? man.image : '/avatars/1.jpg' }
                                     className={`rounded-circle` } alt=""/>
                            </span>
                        </CCol>);
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
// fluid='true'
    return (
        <Fragment>
            <div className={classesHeader} >
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

export default AppContent;