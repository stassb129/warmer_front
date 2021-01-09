import css from './userPanelSessions.module.scss'
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";
import {fetchData} from "../../../API/FetchData";
import {useEffect} from "react";
import {AuthContext} from "../../../context/AuthContext";
import {useContext} from "react";
import useGlobal from "../../../Store/Store";

function UserPanelSessions() {
    const [globalState, globalActions] = useGlobal()

    const presets = [
        {name: 'myPreset'},
        {name: 'otherPreset'},
        {name: 'oneMore'}
    ]
    const auth = useContext(AuthContext)

    useEffect(() => {
        fetchData(`user.settingsPresets?token=${auth.token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }, globalActions.settings.setSettings)
    }, [])


    return (
        <section>
            <UserPanelUnderHeader
                name="Пресеты сессий"
                description="Тут вы можете редактировать пресеты сессий"/>


            <div className="panelContainer">
                <div className={css.sessions}>

                    {globalState.settings.map((el, index) => {
                        return <div key={index} className={css.sessionPreset}>
                            <h3>{el.presetName}</h3>
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
