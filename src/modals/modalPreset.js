import css from "./modalPreset.module.scss";

import {useState} from "react";
import {useEffect} from "react";
import useGlobal from "../Store/Store";
import ModalWindow from "../components/main/ModalWindow/ModalWindow";

function ModalPreset() {
    const [globalState, globalActions] = useGlobal()

    const [presetName, setPresetName] = useState()
    const [sellerUrl, setSellerUrl] = useState()
    const [warmAllMinutes, setWarmAllMinutes] = useState()
    const [warmAllPause, setWarmAllPause] = useState()
    const [isNeedLikeComments, setIsNeedLikeComments] = useState()
    const [isNeedLeaveComment, setIsNeedLeaveComment] = useState()
    const [isNeedSortByMaxPrice, setIsNeedSortByMaxPrice] = useState()
    const [sellerKeyWordsCSV, setSellerKeyWordsCSV] = useState()
    const [prioritySellerKeyWordsCSV, setPrioritySellerKeyWordsCSV] = useState()

    return (

            <ModalWindow height={{height: '90%'}} closeModal={globalActions.modals.toggleModalPreset}>



                <div className={css.modalContent}>
                    <form className={css.settings} action="">

                        {/*SETTINGS*/}
                        <div className={css.setting}>
                            <label className={css.label} htmlFor="presetName">Введите имя пресета</label>
                            <input name="presetName"
                                   id="presetName"
                                   placeholder="Введите имя пресета"
                                   onChange={event => setPresetName(event.target.value)}
                                   type="text"/>
                        </div>

                        <div className={css.setting}>
                            <label className={css.label} htmlFor="sellerUrl">Введите URL магазина</label>
                            <input name="sellerUrl"
                                   id="sellerUrl"
                                   placeholder="Введите URL магазина"
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
                                   type="text"/>
                        </div>


                        <div className={css.setting}>
                            <label className={css.label} htmlFor="warmAllPause">Введите время пауз</label>
                            <input name="warmAllPause"
                                   id="warmAllPause"
                                   placeholder="Введите время пауз"
                                   type="text"/>
                        </div>


                        <div className={`${css.setting} ${css.checkbox}`}>
                            <label className={css.label} htmlFor="isNeedLikeComments">Нужно ли оставлять лайки под
                                отзывами</label>
                            <input name="isNeedLikeComments"
                                   id="isNeedLikeComments"
                                   placeholder=""
                                   type="checkbox"/>
                        </div>


                        <div className={`${css.setting} ${css.checkbox}`}>
                            <label className={css.label} htmlFor="isNeedLeaveComment">Нужно ли оставлять коментарии под
                                отзывами</label>
                            <input name="isNeedLeaveComment"
                                   id="isNeedLeaveComment"
                                   placeholder="Введите isNeedLeaveComment"
                                   type="checkbox"/>
                        </div>


                        <div className={`${css.setting} ${css.checkbox}`}>
                            <label className={css.label} htmlFor="isNeedSortByMaxPrice">Нужно ли сортировать товары по
                                максимальной цене</label>
                            <input name="isNeedSortByMaxPrice"
                                   id="isNeedSortByMaxPrice"
                                   placeholder="Введите isNeedSortByMaxPrice"
                                   type="checkbox"/>
                        </div>


                        <div className={`${css.setting}`}>
                            <label className={css.label} htmlFor="sellerKeyWordsCSV">Введите ключивые слова для поиска в
                                магазине</label>
                            <input name="sellerKeyWordsCSV"
                                   id="sellerKeyWordsCSV"
                                   placeholder="PlayStation 5, IphoneX, xbox360"
                                   type="text"/>
                        </div>


                        <div className={`${css.setting}`}>
                            <label className={css.label} htmlFor="prioritySellerKeyWordsCSV">Введите приоритетные
                                ключивые слова для поиска в магазине</label>
                            <input name="prioritySellerKeyWordsCSV"
                                   id="prioritySellerKeyWordsCSV"
                                   placeholder="PlayStation 5, IphoneX, xbox360"
                                   type="text"/>
                        </div>


                        <input type="submit" className={css.submit} value="Сохранить"/>
                    </form>
                </div>

            </ModalWindow>
    )
}

export default ModalPreset