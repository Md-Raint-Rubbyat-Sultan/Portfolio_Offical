import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import profile from "@/assets/images/Profile.png";
import { Link } from "react-router";

type Props = {};

const HeroSection: React.FC<Props> = () => {
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
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Hello! <br /> I&apos;m <br />{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
                Md. Ranit Rubbyat
              </span>
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              Full-Stack Web Developer
            </p>
            <p className="text-muted-foreground mb-8 max-w-xl">
              I craft scalable web apps with clean code, sharp design, and
              reusable components.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a
                  href={
                    "https://drive.google.com/file/d/1iM5Fsn3HA0o_P9GFNvRFpEsLaKdQcQJU/view?usp=sharing"
                  }
                  target="_blank"
                >
                  Resume
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full sm:w-auto">
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
            className="relative flex justify-center overflow-hidden rounded-full order-1 md:order-2  w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto"
          >
            <div
              className="bg-secondary rounded-full absolute bottom-0 
                  w-4/5 h-4/5"
            ></div>
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
