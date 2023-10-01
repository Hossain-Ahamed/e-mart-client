import React from 'react';
import useRole from '../../../../../../Hooks/useRole';
import StatusToReadyToShip from './StatusChange/StatusToReadyToShip';
import StatusToShip from './StatusChange/StatusToShip';
import StatusToReadyToDelivery from './StatusChange/StatusToReadyToDelivery';
import StatusToDeliver from './StatusChange/StatusToDeliver';

const AdminOrderDetailStatusChange = ({status, id, refetchOrderDetail}) => {
    const {role} = useRole();
    if(status === "Processing" && role === "Order Manager"){
        return <StatusToReadyToShip id={id} refetchOrderDetail={refetchOrderDetail}/>
    }
    if(status === "Processed And Ready to Ship" && role === "Order Manager"){
        return <StatusToShip id={id} refetchOrderDetail={refetchOrderDetail} />
    }
    if(status === "Shipped" && (role === "Delivery Partner" || role === "Order Manager")){
        return <StatusToReadyToDelivery id={id} refetchOrderDetail={refetchOrderDetail} />
    }
    if(status === "Ready To Delivery" && (role === "Delivery Partner" ||  role === "Order Manager")){
        return <StatusToDeliver id={id} refetchOrderDetail={refetchOrderDetail} />
    }


    return <></>
    
};

export default AdminOrderDetailStatusChange;