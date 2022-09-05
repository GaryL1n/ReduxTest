import { createSlice } from '@reduxjs/toolkit';

export const priceSlice = createSlice({
    name: 'price',
    initialState: {
        Name: 'Gary',
        Age: 24,
    },
    reducers: {
        priceIncrement: (state) => {
            state.Age += 1;
            // return {...state, Age: state.Age + 1}  如果不是用toolkit
        },
        priceDecrement: (state) => {
            state.Age -= 1;
            if (state.Age < 0) {
                state.Age = 0;
            }
        },
        priceDouble: (state) => {
            state.Age = state.Age * 2;
        },
        priceByAmount: (state, action) => {
            state.Age += action.payload;
            if (state.Age < 0) {
                state.Age = 0;
            }
        },
    },
});

export const { priceIncrement, priceDecrement, priceDouble, priceByAmount } =
    priceSlice.actions;

export default priceSlice.reducer;
