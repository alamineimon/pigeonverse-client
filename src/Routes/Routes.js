import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import CreatePost from "../Pages/CreatePost/CreatePost";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import DetailsPost from "../Pages/Post/DetailsPost";
import EditeProfile from "../Pages/Profile/EditeProfile";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Shared/ErroePage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/profile",
          element:<Profile />,
        },
        {
          path: "/media",
          element: <Media />,
        },
        {
          path: "/message",
          element: <Message />,
        },
        {
          path: "/createpost",
          element: <PrivateRoute><CreatePost /></PrivateRoute>
        },
        {
          path: "/editeprofile",
          element: <EditeProfile />,
        },
        {
          path: "/detailspost/:id",
          element: <DetailsPost />,
          loader: ({ params }) =>
            fetch(
              `http://localhost:5000/posts/${params.id}`
            ),
        }
      ],
    },
    
  ]);
  
  export default router;
  