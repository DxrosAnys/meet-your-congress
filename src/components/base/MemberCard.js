import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/react";
import React, {useState} from "react";
import classes from "../AppContent.module.css";

const MemberCard = (props) => {
    const [visible, setVisible] = useState(false);
// onClick={() => setVisible(!visible)
    //  <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
    return (
        <>
            <span id={props.id} key={props.key}
                  className={`${'bg-color-' + props.colorParty} ${classes.cat_circle}`}
                  onMouseEnter={event => {props.onChooseMember(event, props.idParty)}}
                  onClick={() => setVisible(!visible)}>
            <img src={props.srcImage} className={`rounded-circle`} alt=""/>
            </span>
            <CModal visible={visible} onDismiss={() => setVisible(false)}>
                <CModalHeader onDismiss={() => setVisible(false)}>
                    <CModalTitle>Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>Woohoo, you&#39;re reading this text in a modal!</CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                    <CButton color="primary">Save changes</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

export default MemberCard;