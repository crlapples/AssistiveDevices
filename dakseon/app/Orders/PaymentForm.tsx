import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import styles from "./PaymentForm.module.css";

interface PaymentFormProps {
  totalPrice: number;
  onOrderConfirmed: () => void;
  handleShippingFormSubmit: () => void;
}

const PaymentForm = ({ totalPrice, onOrderConfirmed, handleShippingFormSubmit }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    handleShippingFormSubmit();

    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: Math.round(totalPrice * 100) })
    });

    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      if (result.paymentIntent?.status === 'succeeded') {
        onOrderConfirmed();
      }
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handlePayment}>
        <div>
          <CardElement />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Order'}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;