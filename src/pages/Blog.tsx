import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Blog = {
  _id: string;
  title: string;
  shortDescription: string;
  content: string;
  date: string;
  author: string;
  image: string;
};

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Failed to load blogs:", err));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 space-y-8"
    >
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
        {/* Back Button */}
        <Button asChild variant="default">
          <Link to="/">← Back to home</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <motion.div
            key={blog._id}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="shadow-lg backdrop-blur-lg bg-white/10 border border-white/20 h-full flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-12 h-12 rounded-md"
                />
                <div>
                  <CardTitle className="text-lg">{blog.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {blog.date} • {blog.author}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-grow">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {blog.shortDescription}
                </p>
                <Button asChild className="mt-auto w-fit">
                  <Link to={`/blogs/${blog._id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blogs;
