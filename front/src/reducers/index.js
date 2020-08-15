import { combineReducers } from 'redux';
import profil from './profilReducer';
import gestion from './gestionReducer';
import support from './supportReducer';

const rootReducer = combineReducers({
    profil,
    gestion,
    support
});

export default rootReducer