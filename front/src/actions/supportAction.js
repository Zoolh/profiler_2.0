import * as types from "../constants/actionTypes";


export const setSelectedProposition = (propositionId) => ({
    type: types.SET_PROPOSITION_SELECTED,
    propositionId : propositionId
});

