import css from './userPanelSettings.module.scss'
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";

function UserPanelSettings() {
    return (
        <section>
            <UserPanelUnderHeader
                name="Настройки"
                description="Тут вы можете что-нибудь настроить"/>
        </section>
    )
}

export default UserPanelSettings
