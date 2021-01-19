import css from "./modalPreset.module.scss";

import {useState} from "react";
import {useEffect} from "react";
import useGlobal from "../Store/Store";
import ModalWindow from "../components/main/ModalWindow/ModalWindow";
import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";

function ModalPreset() {
    const [globalState, globalActions] = useGlobal()

    const auth = useContext(AuthContext)

    const [presetName, setPresetName] = useState('')
    const [sellerUrl, setSellerUrl] = useState('')
    const [warmAllMinutes, setWarmAllMinutes] = useState('')
    const [warmAllPause, setWarmAllPause] = useState('')
    const [isNeedLikeComments, setIsNeedLikeComments] = useState(false)
    const [isNeedLeaveComment, setIsNeedLeaveComment] = useState(false)
    const [isNeedSortByMaxPrice, setIsNeedSortByMaxPrice] = useState(false)
    const [sellerKeyWordsCSV, setSellerKeyWordsCSV] = useState('')
    const [prioritySellerKeyWordsCSV, setPrioritySellerKeyWordsCSV] = useState('')

    console.log(
        presetName,
        sellerUrl,
        warmAllMinutes,
        warmAllPause,
        isNeedLikeComments,
        isNeedLeaveComment,
        isNeedSortByMaxPrice,
        sellerKeyWordsCSV,
        prioritySellerKeyWordsCSV
    )


    const anilingus = (mass) => {
        const splitArr = mass.split(',')
        const newArr = splitArr.map((el) => {
           return  el.trim()
        })
        let csv = newArr.map(e=> e+=';').join('')
        return csv.substring(0, csv.length - 1)
    }


    const sendData = async (event) => {
        event.preventDefault()

        const data = {
            presetName: presetName,
            sellerUrl: sellerUrl,
            warmAllMinutes: warmAllMinutes,
            warmAllPause: warmAllPause,
            isNeedLikeComments: isNeedLikeComments,
            isNeedLeaveComment: isNeedLeaveComment,
            isNeedSortByMaxPrice: isNeedSortByMaxPrice,
            sellerKeyWordsCSV: anilingus(sellerKeyWordsCSV),
            prioritySellerKeyWordsCSV: anilingus(prioritySellerKeyWordsCSV)
        }
        const fetchData = async () => {
            try {
                const res = await fetch(`https://accwarmer-api.herokuapp.com/user.settingsPresets.add?token=${auth.token}`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const json = await res.json()

                globalActions.settings.setSetting(json)

            } catch (error) {
                console.log(error)
            }
        }
        await fetchData()
    }

    return (
        <ModalWindow height={{height: '90%'}} closeModal={globalActions.modals.toggleModalPreset}>

            <div className={css.modalContent}>
                <form className={css.settings} action="">

                    {/*SETTINGS*/}
                    <div className={css.setting}>
                        <label className={css.label} htmlFor="presetName">Введите имя пресета</label>
                        <input name="presetName"
                               id="presetName"
                               value={presetName}
                               placeholder="Введите имя пресета"
                               onChange={event => setPresetName(event.target.value)}
                               type="text"/>
                    </div>

                    <div className={css.setting}>
                        <label className={css.label} htmlFor="sellerUrl">Введите URL магазина</label>
                        <input name="sellerUrl"
                               id="sellerUrl"
                               placeholder="Введите URL магазина"
                               value={sellerUrl}
                               onChange={event => setSellerUrl(event.target.value)}
                               type="text"/>
                    </div>

                    {/*<div className={`${css.setting} ${css.select}`}>*/}
                    {/*    <label className={css.label} htmlFor="cursorSpeed">Выберите скорость мыши</label>*/}
                    {/*    <select name="cursorSpeed" placeholder="Выберите скрорость мыши" id="cursorSpeed">*/}
                    {/*        <option value="-1">Медленно</option>*/}
                    {/*        <option value="0">Средне</option>*/}
                    {/*        <option value="1">Быстро</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}

                    <div className={css.setting}>
                        <label className={css.label} htmlFor="warmAllMinutes">Введите время прогрева</label>
                        <input name="warmAllMinutes"
                               id="warmAllMinutes"
                               placeholder="60"
                               value={warmAllMinutes}
                               onChange={event => setWarmAllMinutes(event.target.value)}
                               type="text"/>
                    </div>


                    <div className={css.setting}>
                        <label className={css.label} htmlFor="warmAllPause">Введите время пауз</label>
                        <input name="warmAllPause"
                               id="warmAllPause"
                               placeholder="Введите время пауз"
                               value={warmAllPause}
                               onChange={event => setWarmAllPause(event.target.value)}
                               type="text"/>
                    </div>


                    <div className={`${css.setting} ${css.checkbox}`}>
                        <label className={css.label} htmlFor="isNeedLikeComments">Нужно ли оставлять лайки под
                            отзывами</label>
                        <input name="isNeedLikeComments"
                               id="isNeedLikeComments"
                               placeholder=""
                               value={isNeedLikeComments}
                               onChange={event => setIsNeedLikeComments(event.target.checked)}
                               type="checkbox"/>
                    </div>


                    <div className={`${css.setting} ${css.checkbox}`}>
                        <label className={css.label} htmlFor="isNeedLeaveComment">Нужно ли оставлять коментарии под
                            отзывами</label>
                        <input name="isNeedLeaveComment"
                               id="isNeedLeaveComment"
                               placeholder="Введите isNeedLeaveComment"
                               value={isNeedLeaveComment}
                               onChange={event => setIsNeedLeaveComment(event.target.checked)}
                               type="checkbox"/>
                    </div>


                    <div className={`${css.setting} ${css.checkbox}`}>
                        <label className={css.label} htmlFor="isNeedSortByMaxPrice">Нужно ли сортировать товары по
                            максимальной цене</label>
                        <input name="isNeedSortByMaxPrice"
                               id="isNeedSortByMaxPrice"
                               placeholder="Введите isNeedSortByMaxPrice"
                               value={isNeedSortByMaxPrice}
                               onChange={event => setIsNeedSortByMaxPrice(event.target.checked)}
                               type="checkbox"/>
                    </div>


                    <div className={`${css.setting}`}>
                        <label className={css.label} htmlFor="sellerKeyWordsCSV">Введите ключивые слова для поиска в
                            магазине</label>
                        <input name="sellerKeyWordsCSV"
                               id="sellerKeyWordsCSV"
                               placeholder="PlayStation 5, IphoneX, xbox360"
                               value={sellerKeyWordsCSV}
                               onChange={event => setSellerKeyWordsCSV(event.target.value)}
                               type="text"/>
                    </div>


                    <div className={`${css.setting}`}>
                        <label className={css.label} htmlFor="prioritySellerKeyWordsCSV">Введите приоритетные
                            ключивые слова для поиска в магазине</label>
                        <input name="prioritySellerKeyWordsCSV"
                               id="prioritySellerKeyWordsCSV"
                               placeholder="PlayStation 5, IphoneX, xbox360"
                               value={prioritySellerKeyWordsCSV}
                               onChange={event => setPrioritySellerKeyWordsCSV(event.target.value)}
                               type="text"/>
                    </div>


                    <input type="submit" className={css.submit} onClick={sendData} value="Сохранить"/>
                </form>
            </div>

        </ModalWindow>
    )
}

export default ModalPreset