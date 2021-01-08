import './App.scss';
import './fontello/css/fontello.css'
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import {BrowserRouter} from "react-router-dom";
import UserPanelPage from "./pages/UserPanelPage/UserPanelPage";
import {useAuth} from "./hooks/useAuth";
import {AuthContext} from "./context/AuthContext";


function App() {

    const {token, login, logout, userId, isAuthenticated} = useAuth()
    console.log(isAuthenticated)

    return (

        <BrowserRouter>
            <AuthContext.Provider value={{
                token, login, logout, userId, isAuthenticated
            }}>
                <div className="App">

                    {isAuthenticated ? <UserPanelPage/> : <WelcomePage/>}

                </div>
            </AuthContext.Provider>
        </BrowserRouter>

    );
}

export default App;
