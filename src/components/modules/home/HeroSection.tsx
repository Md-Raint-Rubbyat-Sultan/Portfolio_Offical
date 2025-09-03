import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import profile from "@/assets/images/Profile.png";
import { Link } from "react-router";

type Props = {};

const texts = [
  "Full-Stack Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
];

const HeroSection: React.FC<Props> = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const len = texts[index].length;
    // total time = letters animating in + visible pause + letters animating out
    const switchDelay = len * 100 + 1000 + len * 100; // ms
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, switchDelay);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section>
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center order-2 md:order-1 lg:items-start lg:text-left"
          >
            <h1 className="my-6 text-pretty text-4xl font-semibold leading-16">
              Hello! <br /> I&apos;m <br />{" "}
              <span className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
                Md. Ranit Rubbyat
              </span>
            </h1>
            <div className="text-muted-foreground mb-8 max-w-xl text-xl lg:text-2xl flex flex-wrap">
              <AnimatePresence mode="wait">
                <motion.p key={texts[index]} className="flex flex-wrap">
                  {texts[index].split("").map((char, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }} // fade + slide OUT
                      transition={{
                        duration: 0.1,
                        delay: idx * 0.1,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}{" "}
                    </motion.span>
                  ))}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="text-muted-foreground mb-8 max-w-xl lg:xl">
              I craft scalable web apps with clean code, sharp design, and
              reusable components.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild size={"lg"} className="w-full sm:w-auto">
                <a
                  href={
                    "https://drive.google.com/file/d/1iM5Fsn3HA0o_P9GFNvRFpEsLaKdQcQJU/view?usp=sharing"
                  }
                  target="_blank"
                >
                  <Download /> Resume
                </a>
              </Button>

              <Button
                asChild
                size={"lg"}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Link to={"/blogs"}>
                  Blog
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6, ease: "easeIn" }}
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="relative flex justify-center overflow-hidden rounded-full order-1 md:order-2 bg-accent shadow shadow-muted w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"
          >
            <img
              src={profile}
              alt="Profile image"
              className="w-full h-full object-contain z-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
