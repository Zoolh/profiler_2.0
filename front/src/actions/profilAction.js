import * as types from "../constants/profilActionTypes";


export const incrementPointProfil = (pointProfil) => ({
    type: types.ADD_POINT_PROFIL,
    pointProfil : pointProfil
});

export const incrementReponse = () => ({
    type: types.ADD_RESPONSE_COUNT
});

export const setIsMinor = (isMinor) => ({
    type: types.SET_IS_MINOR,
    isMinor: isMinor
});

export const profilPrudentAuto = (isProfilPrudent) => ({
    type: types.SET_PROFIL_PRUDENT_AUTO,
    isProfilPrudent: isProfilPrudent
});

export const profilTraderAuto = (isProfilTrader) => ({
    type: types.SET_PROFIL_TRADER_AUTO,
    isProfilTraderAuto: isProfilTrader
})
