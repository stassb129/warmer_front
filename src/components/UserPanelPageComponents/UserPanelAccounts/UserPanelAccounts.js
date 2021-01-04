import css from './userPanelAccounts.module.scss'
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";

function UserPanelAccounts() {
    return (
        <div className={css.accounts}>
            <UserPanelUnderHeader
                name="Аккаунты"
                description="Тут вы можете что-нибудь аккаунтить"/>
        </div>
    )
}

export default UserPanelAccounts
