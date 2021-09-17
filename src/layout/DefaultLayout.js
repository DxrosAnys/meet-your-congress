import {AppContent, AppHeader, AppSidebar} from "../components";
import {useEffect, useState} from "react";
import AppFooter from "../components/AppFooter";

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


const DefaultLayout = () => {
    const [isSelectingParty, setSelectedParty] = useState(false);

    const showPartyInformation = (idMan, getIdParty) => {
        console.log(getIdParty);
        setSelectedParty({getIdParty});
    }

    return (
        <div>
            <AppSidebar showInfoParty={showPartyInformation} visibleParty={isSelectingParty} />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader/>
                <div className="body flex-grow-1 px-3">
                    <AppContent showInfoParty={showPartyInformation} congressList={DUMMY_CONGRESSMAN}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    );
};

export default DefaultLayout;