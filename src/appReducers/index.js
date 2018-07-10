import { combineReducers } from 'redux';
import contentReducer from '../Content/contentReducer';
import headerReducer from '../Header/headerReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    flavourState: contentReducer,
    headerState: headerReducer,
    form: formReducer
});
