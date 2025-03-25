
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import Home from './components/Home';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import UserDashboard from "./components/UserDashboard";
import EditProfile from "./components/EditProfile";
import ListItemPage from "./components/ListItemPage";
import MyListings from "./components/MyListings";
import RentalListings from "./components/RentalListings";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/dashboard/edit/profile",
    element: <EditProfile />,
  },
  {
    path: "/list-item",
    element: <ListItemPage />,
  },
  {
    path: "/my-listings",
    element: <MyListings />,
  },
  {
    path: "/rentals",
    element: <RentalListings />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
export default App;
