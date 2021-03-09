let idCounter = 0;

export const todoActions = {
  addTodo(state, text) {
    const todo = {
      id: ++idCounter,
      text
    };
    const todos = state.todos.concat(todo);
    return { todos };
  },
  removeTodo(state, id) {
    const todos = state.todos.filter((todo) => todo.id !== id);
    return { todos };
  },
  parentAction() {
    return { parent: "updated" };
  },
  childAction() {
    return { child: "updated" };
  }
};
