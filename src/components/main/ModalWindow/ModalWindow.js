import css from './modalWindow.module.scss'
import {useState} from 'react'

function ModalWindow({name, closeModal, children, height}) {
    return (
        <div  className={css.wrapper}>
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