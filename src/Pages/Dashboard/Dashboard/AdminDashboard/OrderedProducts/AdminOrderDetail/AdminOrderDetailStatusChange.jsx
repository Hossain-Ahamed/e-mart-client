import React from 'react';
import useRole from '../../../../../../Hooks/useRole';
import StatusToReadyToShip from './StatusChange/StatusToReadyToShip';
import StatusToShip from './StatusChange/StatusToShip';
import StatusToReadyToDelivery from './StatusChange/StatusToReadyToDelivery';
import StatusToDeliver from './StatusChange/StatusToDeliver';

const AdminOrderDetailStatusChange = ({ status, id, refetchOrderDetail, OrdersState }) => {
    const { role } = useRole();

    if (OrdersState === "Cancelled") {
        return <>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="items-center justify-between mb-3 sm:flex">
                    <div className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{OrdersState}&#39;s message</div>
                    <div className="text-sm      text-red-500 font-medium">The Order has been &#39;{OrdersState}&#39;</div>
                </div>
                <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50">
                    The order has been canceled. As a result, the products have been returned to stock, and the revenue has not been added to the account. Please review the order details and inventory status as necessary. If you have any questions or need further assistance, feel free to contact our support team. Thank you for your attention to this matter.
                </div>
            </div>
        </>
    }
    if (status === "Processing" && role === "Order Manager") {
        return <StatusToReadyToShip id={id} refetchOrderDetail={refetchOrderDetail} />
    }
    if (status === "Processed And Ready to Ship" && role === "Order Manager") {
        return <StatusToShip id={id} refetchOrderDetail={refetchOrderDetail} />
    }
    if (status === "Shipped" && (role === "Delivery Partner")) {
        return <StatusToReadyToDelivery id={id} refetchOrderDetail={refetchOrderDetail} />
    }
    if (status === "Ready To Delivery" && (role === "Delivery Partner")) {
        return <StatusToDeliver id={id} refetchOrderDetail={refetchOrderDetail} />
    }


    return <></>

};

export default AdminOrderDetailStatusChange;