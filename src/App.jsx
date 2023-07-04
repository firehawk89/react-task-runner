import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SearchBar from "./components/UI/SearchBar";
import TodoLists from "./components/Todo/TodoLists";
import TodoListsContext from "./store/todo-lists-context";
import AppModal from "./components/UI/AppModal";
import useHttpRequest from "./hooks/use-https-request";

function App() {
  const {
    isLoading: contextIsLoading,
    error: contextError,
    todoLists,
    setTodoLists,
  } = useContext(TodoListsContext);
  const { isLoading: searchLoading, sendRequest: searchTodoLists } =
    useHttpRequest();
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => setModalOpen(!modalOpen);

  const todoSearchHandler = (searchQuery) => {
    searchTodoLists(
      {
        url: `/api/v1/todo-lists?optional_prefix_todo_list_name=${searchQuery}`,
      },
      (data) => setTodoLists(data)
    );
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <SearchBar label="Search Todo" onSearch={todoSearchHandler} />
        {contextIsLoading ? <p>Loading...</p> : <TodoLists data={todoLists} />}
        {searchLoading && <p>Loading...</p>}
        {contextError && <p>{contextError}</p>}
        <Button onClick={handleToggleModal}>New Todo</Button>
        <AppModal open={modalOpen} toggle={handleToggleModal} />
      </Container>
    </>
  );
}

export default App;
