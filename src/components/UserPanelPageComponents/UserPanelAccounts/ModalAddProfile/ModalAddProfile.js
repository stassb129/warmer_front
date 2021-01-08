import css from "./modalAddProfile.module.scss";
import ModalWindow from "../../../main/ModalWindow/ModalWindow";
import ModalPortal from "../../../main/ModalPortal/ModalPortal";
import useGlobal from "../../../../Store/Store";

function ModalAddProfile({name, closeModal}) {
    const [globalState, globalActions] = useGlobal()

    return (
        <ModalPortal>
            <ModalWindow closeModal={globalActions.modals.toggleModalAddProfile}>

                <div onClick={() => {
                    globalActions.modals.toggleModalAddProfile()
                }} className="returnBtn">❮
                </div>

                <div className={css.modalContent}>
                    <form className={css.form} action="">

                        <label htmlFor="profileName">Введите имя профиля</label>
                        <input type="text" placeholder="Имя"/>

                        <input className={css.submit} value="Сохранить" type="submit"/>
                    </form>
                </div>

            </ModalWindow>
        </ModalPortal>
    )
}

export default ModalAddProfile