import Home from "../pages/Home";
import Guides from "../pages/Guides";

const routes = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/guides",
    element: <Guides/>,
  },
  {
    path: '*',
    element: <Home/>,
  }
]

export default routes
