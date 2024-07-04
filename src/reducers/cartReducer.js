import { isEmpty } from "lodash";
import { CART } from "../constants";

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case CART.ADD:
            const existData = !isEmpty(state) && state?.map((item) => item.id).includes(action.images.id);

            if (existData) {
                alert('Iteam already added');
                return [...state];
            } else {
                return [...state, action.images];
            }

        case CART.REMOVE:
            const filteredData = state.filter((i) => i.id !== action.id);
            return filteredData;

        case CART.EMPTY:
            return [];

        default:
            return state;
    }
};

export default cartReducer;