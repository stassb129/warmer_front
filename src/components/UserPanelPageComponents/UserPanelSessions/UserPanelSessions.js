import css from './userPanelSessions.module.scss'
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";

function UserPanelSessions() {
    const presets = [
        {name: 'myPreset'},
        {name: 'otherPreset'},
        {name: 'oneMore'}
    ]


    return (
        <section>
            <UserPanelUnderHeader
                name="Пресеты сессии"
                description="Тут вы можете редактировать пресеты сессии"/>


            <div className="panelContainer">
                <div className={css.sessions}>

                    {presets.map((el, index) => {
                        return <div key={index} className={css.sessionPreset}>
                            <h3>{el.name}</h3>
                            <div className={css.btns}>
                                <button className={css.btn}>Редактировать</button>
                                <button className={`${css.btn} ${css.deleteBtn}`}>Удалить</button>
                            </div>
                        </div>
                    })}


                </div>
            </div>

        </section>
    )
}

export default UserPanelSessions
