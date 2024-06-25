import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();   //new
    const store = createStore(
        rootReducer,
        compose(                                        // new 
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    );
    sagaMiddleware.run(rootSaga);   //new

    // // Basic Example - Part 1 start
    // // multiple dispatch call worker multiple time
    // store.dispatch({ type: 'HELLO' });
    // store.dispatch({ type: 'HELLO' });
    // store.dispatch({ type: 'HELLO' });

    // // now handle mutiple dispatch with single call for login user
    // store.dispatch({ type: 'LOGIN' });
    // store.dispatch({ type: 'LOGIN' });
    // store.dispatch({ type: 'LOGIN' });

    // // execution of saga
    // store.dispatch({ type: 'LOGOUT' });
    // store.dispatch({ type: 'LOGIN' });
    // store.dispatch({ type: 'LOGOUT' });
    // // Basic Example - Part 1 end

    // // Basic Example - Part 2 start
    // Non Blocking pattern
    // store.dispatch({ type: 'NON-BLOCKING'});
    // // Basic Example - Part 2 start

    return store;
}

export default configureStore;


// with RTK 
// import { configureStore } from '@reduxjs/toolkit'
// export const store = configureStore({
// reducer: {},
// })