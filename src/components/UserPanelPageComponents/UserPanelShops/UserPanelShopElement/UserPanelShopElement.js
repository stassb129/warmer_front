import css from './userPanelShopElement.module.scss'
import ModalPortal from "../../../main/ModalPortal/ModalPortal";
import ModalWindow from "../../../main/ModalWindow/ModalWindow";
import useGlobal from "../../../../Store/Store";
import {useState} from "react";
import {AuthContext} from "../../../../context/AuthContext";
import {useContext} from "react";

function UserPanelShopElement(props) {
    const [globalState, globalActions] = useGlobal()
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const auth = useContext(AuthContext)

    // const loginHandler = (event) => setLogin(event.target.value)
    //
    //
    // const passwordHandler = (event) => setPassword(event.target.value)


    // const sendData = async (event) => {
    //     event.preventDefault()
    //     const data = {
    //         seller: {name: props.seller},
    //         login: login,
    //         password: password
    //     }
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch(`https://accwarmer-api.herokuapp.com/user.accounts.add?token=${auth.token}`, {
    //                 method: 'POST',
    //                 body: JSON.stringify(data),
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             })
    //             const json = await res.json()
    //
    //             console.log(json)
    //
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     await fetchData()
    // }

    return (
        <div>

            {/*{globalState.modalShops.isActive ?*/}
            {/*    <ModalPortal>*/}
            {/*        <ModalWindow name={props.seller} closeModal={globalActions.modals.toggleModalShops}>*/}
            {/*            /!*<h2>Modal Name</h2>*!/*/}
            {/*            <form>*/}
            {/*                <label>*/}
            {/*                    Логин от вашего аккаунта:*/}
            {/*                    <input type="text" onChange={loginHandler} placeholder="Логин" name="login"/>*/}
            {/*                </label>*/}
            {/*                <label>*/}
            {/*                    {console.log('pidor')}*/}
            {/*                    Пароль от вашего аккаунта:*/}
            {/*                    <input type="text" onChange={passwordHandler} placeholder="Пароль" name="password"/>*/}
            {/*                </label>*/}

            {/*                <input type="submit" onClick={sendData} value="Активировать"/>*/}
            {/*            </form>*/}
            {/*        </ModalWindow>*/}
            {/*    </ModalPortal> : null}*/}

            <div style={{backgroundImage: `url(${props.logo})`}} className={css.shop}
                 onClick={()=>{globalActions.modals.toggleModalShops(props.seller)}}>
                <h2>{props.seller}</h2>
                <i className="icon-plus-squared-alt"/>
            </div>

        </div>

    )
}

export default UserPanelShopElement
