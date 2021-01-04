import css from './userPanelHeader.module.scss'

function UserPanelHeader() {
    return (
        <header className={css.header}>
            <nav className={css.nav}>

                <div className={css.subscribe}>
                    Ваша подписка пригодна до: 25.05.2021
                </div>
                <div className={css.profile}/>

            </nav>
        </header>
    )
}

export default UserPanelHeader
