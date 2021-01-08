import css from './userPanelNavElement.module.scss'
import {NavLink} from "react-router-dom";

function  UserPanelNavElement(props) {
    return (
        <NavLink activeClassName={css.link_active} to={`${props.path}`} className={css.link}>
            <i className={props.icon}/>
            <h2>{props.text}</h2>
        </NavLink>
    )
}

export default UserPanelNavElement
