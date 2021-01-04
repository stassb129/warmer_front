import css from './userPanelSessions.module.scss'
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";

function UserPanelSessions() {
    return (
        <section>
            <UserPanelUnderHeader
                name="Магазины"
                description="Тут вы можете отслеживать сессии"/>
        </section>
    )
}

export default UserPanelSessions
