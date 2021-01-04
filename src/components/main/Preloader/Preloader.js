import css from './preloader.module.scss'

function Preloader() {
    return(
            <div className={css.lds_ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
    )
}

export default Preloader