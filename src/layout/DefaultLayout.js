import {AppContent, AppHeader, AppSidebar} from "../components";
import {useEffect, useState} from "react";
import AppFooter from "../components/AppFooter";

const DefaultLayout = () => {
    const [isSelectingParty, setSelectedParty] = useState(false);

    const showPartyInformation = (idMan, idParty) => {
        setSelectedParty(idParty);
    }

    return (
        <div>
            <AppSidebar showInfoParty={showPartyInformation}/>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader/>
                <div className="body flex-grow-1 px-3">
                    <AppContent/>
                </div>
                <AppFooter/>
            </div>
        </div>
    );
};

export default DefaultLayout;