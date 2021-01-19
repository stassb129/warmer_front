import css from './userPanelProfileManager.module.scss'
import {useState} from "react";
import {fetchData} from "../../../API/FetchData";
import {useEffect} from "react";
import {AuthContext} from "../../../context/AuthContext";
import {useContext} from "react";
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";
import useGlobal from "../../../Store/Store";
import Preloader from "../../main/Preloader/Preloader";

function UserPanelProfileManager() {


    const [SessionModal, setSessionModal] = useState()
    const [globalState, globalActions] = useGlobal()

    const auth = useContext(AuthContext)


    const profiles = [
        {name: 'myProfile'},
        {name: 'myFavorite'},
        {name: 'Anton229'},
        {name: 'YouPso1'}
    ]

    useEffect(() => {
        fetchData(`user.profiles.get?token=${auth.token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }, globalActions.profiles.setInitProfiles)
    }, [])


    if (globalState.profiles.length < 1) {
        return (
            <div>
                <UserPanelUnderHeader
                    name="Аккаунты"
                    description="Тут вы можете что-нибудь аккаунтить"/>
                <Preloader/>
            </div>
        )
    }

    return (
        <section>
            <UserPanelUnderHeader
                name="Профили"
                description="Тут вы можете что-нибудь профильнуть"/>


            <div className="panelContainer">
                <div className={css.profiles}>
                    {
                        globalState.profiles.map((el, index) => {
                            return <div key={index} className={css.profile}>
                                <h3>{el.name}</h3>
                                <button className={css.download}>Скачать</button>
                            </div>

                        })
                    }


                </div>
            </div>
        </section>
    )
}

export default UserPanelProfileManager
