import * as types from "../constants/profilActionTypes";


export const setSelectedProposition = (propositionId) => ({
    type: types.SET_PROPOSITION_SELECTED,
    propositionId : propositionId
});

