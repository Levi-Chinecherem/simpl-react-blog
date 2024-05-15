import React, { useState } from 'react';
import { removeBlog } from '../utils/blogData';

const BlogCard = ({ title, content }) => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleRemove = () => {
    const message = removeBlog(title); // Call removeBlog function with the title of the blog to be removed
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
      window.location.reload(); // Reload the page after a delay to show the success message
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <button onClick={handleRemove} className="mt-2 text-red-600 hover:text-red-800">
        <span role="img" aria-label="trash">🗑️</span> Remove
      </button>
      {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
    </div>
  );
};

export default BlogCard;
