import * as types from "../constants/profilActionTypes";


export const incrementPointProfil = (pointProfil) => ({
    type: types.ADD_POINT_PROFIL,
    pointProfil : pointProfil
});

export const incrementReponse = () => ({
    type: types.ADD_RESPONSE_COUNT
});

