import css from './userPanelAccount.module.scss'
import ModalWindow from "../../../main/ModalWindow/ModalWindow";
import {useState} from "react";
import ModalPortal from "../../../main/ModalPortal/ModalPortal";
import ModalAddAccounts from "../ModalAddAccounts/ModalAddAccounts";
import ModalAddPreset from "../ModalAddPreset/ModalAddPreset";
import useGlobal from "../../../../Store/Store";
import ModalAddProfile from "../ModalAddProfile/ModalAddProfile";

function UserPanelAccount({seller, login}) {
    const [isModal, setIsModal] = useState(false)
    const [isModalAddAccount, setIsModalAddAccount] = useState(false)
    const [globalState, globalActions] = useGlobal()

    const toggleModal = () => {
        setIsModal(!isModal)
    }

    const toggleModalAddAccount = () => {
        setIsModalAddAccount(!isModalAddAccount)
    }

    const returnToModal = () => {
        setIsModal(!isModal)
    }

    const modalAdd = () => {
        setIsModalAddAccount(!isModalAddAccount)
    }


    return (
        <div className={css.account}>

            {isModal ? <ModalPortal>
                {/*МОДАЛКА*/}
                <ModalWindow height={{height: '90%'}} closeModal={toggleModal}>
                    <div className={css.modalContent}>

                        <div className={css.description}>
                            <h2>{seller}</h2>
                            <h5>ready</h5>
                            <h6>{login}</h6>
                        </div>

                        <button onClick={() => {
                            toggleModal()
                            modalAdd()
                        }} className={`${css.addSession} ${css.btn}`}>+ Сессия прогрева
                        </button>

                        <div className={css.accountStat}>
                            <div>Просмотренно страниц</div>
                            <div>Размер куков</div>
                            <div>Часов прогрето</div>
                        </div>

                        <div className={css.tableSessions}>
                            Таблица <br/>
                            Таблица
                            Таблица <br/>
                        </div>

                        <button className={`${css.downloadProfile} ${css.btn}`}>Скачать профиль</button>
                    </div>
                </ModalWindow>
            </ModalPortal> : null}

            {/*МОДАЛКА СОЗДАНИЯ СЕССИИ*/}
            {isModalAddAccount ? <ModalAddAccounts
                login={login}
                name={seller}
                returnToModal={returnToModal}
                closeModal={toggleModalAddAccount}/> : null}

            {/*МОДАЛКА ДОБАВЛЕНИЯ ПРЕСЕТА*/}
            {globalState.modalAddPreset.isActive ? <ModalAddPreset
                login={login}
                name={seller}
                returnToModal={returnToModal}/> :null}

            {/*МОДАЛКА ДОБАВЛЕНИЯ Профиля*/}

            {globalState.modalAddProfile.isActive ? <ModalAddProfile
                login={login}
                name={seller}
                returnToModal={returnToModal}/> :null}

            {/*СОДЕРЖАНИЕ АККАУНТА*/}
            <p>{seller}</p>
            <p>{login}</p>
            <button onClick={() => {
                setIsModal(!isModal)
            }}>Открыть
            </button>
        </div>
    )
}

export default UserPanelAccount