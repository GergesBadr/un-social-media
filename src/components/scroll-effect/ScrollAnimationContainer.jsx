import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollAnimationSection from "./ScrollAnimationSection";
import Welcome from "../welcome/Welcome";
import Definition from "../definition/Definition";
import Time from "../time/Time";
// Images
import whatsapp from "../../assets/images/bg-logos/whatsapp.webp";
import twitterX from "../../assets/images/bg-logos/x.webp";
import youtube from "../../assets/images/bg-logos/youtube.webp";

function ScrollAnimationContainer() {
  const [bgImage, setBgImage] = useState(whatsapp);
  const [overlayOpacity, setOverlayOpacity] = useState(0.6);

  return (
    <div className="space-y-20 lg:space-y-0 [&>:last-child]:pb-14">
      {/* Background image and overlay */}
      <div className="sticky inset-0 h-dvh">
        <AnimatePresence mode="popLayout">
          <motion.img
            src={bgImage}
            key={bgImage}
            alt=""
            className="h-full w-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Animated sections*/}
      <ScrollAnimationSection
        bgImage={whatsapp}
        setBgImage={setBgImage}
        setOverlayOpacity={setOverlayOpacity}
      >
        <Welcome />
      </ScrollAnimationSection>

      <ScrollAnimationSection
        bgImage={youtube}
        setBgImage={setBgImage}
        setOverlayOpacity={setOverlayOpacity}
      >
        <Definition />
      </ScrollAnimationSection>

      <ScrollAnimationSection
        bgImage={twitterX}
        setBgImage={setBgImage}
        setOverlayOpacity={setOverlayOpacity}
      >
        <Time />
      </ScrollAnimationSection>
    </div>
  );
}

export default ScrollAnimationContainer;
