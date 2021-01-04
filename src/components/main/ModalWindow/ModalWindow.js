import css from './modalWindow.module.scss'
import {useState} from 'react'

function ModalWindow({name, closeModal, children}) {
    return (
        <div className={css.wrapper}>
            <div className={css.background} onClick={closeModal}/>
            <div className={css.modal}>
                <div className={css.name}>{name}</div>
                <i className={`icon-cancel ${css.close}`} onClick={closeModal}/>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow