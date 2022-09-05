import { createSlice } from '@reduxjs/toolkit';

export const TwoSlice = createSlice({
    name: 'a',
    initialState: {
        Name: 'Tom',
        Age: 25,
    },
    reducers: {
        TwoIncrement: (state) => {
            state.Age += 1;
        },
        TwoDecrement: (state) => {
            state.Age -= 1;
            if (state.Age < 0) {
                state.Age = 0;
            }
        },
        TwoDouble: (state) => {
            state.Age = state.Age * 2;
        },
        TwoByAmount: (state, action) => {
            state.Age += action.payload;
            if (state.Age < 0) {
                state.Age = 0;
            }
        },
    },
});

export const { TwoIncrement, TwoDecrement, TwoDouble, TwoByAmount } =
    TwoSlice.actions;

export default TwoSlice.reducer;