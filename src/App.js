import "./App.css";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VoteNow from "./components/VoteNow/VoteNow";
import TaskOne from "./components/TaskPage/TaskOne";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/vote-now",
      element: <VoteNow></VoteNow>,
    },
    {
      path: "/task-one",
      element: <TaskOne />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
