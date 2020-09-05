import * as types from "../constants/actionTypes";

const initialState = {
    propositionSelected: 0

}

export default function support(state = initialState, action) {
    switch (action.type) {
        case types.SET_PROPOSITION_SELECTED:
            return {
                ...state,
                propositionSelected: action.propositionId
            }
        default:
            return state
    }

}