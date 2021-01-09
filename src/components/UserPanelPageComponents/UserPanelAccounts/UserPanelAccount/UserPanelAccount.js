import css from './userPanelAccount.module.scss'
import ModalWindow from "../../../main/ModalWindow/ModalWindow";
import {useState} from "react";
import ModalPortal from "../../../main/ModalPortal/ModalPortal";
import ModalAddAccounts from "../ModalAddAccounts/ModalAddAccounts";
import ModalAddPreset from "../ModalAddPreset/ModalAddPreset";
import useGlobal from "../../../../Store/Store";
import ModalAddProfile from "../ModalAddProfile/ModalAddProfile";

function UserPanelAccount({seller, login}) {

    const [globalState, globalActions] = useGlobal()

    return (
        <div className={css.account}>

            {/*МОДАЛКА СОЗДАНИЯ СЕССИИ*/}
            {/*{isModalAddAccount ? <ModalAddAccounts*/}
            {/*    login={login}*/}
            {/*    name={seller}*/}
            {/*    returnToModal={returnToModal}*/}
            {/*    closeModal={toggleModalAddAccount}/> : null}*/}

            {/*МОДАЛКА ДОБАВЛЕНИЯ ПРЕСЕТА*/}
            {/*{globalState.modalAddPreset.isActive ? <ModalAddPreset*/}
            {/*    login={login}*/}
            {/*    name={seller}*/}
            {/*    returnToModal={returnToModal}/> :null}*/}

            {/*МОДАЛКА ДОБАВЛЕНИЯ Профиля*/}

            {/*{globalState.modalAddProfile.isActive ? <ModalAddProfile*/}
            {/*    login={login}*/}
            {/*    name={seller}*/}
            {/*    returnToModal={returnToModal}/> :null}*/}

            {/*СОДЕРЖАНИЕ АККАУНТА*/}
            <p>{seller}</p>
            <p>{login}</p>
            <button onClick={()=>globalActions.modals.toggleModalAccount({name: seller, login})}>Открыть
            </button>
        </div>
    )
}

export default UserPanelAccount