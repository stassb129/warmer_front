import css from "./modalAddAccounts.module.scss";
import ModalWindow from "../../../main/ModalWindow/ModalWindow";
import ModalPortal from "../../../main/ModalPortal/ModalPortal";
import useGlobal from "../../../../Store/Store";
import {fetchData} from "../../../../API/FetchData";
import {useEffect} from "react";
import {AuthContext} from "../../../../context/AuthContext";
import {useContext} from "react";

function ModalAddAccounts({closeModal, returnToModal, name, login}) {
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


    return (
        <ModalPortal>
            <ModalWindow name={name} closeModal={closeModal}>

                <div onClick={() => {
                    returnToModal()
                    closeModal()
                }} className={css.returnBtn}>❮
                </div>

                <div className={css.modalContent}>

                    <h4 className={css.description}>Создание сесии прогрева для <b>{login}</b></h4>

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
                        <div onClick={globalActions.modals.toggleModalAddPreset} className={css.addPreset}>+</div>
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


                        <div onClick={globalActions.modals.toggleModalAddProfile} className={css.addPreset}>+</div>
                    </div>

                    <button className={css.addBtn}>Добавить</button>

                </div>
            </ModalWindow>
        </ModalPortal>
    )
}

export default ModalAddAccounts