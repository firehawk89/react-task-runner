export default function TodoListTask({ title, description, is_done }) {
  const descriptionNotEmpty = description && description.length > 0;

  return (
    <li className="todo-list-task">
      <h3>{title}</h3>
      {descriptionNotEmpty && <p>{description}</p>}
      <span>{is_done ? "Done!" : "Not done :("}</span>
    </li>
  );
}
