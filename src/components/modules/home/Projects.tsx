import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleProject = (id: string) => {
    navigate(`/projects/${id}`);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto py-12"
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
            className="bg-card/50 backdrop-blur-lg border border-border rounded-xl shadow-lg group"
            onClick={() => handleProject(project._id)}
          >
            <Card className="h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription>{project?.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative overflow-hidden">
                <img
                  src={project.image[0]}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-muted/20 hidden group-hover:flex justify-center items-center transition-all duration-300">
                  <p className="flex items-center gap-2 text-primary font-bold">
                    <span>Visit</span> <ArrowUpRight />
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Decorative Gradient Line */}
      <div className="mt-12 w-32 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"></div>
    </motion.section>
  );
};

export default Projects;
