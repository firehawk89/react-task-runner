import Grid from "@mui/material/Grid";
import TodoList from "./TodoList";

export default function TodoLists({ data }) {
  return (
    <>
      <Grid container className="todo-lists">
        {data.map((todo) => (
          <TodoList key={todo.id} {...todo} />
        ))}
      </Grid>
    </>
  );
}
