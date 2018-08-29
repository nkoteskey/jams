import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';

// Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const middlewareApplied = process.env.NODE_ENV === 'production' ? applyMiddleware(thunk) : composeEnhancers(applyMiddleware(thunk));

export default function ConfigureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        middlewareApplied
    );
}
