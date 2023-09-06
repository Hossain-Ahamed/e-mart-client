import React, { useContext } from 'react';
import { cartDataContext } from '../../../Contexts/CartDataProvider';
import useProfile from '../../../Hooks/useProfile';

const CheckOut = () => {
    const {selectedOrderItems, total} = useContext(cartDataContext);
    console.log(selectedOrderItems, total);
    const [profile] = useProfile();
    const {name, email, phone, address} = profile;
    return (
        <>
        <div>
            <div>
                <p>Delivered to: {name}</p>
                <p>{phone}</p>
                <p>{address}</p>
            </div>
            <div>
                    {selectedOrderItems.map((item, index) => (
                        <div key={index}>
                            <p>Item Name: {item.productTitle}</p>
                            <p>Item Price: {item.price}</p>
                            {/* Add more properties as needed */}
                        </div>
                    ))}
                </div>
        </div>
        </>
    );
};

export default CheckOut;