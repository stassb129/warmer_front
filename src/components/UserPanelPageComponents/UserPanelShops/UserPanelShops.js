import css from './userPanelShops.module.scss'
import UserPanelUnderHeader from "../UserPanelUnderHeader/UserPanelUnderHeader";
import UserPanelShopElement from "./UserPanelShopElement/UserPanelShopElement";
import amazon from '../../../images/logos/amazon.jpg'
import google from '../../../images/logos/google.png'
import aliexpress from '../../../images/logos/aliexpress.jpg'
import ModalWindow from "../../main/ModalWindow/ModalWindow";
import {useState} from "react";

function UserPanelShops() {
    const [isModal, setIsModal] = useState(false)

    const toggleModal = () => {
        isModal === false ? setIsModal(true) : setIsModal(false)
        console.log(isModal)
        // console.log('piska')
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

    const shopsMass = sellers.map((el,index) =>
        <UserPanelShopElement
            seller={el.name}
            logo={el.logo}

            clickHandler={toggleModal}/>
    )

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
