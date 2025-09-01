import App from "@/App";
import Blog from "@/pages/Blog";
import BlogDetails from "@/pages/BlogDetails";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const ProjectDetails = lazy(() => import("@/pages/ProjectDetails"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/blogs",
    Component: Blog,
  },
  {
    path: "/blogs/:id",
    Component: BlogDetails,
    loader: async ({ params }) => {
      const { id } = params;
      const res = await fetch("/blogs.json");
      const data = await res.json();
      const blogs = data.find((b: any) => b._id === id);
      return { blogs };
    },
  },
  {
    path: "/projects/:id",
    Component: ProjectDetails,
    loader: async ({ params }) => {
      const { id } = params;
      const res = await fetch("/projects.json");
      const data = await res.json();
      const project = data.find((p: any) => p._id === id);
      return { project };
    },
  },
]);
