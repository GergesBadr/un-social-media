import { useRef, useState } from "react";
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi2";

import scrollingDesktop from "../../assets/videos/scrolling-desktop.mp4";
import scrollingMobile from "../../assets/videos/scrolling-mobile.mp4";

function Landing() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative">
      {/* Video */}
      <video
        className="z-[-1] h-dvh w-full object-cover object-center"
        ref={videoRef}
        autoPlay
        muted
        loop
        aria-label="A close-up shot of a woman browsing on her smartphone in the evening."
      >
        <source
          src={scrollingMobile}
          media="(max-width: 640px)"
          type="video/mp4"
        />
        <source
          src={scrollingDesktop}
          media="(min-width: 641px)"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Video controls */}
      <div className="absolute bottom-4 right-4 z-[2] md:bottom-10 md:right-10">
        <button
          aria-label={
            isPlaying ? "Pause background video" : "Play background video"
          }
          title={isPlaying ? "Pause background video" : "Play background video"}
          onClick={toggleVideo}
          className="flex size-12 items-center justify-center rounded-full bg-white"
        >
          {isPlaying ? (
            <HiOutlinePause className="size-8" />
          ) : (
            <HiOutlinePlay className="size-8" />
          )}
        </button>
      </div>

      {/* Main heading */}
      <h1 className="heading-1 absolute left-1/2 top-32 w-full -translate-x-1/2 px-6 text-center uppercase leading-relaxed tracking-wider text-white sm:top-56">
        &#x275D; If you are not paying for the product,
        <br />
        <span className="text-custom-yellow">you are the product.</span>{" "}
        &#x275E;
      </h1>

      {/* quote */}
      <p className="absolute bottom-16 left-0 px-6 text-center font-merienda text-[clamp(1rem,3vw,1.25rem)] font-semibold tracking-wider text-white md:bottom-12 md:left-12 md:text-left">
        The internet is <span className="text-custom-yellow">destroying</span>{" "}
        and <span className="text-custom-yellow">improving</span> my life at the
        same time.
      </p>
    </section>
  );
}

export default Landing;
