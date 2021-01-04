import css from './userPanelPage.module.scss'
import UserPanelNavBar from "../../components/UserPanelPageComponents/UserPanelNavBar/UserPanelNavBar";
import UserPanelContent from "../../components/UserPanelPageComponents/UserPanelContent/UserPanelContent";


function  UserPanelPage() {
    return (
        <div className={css.wrapper}>
           <UserPanelNavBar />
           <UserPanelContent />
        </div>
    )
}

export default UserPanelPage
