import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

type Props = {};

const MouseCursor: React.FC<Props> = () => {
  const [cursorPoint, setCursorPoint] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function mouseMove(e: MouseEvent) {
      setCursorPoint({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variant = {
    default: {
      x: cursorPoint.x - 20,
      y: cursorPoint.y - 20,
    },
  };

  return (
    <motion.div
      variants={variant}
      animate="default"
      transition={{
        duration: 0.05,
      }}
      className="fixed top-0 left-0 w-12 h-12  rounded-full border-2 shadow-accent shadow border-secondary dark:border-primary pointer-events-none z-[1000] hidden sm:block"
    ></motion.div>
  );
};

export default MouseCursor;
