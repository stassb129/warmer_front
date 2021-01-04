import css from './welcomePage.module.scss'
import Particles from 'react-particles-js'
import Header from "../../components/global/Header/Header"
import BlackDescriptionCard from "../../components/main/BlackDescriptionCard/BlackDescriptionCard"
import SmallDelimiter from "../../components/main/SmallDelimiter/SmallDelimiter"
import WorkCard from "../../components/main/WorkCard/WorkCard";
import {useState} from "react";
import ModalWindow from "../../components/main/ModalWindow/ModalWindow";

function WelcomePage() {

    const [isModal, setIsModal] = useState(false)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const toggleModal = () => {
        isModal === false ? setIsModal(true) : setIsModal(false)
        console.log(isModal)
        // console.log('piska')
    }

    const loginHandler = (e) => {
        setLogin(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const sendData = async (event) => {
        event.preventDefault()

        const data = {
            login: login,
            password: password
        }
        const fetchData = async () => {
            try {
                const res = await fetch('https://accwarmer-api.herokuapp.com/users.login', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const json = await res.json()
                console.log(json)

            } catch (error) {
                console.log(error)
            }
        }
        await fetchData()
    }


    return (
        <div className={css.wrapper}>

            {isModal ? <ModalWindow name="Войти в аккаунт" closeModal={toggleModal}>
                {/*<h2>Modal Name</h2>*/}


                <form>
                    <label>
                        Логин от вашего аккаунта:
                        <input type="text" value={login} onChange={loginHandler} placeholder="Логин" name="login"/>
                    </label>
                    <label>
                        Пароль от вашего аккаунта:
                        <input type="text" value={password} onChange={passwordHandler} placeholder="Пароль"
                               name="password"/>
                    </label>

                    <input type="submit" onClick={sendData} value="Войти"/>
                </form>
            </ModalWindow> : null}

            <Header/>

            {/*Приветственная страница*/}
            <div className={css.helloBlock}>
                <div className={css.background}>
                    <Particles className={css.particles}/>
                </div>

                <div className={css.content}>
                    <h1>anthill<b>warmer</b></h1>
                    <p>тут мы собираемся греть ваши попки</p>

                    <a href="#" onClick={toggleModal} className={css.loginBtn}>войти в аккаунт</a>

                    <div className={css.goDown}>
                        <i className={`icon-angle-down ${css.mainDown}`}/>
                        <i className={`icon-angle-down ${css.secretDown}`}/>
                    </div>
                </div>
            </div>

            {/*О нас*/}
            <section className={css.aboutBlock}>
                <div className={css.description}>
                    <h2>О <b>НАС</b></h2>
                    <h5><b>МЫ ДЕЛАЕМ</b> ШОТО ПИЗДАТОЕ</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus ducimus, ipsam
                        mollitia necessitatibus recusandae!</p>
                </div>


                <div className="container">
                    <div className={css.descriptionBlocks}>
                        <div className={css.descriptionItem}>
                            <i className="icon-target"/>
                            <h2>i love to <b>sosat piski</b></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa deserunt
                                eveniet
                                fugiat ipsam iste obcaecati porro, reprehenderit! Cum, saepe.</p>
                        </div>

                        <div className={css.descriptionItem}>
                            <i className="icon-cd"/>
                            <h2>i love to <b>sosat piski</b></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa deserunt
                                eveniet
                                fugiat ipsam iste obcaecati porro, reprehenderit! Cum, saepe.</p>
                        </div>

                        <div className={css.descriptionItem}>
                            <i className="icon-lightbulb"/>
                            <h2>i love to <b>sosat piski</b></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa deserunt
                                eveniet
                                fugiat ipsam iste obcaecati porro, reprehenderit! Cum, saepe.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Сервисы*/}

            <section className={css.services}>
                <div className="container">

                    <div className={css.descriptionBlack}>
                        <h2>НАШИ <b>СЕРВИСЫ</b></h2>
                        <SmallDelimiter/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus ducimus, ipsam
                            mollitia necessitatibus recusandae!</p>
                    </div>

                    <div className={css.descriptionCards}>
                        <BlackDescriptionCard
                            h='Брэнд'
                            p='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                            icon='icon-lightbulb'/>

                        <BlackDescriptionCard
                            h='Дезигн'
                            p='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                            icon='icon-lightbulb'/>

                        <BlackDescriptionCard
                            h='Проектирование'
                            p='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                            icon='icon-lightbulb'/>

                        <BlackDescriptionCard
                            h='Разработка'
                            p='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                            icon='icon-lightbulb'/>
                    </div>

                    <div className={css.descriptionServices}>
                        <div className={css.headingServices}>
                            <h2>
                                They’re whores. If the the job, there’s always another.
                            </h2>
                            <SmallDelimiter/>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores earum, excepturi
                                fuga molestias necessitatibus quaerat recusandae rerum tempore tenetur vitae.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolore dolorem
                                eveniet expedita hic iure minima modi molestiae, nisi provident unde, ut vel.</p>
                        </div>
                        <div className={css.servicesList}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/*Как это работает*/}
            <section className={css.howItWorks}>

                <div className={css.description}>
                    <h2>КАК ЭТО РАБОТАЕТ?</h2>
                    <h5><b>МЫ ДЕЛАЕМ</b> ШОТО ПИЗДАТОЕ</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus ducimus, ipsam
                        mollitia necessitatibus recusandae!</p>
                </div>

                <div className="container">
                    <div className={css.workCards}>
                        <WorkCard
                            icon="icon-eye"
                            h="AWESOME"
                            p="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."/>
                        <WorkCard
                            icon="icon-lightbulb"
                            h="INNOVATIVE"
                            p="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."/>
                        <WorkCard
                            icon="icon-thumbs-up-alt"
                            h="CREATIVE"
                            p="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."/>
                        <WorkCard
                            icon="icon-chart-line"
                            h="EXPERIMENTAL"
                            p="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."/>
                    </div>
                </div>
            </section>

            {/*Рабочий процесс*/}
            <section className={css.workProgress}>

                <div className={css.descriptionBlack}>
                    <h2>РАБОЧИЙ <b>ПРОЦЕСС</b></h2>
                    <SmallDelimiter/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus ducimus, ipsam
                        !</p>
                </div>

                <div className={css.workIcon}>
                    <i className="icon-chat"/>
                    <h2>1. DISCUSS</h2>
                </div>

                <div className={css.workIcon}>
                    <i className="icon-clipboard"/>
                    <h2>2. MAKE</h2>
                </div>

                <div className={css.workIcon}>
                    <i className="icon-heart"/>
                    <h2>3. PRODUCT</h2>
                </div>

            </section>
            {/*Отзывы*/}

        </div>
    )
}

export default WelcomePage
