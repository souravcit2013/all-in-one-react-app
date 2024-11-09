import "./styles.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./RouteContainers/Home";
import Layout from "./RouteContainers/Layout";
import TodoListContainer from "./RouteContainers/TodoListContainer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<TodoListContainer />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
