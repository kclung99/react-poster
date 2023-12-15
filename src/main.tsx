import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./routes/RootLayout.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts.tsx";
import { loader as postDetailsLoader } from "./routes/PostDetails.tsx";
import NewPost from "./routes/NewPost.tsx";
import { action as newPostAction } from "./routes/NewPost.tsx";
import PostDetails from "./routes/PostDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          {
            path: "/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
