import Profile from "../header/Profile";
import Home from "../page/home/Home";
import Privacy from "../page/privacy/Privacy";

//   const icon = {
//     className: "w-5 h-5 text-inherit",
//   };

export const anotherRoutes = [
  {
    layout: "hidden_routes",
    pages: [
      {
        //   icon: <HomeIcon {...icon} />,
        name: "profile",
        path: "/",
        element: <Home />,
      },
      {
        //   icon: <HomeIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        name: "privacy",
        path: "/privacy",
        element: <Privacy />,
      },

    ],
  },
];

export default anotherRoutes;
