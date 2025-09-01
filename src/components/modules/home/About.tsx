import React from "react";

type Props = {};

const About: React.FC<Props> = () => {
  return (
    <div className="relative  mx-auto px-6 py-12 rounded-xl bg-card/50 backdrop-blur-lg shadow-lg border border-border">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>

      <h1 className="text-foreground text-4xl md:text-5xl font-bold underline underline-offset-8 decoration-primary mb-6 relative">
        About Me
      </h1>

      <article className="text-muted-foreground leading-relaxed text-lg space-y-4">
        <p>
          I&apos;m a passionate{" "}
          <span className="font-semibold text-foreground">
            Full-Stack Web Developer
          </span>{" "}
          skilled in building modern, scalable, and maintainable web
          applications.
        </p>
        <p>
          With strong expertise in{" "}
          <span className="font-medium text-primary">
            React, TypeScript, Node.js, and Express
          </span>
          , I focus on writing clean, functional code and crafting razor-sharp,
          reusable UI components that deliver both performance and design
          excellence.
        </p>
        <p>
          I enjoy solving complex problems, optimizing user experiences, and
          developing applications that balance{" "}
          <span className="italic">efficiency</span> with{" "}
          <span className="italic">aesthetics</span>.
        </p>
      </article>

      <div className="mt-8 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
    </div>
  );
};

export default About;
