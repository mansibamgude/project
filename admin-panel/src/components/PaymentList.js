import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PaymentList.css';  // Import the CSS file with the correct path

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('/api/payments');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };
    fetchPayments();
  }, []);

  return (
    <div className="payment-list">  {/* Apply the CSS class here */}
      <h2>Payment List</h2>
      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Order ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{payment._id}</td>
              <td>{payment.orderId}</td>
              <td>{payment.amount}</td>
              <td>{payment.status}</td>
              <td>{new Date(payment.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;
