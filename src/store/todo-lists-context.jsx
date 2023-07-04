import { createContext, useEffect, useState } from "react";
import useHttpRequest from "../hooks/use-https-request";

const TodoListsContext = createContext({
  isLoading: false,
  error: null,
  todoLists: [],
  onSearch: () => {},
});

export function TodoListsContextProvider({ children }) {
  const { isLoading, error, sendRequest: fetchTodoLists } = useHttpRequest();
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    fetchTodoLists({ url: "/api/v1/todo-lists/" }, (data) =>
      setTodoLists(data)
    );
  }, [fetchTodoLists]);

  return (
    <TodoListsContext.Provider
      value={{ isLoading, error, todoLists, onSearch: fetchTodoLists }}
    >
      {children}
    </TodoListsContext.Provider>
  );
}

export default TodoListsContext;
