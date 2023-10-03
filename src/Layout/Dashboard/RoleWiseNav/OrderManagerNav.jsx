import React from 'react';
import { MdAddCard } from 'react-icons/md';
import { Link } from 'react-router-dom';

const OrderManagerNav = () => {
    return (
        <>
        <li>
                  <Link to="/dashboard/add-coupon">
                    <MdAddCard />
                    Add Coupon
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manage-coupon">
                    <MdAddCard />
                    Manage Coupon
                  </Link>
                </li>
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

export default OrderManagerNav;