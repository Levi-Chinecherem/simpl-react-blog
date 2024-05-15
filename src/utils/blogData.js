// Function to get all blogs from storage
export const getAllBlogs = () => {
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    return blogs.reverse(); // Reverse the order of blogs so that the last added blog is displayed first
  };   
  
  // Function to add a new blog to storage
  export const addBlog = (blog) => {
    const blogs = getAllBlogs(); // Get existing blogs from storage
    blogs.push(blog); // Add new blog to the array
    localStorage.setItem('blogs', JSON.stringify(blogs)); // Store updated blogs data in local storage
  };
  
//   remove blog
export const removeBlog = (title) => {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = blogs.filter((blog) => blog.title !== title);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    
    // Set success message
    return 'Blog removed successfully!';
  };
  
  
  // Function to remove all blogs from storage
  export const removeAllBlogs = () => {
    localStorage.removeItem('blogs'); // Remove blogs data from local storage
  };
  
  // Function to generate dummy blog data
  const generateDummyData = () => {
    const dummyData = [];
    for (let i = 1; i <= 20; i++) {
      dummyData.push({
        title: `Blog Post ${i}`,
        content: `This is the content of blog post ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      });
    }
    localStorage.setItem('blogs', JSON.stringify(dummyData)); // Store dummy data in local storage
    return dummyData;
  };
  