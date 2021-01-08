import css from './userPanelSettings.module.scss'
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";
import useGlobal from "../../../Store/Store";

function UserPanelSettings() {
    return (
        <section>
            <UserPanelUnderHeader
                name="Настройки"
                description="Тут вы можете что-нибудь настроить"/>

                <div>

                </div>
        </section>
    )
}

export default UserPanelSettings
