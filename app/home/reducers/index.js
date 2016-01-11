import { combineReducers } from 'redux';

import ActionTypes from '../constants/ActionTypes';

function getNavs(state = 'home', action) {
    switch (action.type) {
        case ActionTypes.REQUEST_NAVS:
            return Object.assign({}, state);
        case ActionTypes.RECEIVE_NAVS:
            return Object.assign({}, state, {
                items: action.data
            });
        default:
            return state;
    }
}

function postNavs(state = {}, action) {
    debugger
    switch(action.type) {
        case ActionTypes.REQUEST_NAVS:
        case ActionTypes.RECEIVE_NAVS:
            return Object.assign({}, state, {data: action.data})
        default:
            return state;
    }
}

const reducers = combineReducers({
    postNavs
});

export default reducers;
