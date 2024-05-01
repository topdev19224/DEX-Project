import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

export default function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}