import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
// Platforms components
import TikTok from "./TikTok";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
// Platforms images
import tiktokImage from "../../assets/images/bg-logos/tiktok.webp";
import instagramImage from "../../assets/images/bg-logos/instagram.webp";
import facebookImage from "../../assets/images/bg-logos/facebook.webp";

function OppositeScroll() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
  });

  // Numbers is based on the displayed number of platforms.
  // if we have 3 platforms, so we should use "200%" as a start and end position for left and right content, etc…
  const leftContent = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const rightContent = useTransform(scrollYProgress, [0, 1], ["-200%", "0%"]);

  return (
    <div ref={container} className="relative h-[275dvh]">
      <div className="sticky top-0 h-dvh overflow-hidden pt-20">
        <div className="flex h-[85dvh] justify-between overflow-hidden">
          {/* Left content, platforms info */}
          <motion.div
            style={{ y: leftContent }}
            className="basis-full lg:basis-1/2"
          >
            <TikTok />
            <Instagram />
            <Facebook />
          </motion.div>

          {/* Right content, platforms image */}
          <motion.div
            style={{ y: rightContent }}
            className="hidden basis-1/2 lg:block"
          >
            <img
              src={facebookImage}
              alt="Facebook Logo background"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <img
              src={instagramImage}
              alt="Instagram Logo background"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <img
              src={tiktokImage}
              alt="TikTok Logo background"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OppositeScroll;
