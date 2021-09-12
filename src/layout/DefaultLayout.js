import {AppContent, AppHeader, AppSidebar} from "../components";

const DUMMY_CONGRESSMAN = [
    {
        id: 'AP01MGAP',
        image: '/congressman/AP01MGAP.jpg',
        color: 'blue',
        name: 'María Grimaneza Acuña Peralta'
}, {
        id: 'AP02SHAP',
        image: '/congressman/AP02SHAP.jpg',
        color: 'blue',
        name: 'Segundo Héctor Acuña Peralta'
    }, {
        id: 'SP01YKAA',
        image: '/congressman/SP01YKAA.jpg',
        color: 'red',
        name: 'Yorel Kira Alcarraz Aguero'
    }, {
        id: 'SP02AAL',
        image: '/congressman/SP02AAL.jpg',
        color: 'red',
        name: 'Alfredo Azurín Loayza'
    }, {
        id: 'AC01LAAC',
        image: '/congressman/AC01LAAC.jpg',
        color: 'black',
        name: 'Luis Ángel Aragón Carreño'
    }, {
        id: 'AP01JAAT',
        image: '/congressman/AP01JAAT.jpg',
        color: 'black',
        name: 'José Alberto Arriola Tueros'
    }, {
        id: 'PP01WJCR',
        image: '/congressman/PP01WJCR.jpg',
        color: 'red',
        name: 'Waldemar José Cerrón Rojas'
    }, {
        id: 'PP02FCM',
        image: '/congressman/PP02FCM.jpg',
        color: 'red',
        name: 'Flavio Cruz Mamani'
    }];


const DefaultLayout = () => {
    return (
        <div>
            <AppSidebar/>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader/>
                <div className="body flex-grow-1 px-3">
                    <AppContent congressList={DUMMY_CONGRESSMAN}/>
                </div>
                //footer
            </div>
        </div>
    );
};

export default DefaultLayout;