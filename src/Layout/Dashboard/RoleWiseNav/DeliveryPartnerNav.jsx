import React from 'react';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { MdAddCard } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DeliveryPartnerNav = () => {
    return (
        <>
        <li>
                  <Link to="/dashboard/orders/current">
                    <MdAddCard />
                    Current Orders
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/orders/delivered">
                    <MdAddCard />
                    Delivered Orders
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/orders/canceled">
                    <MdAddCard />
                    Canceled Orders
                  </Link>
                </li>
        </>
    );
};

export default DeliveryPartnerNav;