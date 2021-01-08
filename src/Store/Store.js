import React from 'react'
import * as actions from "../actions/index";
import globalHook from 'use-global-hook'

const initialState = {

        modalAddPreset: {
            isActive: false
        },
        modalAddProfile: {
            isActive: false
        }


};


const useGlobal = globalHook(React, initialState, actions)

export default useGlobal