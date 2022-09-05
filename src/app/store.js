import { configureStore } from '@reduxjs/toolkit';
import priceReducer from '../reducers/priceSlice';
import TwoReducer from '../reducers/TwoSlice';

export default configureStore({
    reducer: {
        price: priceReducer,
        two: TwoReducer,
    },
});
