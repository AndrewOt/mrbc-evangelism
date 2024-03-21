import { Map } from "./pages/MapPage";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { ContactForm } from "./pages/ContactForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EvangelismResources } from "./pages/EvangelismResources";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/new-contact",
          element: <ContactForm />,
        },
        {
          path: "/evangelism-resources",
          element: <EvangelismResources />,
        },
        {
          path: "/map",
          element: <Map />,
        },
      ],
    },
  ],
  { basename: "/mrbc-evangelism" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
