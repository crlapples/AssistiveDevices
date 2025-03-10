import { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import styles from "./PaymentForm.module.css";

interface PaymentFormProps {
  totalPrice: number;
  onOrderConfirmed: () => void;
  handleShippingFormSubmit: () => void;
}

console.log(localStorage.getItem("worked"));
console.log(localStorage.getItem("failed"));

const PaymentForm = ({ totalPrice, onOrderConfirmed, handleShippingFormSubmit }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Retrieve and log any stored logs when the page reloads
    getLogs();
  }, []);

  const storeLog = (message: string) => {
    // Retrieve existing logs from localStorage or start with an empty array
    const logs = JSON.parse(localStorage.getItem('paymentLogs') || '[]');
    logs.push(message);
    localStorage.setItem('paymentLogs', JSON.stringify(logs));
  };
  
  const getLogs = () => {
    const logs = JSON.parse(localStorage.getItem('paymentLogs') || '[]');
    console.log('Payment Logs:', logs);  // You can log them to the console on page reload
  };

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    handleShippingFormSubmit();

    const response = await fetch('/api/create-payment-intent/route', {
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
      console.log("paymentfailed");
      console.log('Client Secret:', clientSecret);  // Log clientSecret

    // Store log in localStorage
    storeLog(`Client Secret: ${clientSecret}`);
    localStorage.setItem("failed", "didnt work");
    } else {
      if (result.paymentIntent?.status === 'succeeded') {
        onOrderConfirmed();
        console.log("paymentworked");
        localStorage.setItem("worked", "true");
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
        <button type="submit">asdf</button>
      </form>
    </div>
  );
};

export default PaymentForm;