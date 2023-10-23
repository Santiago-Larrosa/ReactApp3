import * as React from "react";
import * as ReactDOM from "react-dom/client";
//import ReactMarkdown from 'react-markdown';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Admin from"./root/Admin"
import Root from "./root/root";
import App from "./root/App";
import Coment from "./root/coment";


const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
  },
  {
    path: "App",
    element: <App />,
  },
  {
    path: "coment/:id", 
    element: <Coment />,
  },
  {
    path:"Admin", 
    element: <Admin />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
