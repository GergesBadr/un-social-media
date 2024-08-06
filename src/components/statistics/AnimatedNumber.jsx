import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value }) {
  const numberRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(numberRef, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 75,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    if (!shouldReduceMotion) {
      springValue.on("change", (latest) => {
        if (numberRef.current) {
          numberRef.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(1),
          );
        }
      });
    }
  }, [shouldReduceMotion, springValue]);

  return <span ref={numberRef}>{value}</span>;
}

export default AnimatedNumber;
