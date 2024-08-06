import { motion } from "framer-motion";

function ProblemItem({ problem }) {
  const arrowVariants = {
    hidden: {
      // Got the values from [https://svgartista.net/] website, and merged it in framer motion
      strokeDashoffset: "116.38494873046875px",
      strokeDasharray: "116.38494873046875px",
    },
    visible: {
      strokeDashoffset: "0",
      strokeDasharray: "116.38494873046875px",
    },
  };

  return (
    <motion.div
      className="group relative min-w-[500px] pr-16 md:min-w-[750px]"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-325px" }}
      transition={{ type: "spring", damping: 20 }}
    >
      <svg
        className="absolute -right-4 top-1/2 -translate-y-1/2 rotate-[270deg] group-last:size-0"
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="44"
        viewBox="0 0 46 44"
      >
        <g fill="none" stroke="#6366f1" strokeWidth="3">
          <motion.path
            d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"
            variants={arrowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-325px" }}
            transition={{ duration: 1.5, ease: [0.47, 0, 0.745, 0.715] }}
          />
        </g>
      </svg>

      <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-indigo-500 font-merienda text-xl text-white">
        {problem.id}
      </span>

      <h3 className="heading-3 mb-8 mt-4 text-center"> {problem.title} </h3>

      <div className="grid-cols-2 gap-8 space-y-4 text-sm leading-relaxed md:grid md:space-y-0 md:text-base">
        {problem.desc}
      </div>
    </motion.div>
  );
}

export default ProblemItem;
