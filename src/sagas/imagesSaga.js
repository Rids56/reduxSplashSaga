import { call, put, select, takeEvery } from "redux-saga/effects";
import { IMAGES } from "../constants";
import { setImages, setError } from "../actions"
import { fetchImages } from "../api";

export const getPage = state => state.nextPage;

//worker saga
export function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        //dispatch error
        yield put(setError(error.toString()));
    }
}

// watcher saga
export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
