import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TodoListsContextProvider } from "./store/todo-lists-context.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoListsContextProvider>
      <App />
    </TodoListsContextProvider>
  </React.StrictMode>
);
