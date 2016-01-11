import React from 'react';
import { render } from 'react-dom';
import { createHistory, useBasename} from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import Store from './home/store/store';

const store = Store();
console.log('store=' + store);

const history = useBasename(createHistory)({
    basename: '/'
});

const routes = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./home/containers/Home'),
        // childRoutes: [
        //     require('./routers/'),
        // ]
    }]
};

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('container')
);
