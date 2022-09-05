import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const price = useSelector((state) => state.price);
    const two = useSelector((state) => state.two);
    return (
        <>
            <h1>{price.Age}</h1>
            <h1>{price.Name}</h1>
            <h1>{two.Age}</h1>
            <h1>{two.Name}</h1>
        </>
    );
};

export default Navbar;
