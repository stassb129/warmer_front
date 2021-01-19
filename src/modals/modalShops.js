import {useState} from "react";
import {useContext} from "react";
import useGlobal from "../Store/Store";
import {AuthContext} from "../context/AuthContext";
import ModalPortal from "../components/main/ModalPortal/ModalPortal";
import ModalWindow from "../components/main/ModalWindow/ModalWindow";

function ModalShops(props) {
    const [globalState, globalActions] = useGlobal()
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const auth = useContext(AuthContext)

    const loginHandler = (event) => setLogin(event.target.value)
    const passwordHandler = (event) => setPassword(event.target.value)

    const sendData = async (event) => {
        event.preventDefault()
        const data = {
            seller: {name: globalState.modalShops.name},
            login: login,
            password: password
        }
        const fetchData = async () => {
            try {
                const res = await fetch(`https://accwarmer-api.herokuapp.com/user.accounts.add?token=${auth.token}`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const json = await res.json()

                console.log(json.body)

            } catch (error) {
                console.log(error)
            }
        }
        await fetchData()
    }

    return (
            <ModalWindow name={globalState.modalShops.name} closeModal={globalActions.modals.toggleModalShops}>
                <form>
                    <label>
                        Логин от вашего аккаунта:
                        <input type="text" onChange={loginHandler} placeholder="Логин" name="login"/>
                    </label>
                    <label>
                        Пароль от вашего аккаунта:
                        <input type="text" onChange={passwordHandler} placeholder="Пароль" name="password"/>
                    </label>
                    <input type="submit" onClick={sendData} value="Активировать"/>
                </form>
            </ModalWindow>
    )
}

export default ModalShops