import './App.css';
import './scss/style.scss';
import { AppContent, AppSidebar, AppHeader } from './components/index';
import "@coreui/coreui/dist/css/coreui.min.css";

function App() {
  return (
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          //footer
        </div>
      </div>
  );
}

export default App;
