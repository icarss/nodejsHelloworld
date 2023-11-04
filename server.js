const express = require("express");
const app = express();
let tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  tasks.push(req.body.task);
  res.send("Task added");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
