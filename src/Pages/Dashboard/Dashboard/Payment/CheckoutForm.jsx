import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Contexts/AuthProvider";

//import './CheckoutForm.css'

const CheckoutForm = ({ price, products }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axios
      .post(`http://localhost:5000/create-payment-intent`, { price })
      .then((res) => {
        //console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "Anonymous",
          },
        },
      });
    if (intentError) {
     // console.log(intentError);
    }
    //console.log(paymentIntent);

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      //const transactionId = paymentIntent.id;
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: products?.length,
        cartItems: products?.map(item => item._id),
        cartItemsName: products?.map(item => item.productTitle),
        cartItemsQuantity: products?.map(item => item.quantity),
        payItems: products?.map(item => item.productId),
        date: new Date()
      }
      axios.post('http://localhost:5000/payments', payment )
      .then((res)=>{
        console.log(res.data)
        if(res.data.insertedId){

        }
      })
    }
  };

  return (
    <>
      <div className="w-[500px]">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="bg-accent text-white font-bold text-lg w-32 h-10 rounded-md mt-10"
          >
            Pay Now
          </button>
        </form>
        {cardError && toast.error(cardError)}
        {transactionId && (
          <p className="text-green-900">Transaction IDL: {transactionId}</p>
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
