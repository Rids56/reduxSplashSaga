import { call, fork, put, take } from "redux-saga/effects";

import { IMAGES } from "../constants";
import { fetchImageStats } from "../api";
import { loadImageStats, setImageStats, setImageStatsError } from "../actions";

function* handleStatsRequest(id) {
    // handle continues hitting of failure on server - for loop
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.total));

            return true;  // image was loaded so we exit the generator
        } catch (e) {
            // we just need to retry and dispactch an error
            // if we tried more than 3 times
        }
    }
    yield put(setImageStatsError(id));
}

function* watchStatsRequest() {
    while (true) {
        // we get the action here
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i]?.id);
        }

        // // yeild not work in forEach
        // images.forEach(image => {
        //     yield fork(handleStatsRequest, image.id);            
        // });

    }
}

export default watchStatsRequest;