import {AppContent, AppHeader, AppSidebar} from "../components";


const DefaultLayout = () => {
    return (
        <div>
            <AppSidebar/>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader/>
                <div className="body flex-grow-1 px-3">
                    <AppContent/>
                </div>
                //footer
            </div>
        </div>
    );
};

export default DefaultLayout;