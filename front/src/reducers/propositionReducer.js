import * as types from "../constants/actionTypes";

export default function proposition(state = { answersList: [] }, action) {
    switch (action.type) {
        case types.SET_LAST_ANSWER:
            return {
                ...state,
                answersList: [...state.answersList, { [action.dispatchToCall]: action.valueToGive }]

            }
        case types.REMOVE_LAST_ANSWER:
            return {
                ...state,
                answersList: state.answersList.slice(0, -1)

            }
        default:
            return state
    }

}