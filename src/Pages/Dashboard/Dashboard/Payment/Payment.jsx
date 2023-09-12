import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const location = useLocation();
  const totalPayment = location.state?.totalPayment || 0;
  const products = location.state?.products || 0;
  console.log(products)
  const price = parseFloat(totalPayment.toFixed(2))
    return (
        <>
        <div className=''>
        <div>
            <p>Payment</p>
        </div>
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} products={products}></CheckoutForm>
            </Elements>
        </div>
        </div>
        </>
    );
};

export default Payment;