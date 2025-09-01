import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";

interface Tech {
  name: string;
  logo: string;
}

type Props = {
  techStak: string;
  tech: Tech[];
};

const ProjectsSkillsCard: React.FC<Props> = ({ tech, techStak }) => {
  return (
    <Card className="p-4 bg-card/10 border border-card/20 shadow-lg">
      <h2 className="text-xl font-semibold mb-3">{techStak}</h2>
      <div className="flex gap-4 flex-wrap">
        {tech.map((t: Tech, idx: number) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2"
          >
            <img src={t.logo} alt={t.name} className="w-10 h-10" />
            <span className="text-sm">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default ProjectsSkillsCard;
