import fs from "fs";

const blogDataLocation = "./database/blogData.json";

export const getAllBlogFromDB = () => {
  try {
    const data = fs.readFileSync(blogDataLocation, "utf8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error(err);
  }
};

export const saveBlogToDB = (blogs) => {
  try {
    const jsonBlogs = JSON.stringify(blogs, null, 4);
    fs.writeFileSync(blogDataLocation, jsonBlogs);
  } catch (err) {
    throw new Error(err);
  }
};
