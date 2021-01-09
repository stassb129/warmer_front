import React from 'react'
import * as actions from "../actions/index";
import globalHook from 'use-global-hook'

const initialState = {
    //ЕБУЧИЕ МОДАЛКИ
    modalShops: {
        isActive: false,
        name: ''
    },
    modalAccount: {
        isActive: false,
        name: '',
        login: ''
    },
    modalSession: {
        isActive: false,
        name: '',
        login: ''
    },
    modalPreset: {
        isActive: false
    },
    modalProfile: {
        isActive: false
    },

    //Настройки
    settings: []
};


const useGlobal = globalHook(React, initialState, actions)

export default useGlobal