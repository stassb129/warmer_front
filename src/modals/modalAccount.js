import css from "./modalAccount.module.scss";

import {useEffect} from "react";
import {useContext} from "react";
import useGlobal from "../Store/Store";
import {AuthContext} from "../context/AuthContext";
import ModalWindow from "../components/main/ModalWindow/ModalWindow";

function ModalAccount() {

    const [globalState, globalActions] = useGlobal()
    const auth = useContext(AuthContext)

    const propsData = {
        name: globalState.modalAccount.name,
        login: globalState.modalAccount.login
    }

    return (
            // <ModalPortal>
                <ModalWindow height={{height: '90%'}} closeModal={globalActions.modals.toggleModalAccount}>
                    {console.log("АККАУНТ МОДАЛ")}
                    <div className={css.modalContent}>

                        <div className={css.description}>
                            <h2>{propsData.name}</h2>
                            <h5>ready</h5>
                            <h6>{propsData.login}</h6>
                        </div>

                        <button onClick={() => {
                            globalActions.modals.toggleModalSession(propsData)
                            globalActions.modals.toggleModalAccount(propsData)
                        }}
                                className={`${css.addSession} ${css.btn}`}>+ Сессия прогрева
                        </button>
                        <div className={css.accountStat}>
                            <div>Просмотренно страниц</div>
                            <div>Размер куков</div>
                            <div>Часов прогрето</div>
                        </div>

                        <div className={css.tableSessions}>
                            Таблица <br/>
                            Таблица
                            Таблица <br/>
                        </div>

                        <button className={`${css.downloadProfile} ${css.btn}`}>Скачать профиль</button>
                    </div>
                </ModalWindow>
            // </ModalPortal>
    )
}

export default ModalAccount