import * as types from "../constants/profilActionTypes";

const initialState = {
    point: 0,
    nbReponses: 0

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
        default:
            return state
    }

}