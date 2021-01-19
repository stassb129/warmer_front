import css from "./modalProfile.module.scss";

import ModalWindow from "../components/main/ModalWindow/ModalWindow";
import useGlobal from "../Store/Store";
import {useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";

function ModalProfile() {

    const [name, setName] = useState()
    const auth = useContext(AuthContext)
    const [globalState, globalActions] = useGlobal()

    const nameHandler = (event) => {
        setName(event.target.value)
        console.log(name)
    }

    const sendData = async (event) => {
        event.preventDefault()

        const data = {
            credJson: 'something',
            googleDriveId: 12,
            name: name
        }
        const fetchData = async () => {
            try {
                const res = await fetch(`https://accwarmer-api.herokuapp.com/user.profile.add?token=${auth.token}`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const json = await res.json()


                console.log('вот имто', json)
                globalActions.profiles.setProfile(json)


            } catch (error) {
                console.log(error)
            }
        }
        await fetchData()
    }

    return (
            <ModalWindow closeModal={globalActions.modals.toggleModalProfile}>

                <div className={css.modalContent}>
                    <form className={css.form} action="">

                        <label htmlFor="profileName">Введите имя профиля</label>
                        <input type="text" onChange={nameHandler} value={name} placeholder="Имя"/>

                        <input className={css.submit} onClick={sendData} value="Сохранить" type="submit"/>
                    </form>
                </div>

            </ModalWindow>
    )
}

export default ModalProfile