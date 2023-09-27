import React from 'react';
import useRole from '../../../Hooks/useRole';
import UserNav from './UserNav';
import AdminRoleNav from './AdminRoleNav';
import ProductManagerNav from './ProductManagerNav';
import OrderManagerNav from './OrderManagerNav';
import DeliveryPartnerNav from './DeliveryPartnerNav';

const SelectNav = () => {
    const {role} = useRole();
    if(role === "user"){
        return <UserNav></UserNav>
    }
    else if(role === "admin"){
        return <AdminRoleNav></AdminRoleNav>
    }
    else if(role === "Product Manager"){
        return <ProductManagerNav></ProductManagerNav>
    }
    else if(role === "Order Manager"){
        return <OrderManagerNav></OrderManagerNav>
    }
    else if(role === "Delivery Partner"){
        return <DeliveryPartnerNav></DeliveryPartnerNav>
    }
    return (
        <div>
            
        </div>
    );
};

export default SelectNav;