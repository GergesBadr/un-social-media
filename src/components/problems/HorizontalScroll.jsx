import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

function HorizontalScroll({ children }) {
  const horizontalScrollContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: horizontalScrollContainer,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <>
      <div ref={horizontalScrollContainer} className="relative h-[250dvh]">
        <div className="sticky top-0 flex h-[120dvh] items-center overflow-hidden md:h-[100dvh]">
          <motion.div
            style={{ x }}
            className="relative flex gap-16 rounded-xl bg-indigo-100 px-8 py-10 shadow-sm"
          >
            <div className="bubble left-[35rem] top-[2rem]" />
            <div className="bubble left-[85rem] top-[25rem]" />
            <div className="bubble right-[60rem] top-[2rem] md:right-[100rem]" />
            <div className="bubble right-[4rem] top-[26rem]" />
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HorizontalScroll;
