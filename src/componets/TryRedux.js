import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    priceDecrement,
    priceIncrement,
    priceByAmount,
    priceDouble,
} from '../reducers/priceSlice';

const TryRedux = () => {
    const [inputValue, setInputValue] = useState(0);

    const price = useSelector((state) => state.price);
    const dispatch = useDispatch();

    const handlePayment = () => {
        dispatch(priceByAmount(+inputValue));
    };

    return (
        <>
            <div>
                <div>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(priceDecrement())}
                    >
                        Decrement
                    </button>
                    <span>{price.Age}</span>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(priceIncrement())}
                    >
                        Increment
                    </button>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(priceDouble())}
                    >
                        priceDouble
                    </button>
                </div>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handlePayment}>Pay</button>
            </div>
        </>
    );
};

export default TryRedux;
