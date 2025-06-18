import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./routes/home-page.tsx";
import MainLayout from "./components/layout/main-layout.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import LoginPage from "./routes/login.tsx";
import RegisterPage from "./routes/register.tsx";
import CreatePostPage from "./routes/create-post.tsx";
import PostDetails from "./components/post-details.tsx";
import PostList from "./routes/post-lists.tsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/create-post", element: <CreatePostPage /> },
      { path: "/test", element: <PostDetails /> },
      { path: "/posts-list", element: <PostList /> },
    ],
  },
]);

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLIC_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
