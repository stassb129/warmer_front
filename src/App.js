import './App.scss';
import './fontello/css/fontello.css'
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import {BrowserRouter} from "react-router-dom";
import UserPanelPage from "./pages/UserPanelPage/UserPanelPage";


function App() {
    return(
    <BrowserRouter>
        <div className="App">

            {/*<UserPanelPage />*/}
            <WelcomePage />


        </div>
    </BrowserRouter>
);
}

export default App;
