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

    let rowAvailable = 1;
    let counter = 0;
    let counterVisible = 5;
    let counterLeft = -1;
    let counterRight = 1;
    let i = 0;
    let j =  0;
    const emptyCol = <CCol/>;

    const listCol = () => {
        const addss = [];
        for (j = 0; j < counterVisible; j++) {
            addss.push(emptyCol);
        }
        for (j= 0; j< counterVisible; j++) {
           const values =
            <CCol>
                <span className={classes.cat_circle}>
                    <img src="/avatars/8.jpg"/>
                </span>
            </CCol>;
            addss.push(values);
        }
        for (j = 0; j < counterVisible; j++) {
            addss.push(emptyCol);
        }
        return addss;

    };
    const xxx = () => {
        const adds = [];
    for (i = 0; i < rowAvailable; i++ ){
    const congress =
              (  <CRow id={i} lg={{cols: 15, gutter: 15}} >
                  {listCol()}
                </CRow>);
        adds.push(congress);
    };
    return adds;
    };

   // const xxx = <CAvatar className={classes.cat_circle} src="/avatars/8.jpg" size="lg" />;


    const congressCol = (<CCol><span className={classes.cat_circle}><img src="/avatars/8.jpg" alt=""/></span></CCol>);

    return (
        <Fragment>
            <div className={classesHeader} xxl>
                <CContainer>
                    <CRow lg={{cols: 1, gutter: 1}}>
                        <h1 className='text-lg-center'>Congreso de la República</h1>
                    </CRow>
                    {xxx()}
                    <CRow lg={{cols: 12, gutter: 12}}>
                        <CCol/>
                        <CCol/>
                        <CCol/>
                        <CCol/>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                        </CCol>
                        <CCol>
                        </CCol>
                        <CCol>
                        </CCol>
                        <CCol>
                        </CCol>
                    </CRow>

                    <CRow lg={{cols: 12, gutter: 12}}>
                        <CCol>
                        </CCol>
                        <CCol>
                             <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                            <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                             <span className={classes.cat_circle}>
                                <img src="/avatars/8.jpg" alt=""/>
                            </span>
                        </CCol>
                        <CCol>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        </Fragment>
);
};

export default AppContent;