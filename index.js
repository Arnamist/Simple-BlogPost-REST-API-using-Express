import express from "express";
import { blogRouter } from "./routers/blog.routes.js";
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", blogRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
