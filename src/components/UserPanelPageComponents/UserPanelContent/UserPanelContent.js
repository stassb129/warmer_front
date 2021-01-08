import css from './userPanelContent.module.scss'
import UserPanelHeader from "../UserPanelHeader/UserPanelHeader";
import {Switch, Route} from 'react-router-dom'
import UserPanelShops from "../UserPanelShops/UserPanelShops";
import UserPanelAccounts from "../UserPanelAccounts/UserPanelAccounts";
import UserPanelSessions from "../UserPanelSessions/UserPanelSessions";
import UserPanelSettings from "../UserPanelSettings/UserPanelSettings";
import UserPanelMessage from "../UserPanelMessage/UserPanelMessage";
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";
import UserPanelProfileManager from "../UserPanelProfileManager/UserPanelProfileManager";

function  UserPanelContent() {
    return (
        <div className={css.content}>

            <UserPanelHeader />

            <Switch>
                <Route path='/shops' component={UserPanelShops} />
                <Route path='/accounts' component={UserPanelAccounts} />
                <Route path='/sessions' component={UserPanelSessions} />
                <Route path='/profiles' component={UserPanelProfileManager} />
                <Route path='/settings' component={UserPanelSettings} />
                <Route path='/message' component={UserPanelMessage} />
            </Switch>

        </div>
    )
}

export default UserPanelContent
