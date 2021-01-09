import css from "./modalProfile.module.scss";

import ModalWindow from "../components/main/ModalWindow/ModalWindow";
import useGlobal from "../Store/Store";


function ModalProfile({name, closeModal}) {
    const [globalState, globalActions] = useGlobal()

    return (
            <ModalWindow closeModal={globalActions.modals.toggleModalProfile}>

                <div className={css.modalContent}>
                    <form className={css.form} action="">

                        <label htmlFor="profileName">Введите имя профиля</label>
                        <input type="text" placeholder="Имя"/>

                        <input className={css.submit} value="Сохранить" type="submit"/>
                    </form>
                </div>

            </ModalWindow>
    )
}

export default ModalProfile