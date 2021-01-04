import css from './userPanelUnderHeader.module.scss'

function UserPanelUnderHeader(props) {
    return (
        <div className={css.underHeader}>
            <div className={css.container}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default UserPanelUnderHeader
