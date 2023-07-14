import {
  createBrowserRouter,
} from "react-router-dom";

import Main from "../pages/Main";
import Contacts from "../pages/Contacts";
import Products from "../pages/Products";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/contacts",
    element: <Contacts/>
  },
  {
    path: "/products",
    element: <Products/>
  }
]);