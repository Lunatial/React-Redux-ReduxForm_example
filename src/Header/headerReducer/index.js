import {NEW_FONTCOLOUR} from '../headerActions/types'

const initialState = {
    fontColour: 'black'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_FONTCOLOUR:
            return {
                ...state,
                fontColour: action.payload.colour
            };

        default:
            return state;
    }
}
