import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import About from "../Components/About/About";
import Registration from '../Components/Auth/Registration'
import Login from '../Components/Auth/Login'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/login",
    element: <Login />
  }

]);

export default router