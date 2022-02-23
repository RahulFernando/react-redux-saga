import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

// reducers
import createReducers from '../reducers';

// sagas
import rootSaga from '../sagas';

export default function configureAppStor() {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const rootReducer = combineReducers(createReducers);
    const middlewares = [sagaMiddleware];

    const store = configureStore({
        reducer: rootReducer,
        middleware: [...middlewares],
        devTools: process.env.NODE_ENV !== 'production',
    })

    sagaMiddleware.run(rootSaga);

    return store;
}
