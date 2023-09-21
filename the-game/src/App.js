import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { Info } from "./components/Info";
import { Intro } from "./components/Intro";
import { Room } from "./components/Room";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>ERROR</h1>,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/intro",
    element: <Intro />,
  },
  {
    path: "/room",
    element: <Room />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
