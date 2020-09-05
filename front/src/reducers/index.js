import { combineReducers } from 'redux';
import profil from './profilReducer';
import gestion from './gestionReducer';
import support from './supportReducer';
import proposition from './propositionReducer';

const rootReducer = combineReducers({
    profil,
    gestion,
    support,
    proposition
});

export default rootReducer