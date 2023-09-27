import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { Info } from "./components/Info";
import { Intro } from "./components/Intro";
import { Room } from "./components/Room";
import { InnerPanel } from "./components/InnerPanel";
import { OuterPanel } from "./components/OuterPanel";
/*import { Beliefs } from "./components/Beliefs";
import { Consciousness } from "./components/Consciousness";
import { Contact } from "./components/Contact";
import { Feelings } from "./components/Feelings";
import { Memory } from "./components/Memory";
import { Perceptions } from "./components/Perceptions";
import { Responses } from "./components/Responses";
import { Thoughts } from "./components/Thoughts";
import { World } from "./components/World";*/
import {Layout} from "./components/Layout"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <Layout>
      <Home />
    </Layout>),
    errorElement: <h1>ERROR</h1>,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/intro",
    element: (
      <Layout>
        <Intro />
      </Layout>),
  },
  {
    path: "/room",
    element:  (
      <Layout>
        <Room />
      </Layout>),
  },
  {
    path: "/innerpanel",
    element: <InnerPanel />,
  },
  {
    path: "/outerpanel",
    element: <OuterPanel />,
  },
  /*{
    path: "/beliefs",
    element: <Beliefs />,
  },
  {
    path: "/consciousness",
    element: <Consciousness />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/feelings",
    element: <Feelings/>,
  },
  {
    path: "/memory",
    element: <Memory />,
  },
  {
    path: "/perceptions",
    element: <Perceptions />,
  },
  {
    path: "/responses",
    element: <Responses/>,
  },
  {
    path: "/thoughts",
    element: <Thoughts/>,
  },
  {
    path: "/world",
    element: <World />,
  },*/
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
