import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/react";
import React, {useState} from "react";

const MemberCard = () => {
    const [visible, setVisible] = useState(false);
// onClick={() => setVisible(!visible)
    return (
        <>
            <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
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