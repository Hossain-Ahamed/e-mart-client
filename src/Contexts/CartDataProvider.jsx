import React, { createContext, useState } from 'react';

export const cartDataContext = createContext();

const CartDataProvider = ({children}) => {

    const [selectedOrderItems, setSelectedOrderItems] = useState([]); 
    const value = {selectedOrderItems, setSelectedOrderItems}

    return (
        <cartDataContext.Provider value={value}>
            {children}
        </cartDataContext.Provider>
    );
};

export default CartDataProvider;