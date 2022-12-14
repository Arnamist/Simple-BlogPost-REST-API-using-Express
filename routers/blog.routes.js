import router from "express";
import {
  addNewBlog,
  deleteBlog,
  editBlog,
  getAllBlogs,
  getBlog,
} from "../controller/blog.controller.js";

export const blogRouter = router.Router();

// GET - get list of the Blogs
blogRouter.get("/blogs", getAllBlogs);

// POST - add new Blog
blogRouter.post("/blogs", addNewBlog);

// GET :id - get particular Blog details
blogRouter.get("/blogs/:id", getBlog);

// PUT :id - edit a Blog details
blogRouter.put("/blogs/:id", editBlog);

// DELETE :id - delete a Blog data
blogRouter.delete("/blogs/:id", deleteBlog);
