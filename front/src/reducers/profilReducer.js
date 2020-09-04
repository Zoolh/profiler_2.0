import * as types from "../constants/profilActionTypes";

const initialState = {
    point: 0,
    nbReponses: 0,
    isMinor: false,
    isProfilPrudentAuto: false,
    isProfilTraderAuto: false
}

export default function profil(state = initialState, action) {
    switch (action.type) {
        case types.ADD_POINT_PROFIL:
            return {
                ...state,
                point: state.point + action.pointProfil
            }
        case types.ADD_RESPONSE_COUNT:
            return {
                ...state,
                nbReponses: state.nbReponses + 1
            }
        case types.SET_IS_MINOR:
            return {
                ...state,
                isMinor: action.isMinor
            }
        case types.SET_PROFIL_PRUDENT_AUTO:
            return {
                ...state,
                isProfilPrudentAuto: action.isProfilPrudent
            }
        case types.SET_PROFIL_TRADER_AUTO:
            return {
                ...state,
                isProfilTraderAuto: action.isProfilTraderAuto
            }
        default:
            return state
    }

}