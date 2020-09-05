import * as types from "../constants/actionTypes";


export const incrementPointGestion = (pointGestion) => ({
    type: types.ADD_POINT_GESTION,
    pointGestion : pointGestion
});

export const decrementPointGestion = (pointGestionToRemove) => ({
    type: types.REMOVE_POINT_GESTION ,
    pointGestionToRemove : pointGestionToRemove
});

export const incrementReponseGestion = () => ({
    type: types.ADD_RESPONSE_GESTION_COUNT
});

export const decrementReponseGestion = () => ({
    type: types.REMOVE_ONE_RESPONSE_GESTION
});
