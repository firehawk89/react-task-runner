import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TodoListTasks from "./TodoListTasks";

export default function TodoList({ name, tasks }) {
  const tasksNotEmpty = tasks && tasks.length > 0;

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card className="todo-list" variant="outlined">
        <h2>{name}</h2>
        {tasksNotEmpty && <TodoListTasks tasks={tasks} />}
      </Card>
    </Grid>
  );
}
