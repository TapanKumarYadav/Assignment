import React from 'react';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: 'Jenny Wilson',
      rating: 5,
      feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger with greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    },
    {
      name: 'Dianne Russell',
      rating: 4,
      feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    },
    {
      name: 'Devon Lane',
      rating: 4,
      feedback: 'Normally we are wings fans, but theirs are lean meaty and tender, and perfect for the health-conscious. The service was fast and friendly.',
    },
  ];

  return (
    <div className="customer-feedback">
      <h2>Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback-card">
          <h3>{feedback.name}</h3>
          <p>{'⭐'.repeat(feedback.rating)}</p>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;