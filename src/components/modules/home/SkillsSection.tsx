import { skillType } from "@/constants/skillsShowCase";
import { motion } from "motion/react";
import React from "react";
import SkillsShow from "./SkillsShow";

type Props = {};

const fadeInUp = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
};

const SkillsSection: React.FC<Props> = () => {
  return (
    <div className="relative  mx-auto px-6 py-12 rounded-xl bg-card/50 backdrop-blur-lg shadow-lg border border-border">
      <h1 className="text-foreground text-4xl md:text-5xl font-bold underline underline-offset-8 decoration-primary mb-6 relative">
        Skills
      </h1>
      <div className="space-y-8">
        {/* frontend */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SkillsShow skillType="Frontend" skills={skillType.frontend} />
        </motion.div>

        {/* backend */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SkillsShow skillType="Backend" skills={skillType.backend} />
        </motion.div>

        {/* Auth */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SkillsShow skillType="Authentication" skills={skillType.auth} />
        </motion.div>

        {/* DB */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SkillsShow skillType="Data Base" skills={skillType.db} />
        </motion.div>

        {/* version control */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SkillsShow
            skillType="Version Control"
            skills={skillType.versionControll}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
