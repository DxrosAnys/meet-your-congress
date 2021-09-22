import React, {Fragment} from "react";
import {CContainer, CRow} from "@coreui/react";
import classes from "./BillsLaw.module.css";


const BillsLaw = (props) => {
    const classesHeader = `sidebar-fixed context ${classes["main-content"]}`;

    return (
        <Fragment>
            <div className={classesHeader}>
                <CContainer>
                    <CRow lg={{cols: 1, gutter: 1}}>
                        <h2 className='text-lg-center'>Búsqueda de Proyectos de Ley</h2>
                    </CRow>
                </CContainer>
            </div>
        </Fragment>
    );
};

export default BillsLaw;