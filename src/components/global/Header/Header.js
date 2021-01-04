import css from './header.module.scss'
import {Link} from "react-router-dom"
import {useState, useEffect} from "react";


function Header() {
    const [onScroll, setOnScroll] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    const scrollHandler = (e) => {
        if (window.scrollY === 0 && onScroll === true) {
            setOnScroll(false);
        } else if (window.scrollY !== 0 && onScroll !== true) {
            setOnScroll(true);
        }
    }

    const mobileMenuHandler = () => {
        // if (mobileMenu === false) {
        //     setMobileMenu(true)
        // } else if(mobileMenu ===true){
        //     setMobileMenu(false)
        // }
        mobileMenu? setMobileMenu(false) : setMobileMenu(true)
    }

    const headerStyle = {
        backgroundColor: 'rgba(26, 26, 26, 0.98)',
        height: '65px',
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
    });

    return (
        <header className={css.header}
                style={onScroll === true ? headerStyle : null}>


            <div className={css.logo}>
                Logo
            </div>

            <nav className={css.nav}>
                <Link className={css.navLink} to="/pisya">О НАС </Link>
                <Link className={css.navLink} to="/pisya">услуги</Link>
                <Link className={css.navLink} to="/pisya">работы</Link>
                <Link className={css.navLink} to="/pisya">Контакты</Link>

                <a href="#" className={css.navBtn}><i className="icon-list-nested"/></a>
            </nav>

            <nav className={css.navMobile}>
                <div className={`${css.modal} ${mobileMenu? css.modal_active : null}`}>
                    <i onClick={mobileMenuHandler} className="icon-cancel"/>
                    <Link className={css.navMobileLink} to="/pisya">О НАС </Link>
                    <Link className={css.navMobileLink} to="/pisya">услуги</Link>
                    <Link className={css.navMobileLink} to="/pisya">работы</Link>
                    <Link className={css.navMobileLink} to="/pisya">Контакты</Link>
                </div>
                <a onClick={mobileMenuHandler} className={css.navBtn}><i className="icon-list-nested"/></a>
            </nav>


        </header>
    )
}

export default Header
