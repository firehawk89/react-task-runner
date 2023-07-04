import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SearchBar from "./components/UI/SearchBar";
import TodoLists from "./components/Todo/TodoLists";
import TodoListsContext from "./store/todo-lists-context";
import AppModal from "./components/UI/AppModal";
import "./App.scss";

function App() {
  const { isLoading, error } = useContext(TodoListsContext);
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <CssBaseline />
      <Container>
        <SearchBar label="Search Todo" />
        {isLoading ? <p>Loading...</p> : <TodoLists />}
        {error && <p>{error}</p>}
        <Button onClick={handleToggleModal}>New Todo</Button>
        <AppModal open={modalOpen} toggle={handleToggleModal} />
      </Container>
    </>
  );
}

export default App;
