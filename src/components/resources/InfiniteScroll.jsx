import { motion, useReducedMotion } from "framer-motion";

function InfiniteScroll({ children, scrollDirection = "to-left" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`infinite-scroll-container relative whitespace-nowrap ${shouldReduceMotion ? "overflow-auto" : "overflow-hidden"}`}
    >
      {/* The array of two items is to duplicate the content for the infinite auto scroll effect */}
      {[1, 2].map((index) => {
        return (
          <motion.div
            key={index}
            className="mb-6 inline-flex"
            animate={
              scrollDirection === "to-left"
                ? { x: ["0%", "-100%"] }
                : { x: ["-100%", "0%"] }
            }
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {children}
          </motion.div>
        );
      })}
    </div>
  );
}

export default InfiniteScroll;
