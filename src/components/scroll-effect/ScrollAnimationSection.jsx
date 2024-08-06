import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function ScrollAnimationSection({
  children,
  bgImage,
  setBgImage,
  setOverlayOpacity,
}) {
  const inSmallScreens = window.innerWidth < 1024;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 0.9, 1],
    [0, 0, 1, 1, 0, 0],
  );

  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 0.4, 0.5, 0.6],
  );

  bgOpacity.on("change", (val) => {
    setOverlayOpacity(val);
  });

  scrollYProgress.on("change", (val) => {
    if (val > 0 || val <= 1) {
      setBgImage(bgImage);
    }
  });

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity: inSmallScreens ? 1 : contentOpacity }}
      className="relative min-h-[125dvh] text-white"
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimationSection;
