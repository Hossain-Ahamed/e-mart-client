import React, { useContext } from 'react';
import { cartDataContext } from '../../../Contexts/CartDataProvider';

const CheckOut = () => {
    const {selectedOrderItems} = useContext(cartDataContext);
    console.log(selectedOrderItems);
    return (
        <div>
            Checkout
        </div>
    );
};

export default CheckOut;