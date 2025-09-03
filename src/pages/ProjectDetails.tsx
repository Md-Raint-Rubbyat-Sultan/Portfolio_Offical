import React from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectsSkillsCard from "@/components/modules/home/ProjectsSkillsCard";

type Props = {};

const ProjectDetails: React.FC<Props> = () => {
  const { project } = useLoaderData();

  console.log(project);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6"
    >
      {/* Title */}
      <h1 className="text-3xl font-bold text-foreground mb-4">
        {project.title}
      </h1>

      {/* Carousel */}
      <Card className="mb-6 shadow-lg backdrop-blur-lg bg-white/10 border border-white/20">
        <CardContent>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {project.image.map((img: string, idx: number) => (
                <CarouselItem key={idx} className="flex justify-center">
                  <img
                    src={img}
                    alt={`screenshot-${idx}`}
                    className="rounded-lg shadow-md max-h-[400px] object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground mb-8 text-lg"
      >
        {project.details}
      </motion.p>

      {/* Links (Live + GitHub) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-10"
      >
        <Card className="shadow-md border border-border/20 bg-card/5 backdrop-blur-md">
          <CardContent className="flex flex-wrap gap-4 justify-center p-6">
            {project?.liveDemo && (
              <Button
                asChild
                variant="default"
                className="flex items-center gap-2"
              >
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios/50/globe--v1.png"
                    alt="live link"
                  />{" "}
                  Live Demo
                </a>
              </Button>
            )}

            {project?.github?.client && (
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <a
                  href={project.github.client}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/github.png"
                    alt="github client"
                  />{" "}
                  Client
                </a>
              </Button>
            )}

            {project?.github?.backend && (
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <a
                  href={project.github.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/github.png"
                    alt="github backend"
                  />{" "}
                  Backend
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend */}
        {project?.tech?.frontend && (
          <ProjectsSkillsCard
            tech={project.tech.frontend}
            techStak="Frontend"
          />
        )}

        {/* Backend */}
        {project?.tech?.backend && (
          <ProjectsSkillsCard tech={project.tech.backend} techStak="Backend" />
        )}

        {/* Database */}
        {project?.tech?.DataBase && (
          <ProjectsSkillsCard
            tech={project.tech.DataBase}
            techStak="Database"
          />
        )}

        {/* Auth */}
        {project?.tech?.Auth && (
          <ProjectsSkillsCard
            tech={project.tech.Auth}
            techStak="Authentication"
          />
        )}
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <Button variant={"default"} className="block w-fit ml-auto" asChild>
          <Link to="/">← Back to Home</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
