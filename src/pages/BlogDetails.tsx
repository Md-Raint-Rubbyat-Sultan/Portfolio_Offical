import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import { Link, ScrollRestoration, useLoaderData } from "react-router";

const BlogDetails: React.FC = () => {
  const { blogs: blog } = useLoaderData();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6"
    >
      <ScrollRestoration />
      {/* Blog Title */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-14 h-14 rounded-md shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p className="text-sm text-muted-foreground">
            {blog.date} • {blog.author}
          </p>
        </div>
      </div>

      {/* Content */}
      <p className="text-lg text-foreground leading-relaxed mb-10">
        {blog.content}
      </p>

      {/* Back Button */}
      <Button asChild variant="default">
        <Link to="/blogs">← Back to Blogs</Link>
      </Button>
    </motion.div>
  );
};

export default BlogDetails;
