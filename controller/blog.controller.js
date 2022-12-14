import { getAllBlogFromDB, saveBlogToDB } from "../utils/blog.utils.js";

export const getAllBlogs = (req, res) => {
  try {
    const blogs = getAllBlogFromDB();
    res.json(blogs);
  } catch {
    res.status(500).send("Something went wrong");
  }
};

export const addNewBlog = (req, res) => {
  try {
    const blogs = getAllBlogFromDB();
    const newBlog = { id: blogs.length + 1, ...req.body };
    blogs.push(newBlog);
    saveBlogToDB(blogs);

    res.json(newBlog);
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

export const getBlog = async(req, res) => {
  try {
    const blogId = req.params.id;
    const blogs = await getAllBlogFromDB(); 
    const requiredBlog = blogs.find((blog) => blog.id == blogId);
    res.json(requiredBlog);
  } catch {
    res.status(500).send("Something went wrong");
  }
};

export const editBlog = (req, res) => {
  try {
    const blogId = req.params.id;
    const blogs = getAllBlogFromDB();
    const requiredBlogIndex = blogs.findIndex((blog) => blog.id == blogId);
    const requiredBlog = blogs[requiredBlogIndex];

    const updatedBlog = { ...requiredBlog, ...req.body };
    blogs[requiredBlogIndex] = updatedBlog;

    saveBlogToDB(blogs);
    res.json(updatedBlog);
  } catch {
    res.status(500).send("Something went wrong");
  }
};

export const deleteBlog = (req, res) => {
  try {
    const blogId = req.params.id;
    const blogs = getAllBlogFromDB();
    const updatedBlogs = blogs.filter((blog) => blog.id != blogId);

    saveBlogToDB(updatedBlogs);
    res.json(updatedBlogs);
  } catch {
    res.status(500).send("Something went wrong");
  }
};
