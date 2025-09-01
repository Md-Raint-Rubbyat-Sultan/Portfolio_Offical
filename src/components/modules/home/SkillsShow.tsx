import React from "react";
import { motion } from "motion/react";

type Props = {
  skills: { name: string; image: string }[];
  skillType: string;
};

const SkillsShow: React.FC<Props> = ({ skills, skillType }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl">{skillType}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-8 gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.3 }}
            className="flex flex-col items-center"
          >
            <img
              src={skill.image}
              alt={skill.name + "logo"}
              className="w-fit"
            />
            <p className="text-muted-foreground">({skill.name})</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsShow;
