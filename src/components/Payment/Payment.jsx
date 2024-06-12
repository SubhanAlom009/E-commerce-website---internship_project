import React, { useState } from 'react';
import PaymentMethodSelector from './PaymentSelector.jsx';

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState('Paypal');


  return (
    <div >
      <PaymentMethodSelector selectedMethod={selectedMethod} onSelectMethod={setSelectedMethod} />
    </div>
  );
}

export default Payment;
