import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import homeReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

export default function homeStore(initialState) {
    const store = createStoreWithMiddleware(homeReducer, initialState);

    if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextHomeReducer = require('../reducers');
            store.replaceReducer(nextHomeReducer);
        })
    }

    return store;
}
