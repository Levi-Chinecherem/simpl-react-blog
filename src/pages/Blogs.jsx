import React, { useState, useEffect } from 'react';
import { getAllBlogs } from '../utils/blogData';
import BlogCard from '../components/BlogCard';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(4); // Number of blogs to display per page

  useEffect(() => {
    const fetchData = async () => {
      const allBlogs = getAllBlogs();
      setBlogs(allBlogs);
    };
    fetchData();
  }, []);

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {currentBlogs.map((blog, index) => (
          <BlogCard key={index} title={blog.title} content={blog.content} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {/* Pagination */}
        {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === number + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
