import React, { Component } from "react";
import axios from "axios";

class Todo extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = async () => {
    const todos = await axios.get("/api/todos").then(({ data }) => data);
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div id="todos">
        <h1>Todos</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((t, idx) => (
              <tr key={idx}>
                <td>{t.id}</td>
                <td>{t.userId}</td>
                <td>{t.title}</td>
                <td>{t.completed.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Todo;
