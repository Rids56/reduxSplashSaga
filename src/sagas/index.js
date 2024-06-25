import { all } from 'redux-saga/effects'
import imagesSaga from './imagesSaga'
import statsSaga from './statsSaga'
// import { call, put, take, takeEvery } from "redux-saga/effects";
// import { IMAGES } from "../constants";

// watcher Saga -> actions -> worker saga 

// // Basic Example - Part 1 start
// // worker saga
// function* workerSaga() {
//     console.log('worker saga');
//     yield put({ type: 'HELLO_WORKER_SAGA' })
// }

// function* logoutSaga() {
//     console.log('User logout');
// }

// // watcher saga
// function* rootSaga() {
//     // yield takeEvery('HELLO', workerSaga)

//     // // instead of takeEvery we use take for sigle call
//     // yield take('LOGIN')
//     // yield call(workerSaga);

//     // // saga execution handle login user -> only can -> logout
//     // // however logout first dispatch 
//      yield take('LOGIN');
//      yield call(workerSaga);
//     //  yield take('ADD_TO_CART');
//     //  yield take('BUY');
//      yield take('LOGOUT');
//      yield call(logoutSaga);
// }
// // Basic Example - Part 1 end


// // Basic Example - Part 2 start
// function* handleImagesLoad() {
//     console.log('handleImagesLoad');
// }

// // // until NON-BLOCKING action not fire we can't call load image event clicked button
// // function* nonBlockingFun() {
// //     console.log("Blocking/NonBlocking Example");
// // }

// function* rootSaga() {
//     // // takeEvery effect nonBlocking event which means 'NON-BLOCKING' callup before IMAGES.LOAD
//     // // to maintain chain of execution we use take effect
//     // yield takeEvery(IMAGES.LOAD, handleImagesLoad);
//     // yield takeEvery('NON-BLOCKING', nonBlockingFun);

//     // // until NON-BLOCKING action not fire we can't call load image event clicked button
//     // yield take('NON-BLOCKING');
//     // yield call(nonBlockingFun);
//     // yield take(IMAGES.LOAD);
//     // yield call(handleImagesLoad);

//     yield takeEvery(IMAGES.LOAD, handleImagesLoad);
// }
// // Basic Example - Part 2 end

// export default imagesSaga;
export default function* rootSaga() {
    yield all([
        imagesSaga(),
        statsSaga(),
    ])
};
