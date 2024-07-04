import { CART, IMAGES, STATS } from "../constants";

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const loadImageStats = id => ({
    type: STATS.LOAD,
    id,
});

const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
});

const setImageStatsError = id => ({
    type: STATS.LOAD_FAIL,
    id,
});

const cartAdd = images => ({
    type: CART.ADD,
    images
});

const cartRemove = id => ({
    type: CART.REMOVE,
    id
});

const cartEmpty = () => ({
    type: CART.EMPTY,
});

export { loadImages, setImages, setError, loadImageStats, setImageStats, setImageStatsError, cartAdd, cartRemove, cartEmpty }