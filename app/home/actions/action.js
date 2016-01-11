import fetch from 'isomorphic-fetch';
import { REQUEST_NAV_URL } from '../constants/Constant';
import ActionTypes from '../constants/ActionTypes';
import { homeMockJSON } from '../../../mock/home/NavJson';

function requestNavs(type) {
    return {
        type: ActionTypes.REQUEST_NAVS,
        type
    }
}

function receiveNavs(type, data) {
    debugger
    return {
        type: ActionTypes.RECEIVE_NAVS,
        name: type,
        data
    }
}

export function fetchNavs(type) {
    // return (dispatch) => {
    //     dispatch(requestNavs(type));
    //     return fetch(REQUEST_NAV_URL + '?type=' + type)
    //         .then(response => response.json())
    //         .then(json => dispatch(receiveNavs(type, json)))
    // }
    return (dispatch) => {
        dispatch(requestNavs(type));
        console.log(homeMockJSON());

        return dispatch(receiveNavs(type, homeMockJSON()));
        // return fetch(REQUEST_NAV_URL + '?type=' + type)
        //     .then(response => response.json())
        //     .then(json => dispatch(receiveNavs(type, json)))
    }
}
