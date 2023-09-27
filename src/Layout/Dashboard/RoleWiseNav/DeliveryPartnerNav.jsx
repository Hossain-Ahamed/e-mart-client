import React from 'react';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DeliveryPartnerNav = () => {
    return (
        <>
        <li>
                  <Link to="/dashboard/delivery-charge">
                    <AiOutlineCreditCard />
                    Set Delivery Charge
                  </Link>
                </li>
        </>
    );
};

export default DeliveryPartnerNav;