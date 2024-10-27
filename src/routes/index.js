import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import { ButtonPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/button",
        element: <ButtonPage />
      }
    ]
  },
]);