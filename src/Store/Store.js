import React from 'react'
import * as actions from "../actions/index";
import globalHook from 'use-global-hook'

const initialState = {
    modalShops: {
        isActive: false
    },
    modalAddPreset: {
        isActive: false
    },
    modalAddProfile: {
        isActive: false
    },
    settings: []
};


const useGlobal = globalHook(React, initialState, actions)

export default useGlobal