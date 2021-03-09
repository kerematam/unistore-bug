import { Component } from "preact";
import { connect } from "unistore/preact";
import { todoActions } from "./actions.js";

class TodoItem extends Component {
  remove = () => {
    const { todo, removeTodo } = this.props;
    removeTodo(todo.id);
  };

  render({ todo, child }) {
    return (
      <li>
        {todo.text}
        <button onClick={this.remove}>×</button>
      </li>
    );
  }
}

export default connect(["todos"], todoActions)(TodoItem);
