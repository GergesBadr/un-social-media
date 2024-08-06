import { TbBrandYoutubeFilled } from "react-icons/tb";
import { motion } from "framer-motion";

function ResourcesItem({ resource }) {
  return (
    <div className="mx-3 h-[384px] w-[504px] rounded-3xl bg-indigo-100 p-3 shadow-sm">
      <div className="relative">
        {/* Thumbnail */}
        <img
          width="480"
          height="360"
          src={resource.imgSrc}
          alt={`${resource.imgAlt}, youtube video thumbnail.`}
          loading="lazy"
          className="rounded-xl"
        />

        {/* Important badge */}
        {resource.important && (
          <div className="important-badge absolute right-4 top-0 z-[3] bg-custom-yellow px-[10px] pb-[30px] pt-[10px] font-semibold tracking-widest before:absolute before:bottom-0 before:left-0 before:h-6 before:w-full before:bg-primary-dark">
            Important
          </div>
        )}

        {/* Overlay, Text, and Link */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-t from-transparent via-black/20 to-transparent">
          <p className="absolute bottom-3 left-3 text-white">
            {resource.imgAlt}
          </p>
          <motion.a
            href={resource.youtube}
            whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            target="_blank"
            aria-label={`Watch "${resource.imgAlt}" on YouTube`}
            className="relative flex size-14 items-center justify-center rounded-full bg-[#CD201F] outline-none focus:outline-4 focus:outline-offset-2 focus:outline-[#CD201f]"
          >
            <TbBrandYoutubeFilled className="size-8 text-white" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default ResourcesItem;
