import * as types from "../constants/actionTypes";


export const lastAnswer = (dispatchToCall, valueToGive) => ({
    type: types.SET_LAST_ANSWER,
    dispatchToCall : dispatchToCall,
    valueToGive: valueToGive
});


export const removeLastAnswer = () => ({
    type: types.REMOVE_LAST_ANSWER
});
