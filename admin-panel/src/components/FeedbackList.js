import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './FeedbackList.css';

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`/api/feedback/${productId}`);
        setFeedback(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };
    fetchFeedback();
  }, [productId]);

  return (
    <div>
      <h2>Feedback for Product {productId}</h2>
      <table>
        <thead>
          <tr>
            <th>Feedback ID</th>
            <th>User</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.user}</td>
              <td>{item.rating}</td>
              <td>{item.comment}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;
