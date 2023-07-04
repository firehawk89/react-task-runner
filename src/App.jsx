import { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TodoListsContext from "./store/todo-lists-context";
import "./App.scss";

function App() {
  const { isLoading, error } = useContext(TodoListsContext);

  return (
    <>
      <CssBaseline />
      <Container>
        {isLoading ? <p>Loading...</p> : <div>Data Successfully Loaded!</div>}
        {error && <p>{error}</p>}
      </Container>
    </>
  );
}

export default App;
