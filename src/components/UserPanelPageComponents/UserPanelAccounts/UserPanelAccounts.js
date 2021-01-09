import css from './userPanelAccounts.module.scss'
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";
import {useState} from "react";
import {fetchData} from "../../../API/FetchData";
import {useEffect} from "react";
import {AuthContext} from "../../../context/AuthContext";
import {useContext} from "react";
import Preloader from "../../main/Preloader/Preloader";
import ModalWindow from "../../main/ModalWindow/ModalWindow";
import UserPanelAccount from "./UserPanelAccount/UserPanelAccount";
import useGlobal from "../../../Store/Store";

function UserPanelAccounts() {

    const [accounts, setAccounts] = useState([])
    const [globalState, globalActions] = useGlobal()

    const auth = useContext(AuthContext)


    useEffect(() => {
        fetchData(`user.accounts?token=${auth.token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }, setAccounts)

        fetchData(`user.settingsPresets?token=${auth.token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }, globalActions.settings.setSettings)
    }, [])


    if (accounts.length < 1) {
        return (
            <div>
                <UserPanelUnderHeader
                    name="Аккаунты"
                    description="Тут вы можете что-нибудь аккаунтить"/>
                <Preloader/>
            </div>
        )
    }

    const accountCounts = accounts.map((e, index) =>
            <UserPanelAccount
                seller={e.seller.name}
                login={e.login}
                key={index}
                data={e}/>
        // <div className={css.account}>
        //     <p>{e.seller.name}</p>
        //     <p>{e.login}</p>
        //     <button onClick={toggleModal}>Добавить сессию прогрева</button>
        // </div>
    )


    return (
        <div className={css.accounts}>

            {console.log(accounts)}
            <UserPanelUnderHeader
                name="Аккаунты"
                description="Тут вы можете что-нибудь аккаунтить"/>

            <div className="panelContainer">
                <div className={css.accountsContainer}>

                    {accountCounts}

                </div>
            </div>
        </div>


    )
}

export default UserPanelAccounts
