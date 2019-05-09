import { 
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS, 
    DELETE_STREAM,
    EDIT_STREAM } from '../actions/types';
import _ from 'lodash';

export const streamReducer = (initialState = {}, action) => {
    switch (action.type) {
        case EDIT_STREAM:
         return { ...initialState, [action.payload.id]: action.payload };
        case FETCH_STREAM:
         return { ...initialState, [action.payload.id]: action.payload };
        case CREATE_STREAM:
         return { ...initialState, [action.payload.id]: action.payload};
        case FETCH_STREAMS:
         return { ...initialState, ..._.mapKeys(action.payload, 'id')};
        case DELETE_STREAM:
         return _.omit(initialState, action.payload);
        default:
         return initialState;
    }
}