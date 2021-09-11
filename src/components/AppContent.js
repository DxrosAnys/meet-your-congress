import React, {Fragment, useState} from "react";
import {
    CAvatar,
    CCol,
    CContainer,
    CRow
} from "@coreui/react";
import classes from "./AppContent.module.css";

const AppContent = () => {
    const classesHeader = `sidebar-fixed context ${classes["main-content"]}`;

    let rowMax = 16;
    let colMax = 15;
    let counterIncrease = 1;
    let row = 0;
    let j = 0;
    let spaceCounter = 6;
    let startCounter = 2;
    let paternCounter = 1;
    let counterCongressMan = 1;
    let debit = 0;

    let middleCounter = 0;
    let iterationCounter = 0;

    const emptyCol = <CCol/>;
    let middle = ((colMax - 1) / 2);
    let exceptionCounter = middle;
    const listCol = (row, value) => {
        let congressRow = [];
        console.log(value % 2 + " result:" + value);

        // if (value < 7) {
        //     if (value % 2 === 0) {
        //         counter = counter + 1;
        //
        //         if (counter === 2 && value < 7) {
        //             validateIncrease = 2;
        //             counter = 0;
        //         } else if (value === 6) {
        //             console.log("logs" + value);
        //             validateIncrease = 3;
        //             counter = 0;
        //         } else {
        //             validateIncrease = 1;
        //         }
        //
        //     }
        //
        // } else {
        //     if (value === 7) {
        //         validateIncrease = 0;
        //     } else {
        //         validateIncrease = 1;
        //     }
        // }

        if (row === startCounter) {
            console.log("xxx" + paternCounter);
            startCounter = startCounter + 2;
            paternCounter = paternCounter + 2;
            spaceCounter = spaceCounter - 1;
            iterationCounter = iterationCounter + 1;

        }

        if (row % iterationCounter === 0) {
            if (paternCounter > middle) {

                middleCounter = middleCounter + 1;
            }
        }

        for (j = 0; j < colMax; j++) {
            console.log("spaceCounter " + spaceCounter);
            if (j < spaceCounter || j >= colMax - spaceCounter) {
                congressRow.push(emptyCol);
            }

            if (j >= spaceCounter && j < colMax - spaceCounter) {

                if (middle > j - middleCounter && middle < j + middleCounter) {
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


            // for (j = 0; j < counterVisible - validateIncrease; j++) {
            //     congressRow.push(emptyCol);
            // }
            //
            // for (j = 0; j < counterVisible + (2 * validateIncrease); j++) {
            //     const values =
            //         <CCol>
            //     <span className={classes.cat_circle}>
            //         <img src="/avatars/8.jpg"/>
            //     </span>
            //         </CCol>;
            //     congressRow.push(values);
            // }
            //
            // for (j = 0; j < counterVisible - validateIncrease; j++) {
            //     congressRow.push(emptyCol);
            // }
        }
        /*      if (value >= 7) {
                  cooo =  cooo +1;
                  cooo02 = cooo02 +1;

                  if (cooo02 === 3) {

                      counterVoid = counterVoid - 1;
                      counter2 = (counterVoid +1);
                      cooo02 = 0;
                  }

                  if (cooo === 3) {
                      counterVoidMiddle = counterVoidMiddle + 1;
                      cooo = 0 ;
                  }

                  for (j = 0; j < colMax; j++) {

                      if (j <=  counterVoid || j >= 15 - counter2) {
                          congressRow.push(emptyCol);
                      }

                      if (j > counterVoid && j < 15 - counter2) {

                          if (middle  >= j - counterVoidMiddle  && middle  <= j + counterVoidMiddle ) {
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

              } */

        return congressRow;

    };
    const rows = () => {
        const adds = [];
        let congress = "";
        for (row = 0; row < rowMax; row++) {

            congress =
                (<CRow id={row} lg={{cols: 15, gutter: 15}}>
                    {listCol(row, counterIncrease)}
                </CRow>);

            counterIncrease++;
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