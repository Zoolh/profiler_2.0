import * as types from "../constants/profilActionTypes";


export const incrementPointGestion = (pointGestion) => ({
    type: types.ADD_POINT_GESTION,
    pointGestion : pointGestion
});

export const incrementReponseGestion = () => ({
    type: types.ADD_RESPONSE_GESTION_COUNT
});

