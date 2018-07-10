import {NEW_FLAVOUR} from '../contentActions/types';

const initialState = {
    favouriteFlavour: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_FLAVOUR:
            return {
                ...state,
                favouriteFlavour: action.payload.flavour
            };

        default:
            return state;
    }
}
