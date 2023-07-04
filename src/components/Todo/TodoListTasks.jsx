import TodoListTask from "./TodoListTask";

export default function TodoListTasks({ tasks }) {
  return (
    <ul className="todo-list-tasks">
      {tasks.map((task) => (
        <TodoListTask key={task.id} {...task} />
      ))}
    </ul>
  );
}
