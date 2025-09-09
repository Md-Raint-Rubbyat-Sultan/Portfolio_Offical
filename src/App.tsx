import { AnimatePresence, motion } from "motion/react";
import React from "react";
import Footer from "./components/layouts/footerSection";
import { ModeToggle } from "./components/layouts/mode-toggle";
import About from "./components/modules/home/About";
import ContactMe from "./components/modules/home/ContactMe";
import EducationSection from "./components/modules/home/EducationSection";
import HeroSection from "./components/modules/home/HeroSection";
import Projects from "./components/modules/home/Projects";
import SkillsSection from "./components/modules/home/SkillsSection";

type Props = {};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const App: React.FC<Props> = () => {
  return (
    <div className="container mx-auto p-8 space-y-16">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <ModeToggle />
        </motion.div>

        {/* hero | banner */}
        <HeroSection />

        {/* about me */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <About />
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SkillsSection />
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Projects />
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <EducationSection />
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <ContactMe />
        </motion.div>

        {/* footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 border-t border-border/20 bg-card/5 backdrop-blur-lg"
        >
          <Footer />
        </motion.footer>
      </AnimatePresence>
    </div>
  );
};

export default App;
