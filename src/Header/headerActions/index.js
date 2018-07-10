import {NEW_FONTCOLOUR} from './types';

export const newColour = colour => ({
    type: NEW_FONTCOLOUR,
    payload: {colour}
});
