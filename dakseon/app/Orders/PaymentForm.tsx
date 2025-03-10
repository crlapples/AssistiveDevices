import { useState, useEffect } from 'react';
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

  const handleButtonClick = (event: MouseEvent) => {
    const formEvent = {
      preventDefault: event.preventDefault.bind(event),
    } as React.FormEvent;
    handlePayment(formEvent);
  };

  useEffect(() => {
    const button = document.getElementById('externalButton') as HTMLButtonElement | null;
    if (button) {
      window.paymentFormButton = button;
      window.paymentFormButton.addEventListener('click', handleButtonClick);
    }

    return () => {
      if (window.paymentFormButton) {
        window.paymentFormButton.removeEventListener('click', handleButtonClick);
      }
      delete window.paymentFormButton;
    };
  }, []);

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '2rem',
        color: '#000',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '4px',
        '::placeholder': {
          color: '#888',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <div>
      <form onSubmit={handlePayment}>
        <div className={styles.form1}>
          <CardElement options={cardElementOptions} />
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;