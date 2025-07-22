import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import OnBoarding from "./pages/OnBoarding";
import JobListing from "./pages/JobListing";
import JobPage from "./pages/JobPage";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import { ThemeProvider } from "./Components/ui/Theme-Provider";

import ProtectedRoute from "./Components/protected.route";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <OnBoarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",

        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            {" "}
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-job",
        element: (
          <ProtectedRoute>
            <SavedJob />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
