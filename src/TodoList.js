import { Component } from "preact";
import { connect } from "unistore/preact";
import { todoActions } from "./actions.js";
import TodoItem from "./TodoItem.js";
import Child from "./Child";

class TodoList extends Component {
  state = { newText: "" };

  componentDidMount() {
    const { parentAction } = this.props;
    parentAction();
  }

  add = (e) => {
    e.preventDefault();
    const { newText } = this.state;
    this.setState({ newText: "" });
    this.props.addTodo(newText);
  };

  handleChange = (e) => {
    this.setState({ newText: e.target.value });
  };

  render({ todos, parent }, { newText }) {
    return (
      <div class="TodoList">
        <h1>parent : {parent}</h1>
        <Child />
        <form onSubmit={this.add}>
          <input
            value={newText}
            onInput={this.handleChange}
            placeholder="Add Todo [enter]"
          />
        </form>
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(["todos", "parent"], todoActions)(TodoList);
