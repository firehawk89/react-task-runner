import { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TodoLists from "./components/Todo/TodoLists";
import TodoListsContext from "./store/todo-lists-context";
import "./App.scss";

function App() {
  const { isLoading, error } = useContext(TodoListsContext);

  return (
    <>
      <CssBaseline />
      <Container>
        {isLoading ? <p>Loading...</p> : <TodoLists />}
        {error && <p>{error}</p>}
      </Container>
    </>
  );
}

export default App;
