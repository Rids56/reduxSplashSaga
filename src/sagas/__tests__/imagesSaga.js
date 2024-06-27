import { runSaga } from "redux-saga";
import { getPage, handleImagesLoad } from "../imagesSaga";
import * as api from '../../api';
import { setError, setImages } from "../../actions";

test('selector gives back the page', () => {
    const nextPage = 1;
    const state = { nextPage };
    const res = getPage(state);
    // console.log("test", res);
    expect(res).toBe(nextPage);
});

test('should load images and handle them in case of success', async() => {
    // dispatched actions
    const dispatchedActions = [];

    // api test
    const mockedImages = ['abc', 'xyz'];
    api.fetchImages = jest.fn(() => Promise.resolve(mockedImages));

    // Make assertions on fake store
    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: action => dispatchedActions.push(action),
    }
    // wait saga to finish
    await runSaga(fakeStore, handleImagesLoad).done;

    //assertions of api call test
    // expect(dispatchedActions).not.toContainEqual(setImages(mockedImages)); // not contain images
    expect(dispatchedActions).toContainEqual(setImages(mockedImages));
    expect(api.fetchImages.mock.calls.length).toBe(1);
    // console.log('Images test ---->', dispatchedActions);
});

// for  images Saga FAIL cases
test('should handle errors in case of fail', async() => {
    // dispatched actions
    const dispatchedActions = [];

    // api test
    const error = 'Some error is thrown'
    // for throw error - reject
    api.fetchImages = jest.fn(() => Promise.reject(error));

    // Make assertions on fake store
    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: action => dispatchedActions.push(action),
    }
    // wait saga to finish
    await runSaga(fakeStore, handleImagesLoad).done;

    // console.log('test Dispatch ---->', dispatchedActions);
    //assertions
    expect(api.fetchImages.mock.calls.length).toBe(1);
    // expect(dispatchedActions).not.toContainEqual(setImages(mockedImages)); // not contain images
    expect(dispatchedActions).toContainEqual(setError(error));
});