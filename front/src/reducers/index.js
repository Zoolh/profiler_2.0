import { combineReducers } from 'redux';
import profil from './profilReducer';
import gestion from './gestionReducer';
import proposition from './propositionReducer';

const rootReducer = combineReducers({
    profil,
    gestion,
    proposition
});

export default rootReducer