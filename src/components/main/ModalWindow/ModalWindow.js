import css from './modalWindow.module.scss'
import {useState} from 'react'
import ModalPortal from "../ModalPortal/ModalPortal";
import useGlobal from "../../../Store/Store";

function ModalWindow({name, closeModal, children, height}) {
    const [globalState, globalActions] = useGlobal()


    return (
        <div className={css.wrapper}>
            <div className={css.background} onClick={closeModal}/>
            <div style={height} className={css.modal}>
                <div className={css.name}>{name}</div>
                <i className={`icon-cancel ${css.close}`} onClick={closeModal}/>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow