import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { Info } from "./components/Info";
import { Intro } from "./components/Intro";
import { Room } from "./components/Room";
import { Room2 } from "./components/Room2";
import { Room3 } from "./components/Room3";
import { InnerPanel } from "./components/InnerPanel";
import { OuterPanel } from "./components/OuterPanel";
import { Responses } from "./components/Responses";

/*import { Beliefs } from "./components/Beliefs";
import { Consciousness } from "./components/Consciousness";
import { Contact } from "./components/Contact";
import { Feelings } from "./components/Feelings";
import { Memory } from "./components/Memory";
import { Perceptions } from "./components/Perceptions";
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
    path: "/room2",
    element:  (
      <Layout>
        <Room2 />
      </Layout>),
  },
  {
    path: "/room3",
    element:  (
      <Layout>
        <Room3 />
      </Layout>),
  },
  {
    path: "/responses",
    element:  (
      <Layout>
        <Responses />
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
