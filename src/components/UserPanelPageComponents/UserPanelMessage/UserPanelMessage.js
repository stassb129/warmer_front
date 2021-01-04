import css from './userPanelMessage.module.scss'
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";

function UserPanelMessage() {
    return (
        <section>
            <UserPanelUnderHeader
                name="Обратная связь"
                description="Тут вы можете нам что-нибудь отправить"/>
        </section>
    )
}

export default UserPanelMessage
