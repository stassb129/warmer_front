import css from './userPanelProfileManager.module.scss'
import {useState} from "react";
import {fetchData} from "../../../API/FetchData";
import {useEffect} from "react";
import {AuthContext} from "../../../context/AuthContext";
import {useContext} from "react";
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";

function UserPanelProfileManager() {


    const [accounts, setAccounts] = useState([])
    const [SessionModal, setSessionModal] = useState()

    const auth = useContext(AuthContext)


    const profiles = [
        {name: 'myProfile'},
        {name: 'myFavorite'},
        {name: 'Anton229'},
        {name: 'YouPso1'}
    ]

    // useEffect(() => {
    //     fetchData(`user.accounts?token=${auth.token}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }, setAccounts)
    // }, [])


    // if (accounts.length < 1) {
    //     return (
    //         <div>
    //             <UserPanelUnderHeader
    //                 name="Аккаунты"
    //                 description="Тут вы можете что-нибудь аккаунтить"/>
    //             <Preloader/>
    //         </div>
    //     )
    // }

    // const accountCounts = accounts.map((e, index) =>
    //
    //         <UserPanelAccount
    //             seller={e.seller.name}
    //             login={e.login}
    //             key={index}
    //             data={e}
    //         />
    // )


    return (
        <section>
            <UserPanelUnderHeader
                name="Профили"
                description="Тут вы можете что-нибудь профильнуть"/>


            <div className="panelContainer">
                <div className={css.profiles}>
                    {
                        profiles.map((el, index) => {
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
