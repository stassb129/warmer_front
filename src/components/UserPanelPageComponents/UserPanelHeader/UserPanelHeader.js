import css from './userPanelHeader.module.scss'
import {useAuth} from "../../../hooks/useAuth";
import {AuthContext} from "../../../context/AuthContext";
import {useContext} from "react";
import {useHistory} from "react-router-dom";

function UserPanelHeader() {
    const { logout } = useContext(AuthContext)

    return (
        <header className={css.header}>
            <nav className={css.nav}>

                <div className={css.subscribe}>
                    Ваша подписка пригодна до: 25.05.2021
                </div>
                <div onClick={ logout } className={css.profile}>
                    Выйти
                </div>

            </nav>
        </header>
    )
}

export default UserPanelHeader
