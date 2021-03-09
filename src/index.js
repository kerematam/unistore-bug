import { render } from "preact";
import createStore from "unistore";
import { Provider } from "unistore/preact";
import TodoList from "./TodoList.js";

const store = createStore({
  todos: [],
  child: "NOT updated!",
  parent: "NOT updated!"
});

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.body
);
