import {NEW_FLAVOUR} from './types';

export const newFlavour = flavour => dispatch => {
    dispatch({
        type: NEW_FLAVOUR,
        payload: {flavour}
    })
};
