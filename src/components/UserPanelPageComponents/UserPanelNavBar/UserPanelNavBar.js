import css from './userPanelNavBar.module.scss'
import UserPanelNavElement from "../UserPanelNavElement/UserPanelNavElement"
import {useState} from "react"


function UserPanelNavBar() {
    return (
        <nav className={css.nav}>
            <div className={css.headerNav}>
                ANTHILL
            </div>

            <div className={css.divider}/>

            <div className={css.navElements}>

                <UserPanelNavElement
                    text="Магазин"
                    path="shops"
                    icon="icon-basket"/>

                <UserPanelNavElement
                    text="Аккаунты"
                    path="accounts"
                    icon="icon-user"/>

                <UserPanelNavElement
                    text="Сессии"
                    path="sessions"
                    icon="icon-sun-filled"/>

                <UserPanelNavElement
                    text="Настройки"
                    path="settings"
                    icon="icon-cog"/>

                <UserPanelNavElement
                    text="Связь с нами"
                    path="message"
                    icon="icon-mail"/>
            </div>

        </nav>
    )
}

export default UserPanelNavBar
