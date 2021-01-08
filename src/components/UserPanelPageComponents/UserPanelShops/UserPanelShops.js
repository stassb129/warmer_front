import css from './userPanelShops.module.scss'
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";
import UserPanelShopElement from "./UserPanelShopElement/UserPanelShopElement";
import amazon from '../../../images/logos/amazon.jpg'
import google from '../../../images/logos/google.png'
import aliexpress from '../../../images/logos/aliexpress.jpg'
import ModalWindow from "../../main/ModalWindow/ModalWindow";
import {useState} from "react";
import {useFetch} from "../../../hooks/useFetch";
import {AuthContext} from "../../../context/AuthContext";
import {useContext} from "react";
import {useEffect} from "react";
import {fetchData} from "../../../API/FetchData";
import Preloader from "../../main/Preloader/Preloader";
import useGlobal from "../../../Store/Store";

function UserPanelShops() {
    const [globalState, globalActions] = useGlobal()
    const [isModal, setIsModal] = useState(false)
    const [shops, setShops] = useState([])


    useEffect(() => {
        fetchData(`sellers.getAll?token=${auth.token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }, setShops)
    }, [])

    const auth = useContext(AuthContext)


    const toggleModal = () => {
        isModal === false ? setIsModal(true) : setIsModal(false)
    }

    const sellers = [
        {
            name: 'AMAZON',
            logo: amazon
        },
        {
            name: 'GOOGLE',
            logo: google
        },
        {
            name: 'ALIEXPRESS',
            logo: aliexpress
        }
    ]


    const shopsMass = shops.map((el, index) =>
        <UserPanelShopElement
            seller={el.name}
            logo={el.logo}
            key={el.id}
            clickHandler={toggleModal}/>
    )

    if (shops.length < 1) {
        return (
            <div>
                <UserPanelUnderHeader
                    name="Магазины"
                    description="Тут вы можете что-нибудь купить у нас"/>
                <Preloader/>
            </div>
        )
    }

    return (
        <section>
            {isModal ? <ModalWindow name="AMAZON" closeModal={toggleModal}>
                {/*<h2>Modal Name</h2>*/}
                <form>
                    <label>
                        Логин от вашего аккаунта:
                        <input type="text" placeholder="Логин" name="login"/>
                    </label>
                    <label>
                        Пароль от вашего аккаунта:
                        <input type="text" placeholder="Пароль" name="password"/>
                    </label>

                    <input type="submit" value="Активировать"/>
                </form>
            </ModalWindow> : null}

            <UserPanelUnderHeader
                name="Магазины"
                description="Тут вы можете что-нибудь купить у нас"/>

            <div className="panelContainer">
                <div className={css.shops}>
                    {shopsMass}
                </div>

            </div>
        </section>

    )
}

export default UserPanelShops
