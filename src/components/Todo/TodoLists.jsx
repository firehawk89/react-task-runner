import { useContext } from "react";
import Grid from "@mui/material/Grid";
import TodoList from "./TodoList";
import TodoListsContext from "../../store/todo-lists-context";

export default function TodoLists() {
  const { todoLists } = useContext(TodoListsContext);

  console.log(todoLists);

  return (
    <>
      <Grid container className="todo-lists">
        {todoLists.map((todo) => (
          <TodoList key={todo.id} {...todo} />
        ))}
      </Grid>
    </>
  );
}
