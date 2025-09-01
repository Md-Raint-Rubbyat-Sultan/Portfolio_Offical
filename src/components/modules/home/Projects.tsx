import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-6xl mx-auto px-6 py-12"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold underline underline-offset-8 decoration-primary mb-12 text-center">
        Projects
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-card/50 backdrop-blur-lg border border-border rounded-xl shadow-lg"
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-between flex-grow space-y-4">
                <img
                  src={project.image[0]}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <Button className="w-full" asChild>
                  <Link to={`/projects/${project._id}`} className="w-full">
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Decorative Gradient Line */}
      <div className="mt-12 w-32 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"></div>
    </motion.section>
  );
}
