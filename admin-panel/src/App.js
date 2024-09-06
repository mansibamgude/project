import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import PaymentList from './components/PaymentList';
import FeedbackList from './components/FeedbackList';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Admin Panel</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products/add" element={<ProductForm />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/payments" element={<PaymentList />} />
          <Route path="/feedback/:productId" element={<FeedbackList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
