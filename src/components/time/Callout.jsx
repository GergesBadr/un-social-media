import { FcIdea } from "react-icons/fc";
import { motion, useReducedMotion } from "framer-motion";

function Callout({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`flex items-start gap-4 rounded-xl p-4 leading-relaxed shadow-lg backdrop-blur-3xl`}
      initial={{
        clipPath: !shouldReduceMotion
          ? "circle(3% at 50% 50%)"
          : "circle(100%)",
      }}
      whileInView={{ clipPath: "circle(100%)" }}
      viewport={{ margin: "-100px", once: true }}
      transition={{ duration: 1 }}
    >
      <FcIdea className="size-10 shrink-0" />
      {children}
    </motion.div>
  );
}

export default Callout;
