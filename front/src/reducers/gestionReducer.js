import * as types from "../constants/actionTypes";

const initialState = {
    point: 0,
    nbReponses: 0

}

export default function gestion(state = initialState, action) {
    switch (action.type) {
        case types.ADD_POINT_GESTION:
            return {
                ...state,
                point: state.point + action.pointGestion
            }
        case types.REMOVE_POINT_GESTION:
            return {
                ...state,
                point: state.point - action.pointGestionToRemove
            }
        case types.ADD_RESPONSE_GESTION_COUNT:
            return {
                ...state,
                nbReponses: state.nbReponses + 1
            }
        case types.REMOVE_ONE_RESPONSE_GESTION:
            return {
                ...state,
                nbReponses: state.nbReponses - 1
            }
        default:
            return state
    }

}