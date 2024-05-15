import React, { useState } from 'react';
import Blogs from './pages/Blogs';
import Form from './components/Form';
import { addBlog } from './utils/blogData';

function App() {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (blog) => {
    addBlog(blog);
    setSuccessMessage('Blog added successfully!');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to My Blog App</h1>

        <div className="md:flex md:justify-center">
          {/* Form section */}
          <div className="md:w-1/3 md:p-4 mt-8">
            <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
            <Form onSubmit={handleSubmit} />
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          </div>
          {/* Blogs section */}
          <div className="md:w-2/3 md:p-4 pb-6"> {/* Corrected class name to md:w-2/3 */}
            <Blogs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
