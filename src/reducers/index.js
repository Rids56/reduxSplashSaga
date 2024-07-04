import loadingReducer from "./loadingReducer";
import imagesReducer from "./imagesReducer";
import errorReducer from "./errorReducer";
import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import statsReducer from "./statsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
    cartImages: cartReducer,
});

export default rootReducer;