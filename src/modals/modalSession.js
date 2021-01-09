import css from './modalSession.module.scss'

import {useEffect} from "react";
import {useContext} from "react";
import useGlobal from "../Store/Store";
import {AuthContext} from "../context/AuthContext";
import {fetchData} from "../API/FetchData";
import ModalWindow from "../components/main/ModalWindow/ModalWindow";

function ModalSession() {
    const [globalState, globalActions] = useGlobal()
    const auth = useContext(AuthContext)

    useEffect(() => {
        fetchData(`user.settingsPresets?token=${auth.token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }, globalActions.settings.setSettings)
    }, [])

    const presets = [
        'Preset 1',
        'Preset 2',
        'Preset 3'
    ]

    const profiles = [
        'Profile 1',
        'Profile 2',
        'Profile 3'
    ]

    const propsData = {
        name: globalState.modalSession.name,
        login: globalState.modalSession.login
    }

    return (
            <ModalWindow name={propsData.name} closeModal={globalActions.modals.toggleModalSession}>

                {console.log('Сессии МОДАЛ')}
                <div onClick={() => {
                    globalActions.modals.toggleModalSession(propsData)
                    globalActions.modals.toggleModalAccount(propsData)
                }} className={css.returnBtn}>❮
                </div>

                <div className={css.modalContent}>

                    <h4 className={css.description}>Создание сесии прогрева для <b>{propsData.login}</b></h4>

                    <div className={css.dropDown}>
                        {/*Выберете пресет настроек*/}
                        <label className={css.label} htmlFor="preset">Выберете пресет настроек</label>
                        <select name="preset" id="preset">
                            {
                                globalState.settings.map((el, index) => {
                                    return <option key={index} value={`${el.presetName}`}>{el.presetName}</option>
                                })
                            }
                        </select>
                        <div onClick={globalActions.modals.toggleModalPreset} className={css.addPreset}>+</div>
                    </div>


                    <div className={css.dropDown}>
                        {/*Выберете профиль*/}
                        <label className={css.label} htmlFor="profile">Выберете профиль для прогрева</label>
                        <select name="profile" id="profile">
                            {
                                profiles.map((el, index) => {
                                    return <option key={index} value={`${el}`}>{el}</option>
                                })
                            }
                        </select>


                        <div onClick={globalActions.modals.toggleModalProfile} className={css.addPreset}>+</div>
                    </div>

                    <button className={css.addBtn}>Добавить</button>

                </div>
            </ModalWindow>
    )
}

export default ModalSession