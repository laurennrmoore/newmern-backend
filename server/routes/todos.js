const mongoose = require("mongoose");
const Todo = mongoose.model("todos");

module.exports = (app) => {
  app.get("/api/todos", async (req, res, next) => {
    try {
      const todos = await Todo.find({});
      if (!todos) return res.send([]); // Return empty Array to signify not found
      res.send(todos);
    } catch (e) {
      next(e);
    }
  });
  app.post("/api/todos", async (req, res, next) => {
    try {
      const { id, userId, title, completed } = req.body;

      // Create todo record
      const todo = await new Todo({
        id,
        userId,
        title,
        completed,
      }).save();

      res.send({ todo });
    } catch (e) {
      next(e);
    }
  });

};
