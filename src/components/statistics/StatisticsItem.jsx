import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";
import ResourceLink from "../common/ResourceLink";

function StatisticsItem({ item, index }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.085 * index,
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    }),
  };

  return (
    <motion.div
      className="space-y-4 rounded-xl bg-white px-8 py-10 shadow-sm"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ margin: "-175px", once: true }}
    >
      {item.icon}

      <p className="text-3xl font-medium text-indigo-500 sm:text-4xl">
        <span>{item.numberPrefix}</span>
        <AnimatedNumber value={item.number} />
        <span>{item.numberSuffix}</span>
      </p>

      <p className="text-lg text-gray-500">
        {item.desc}
        {item.link && (
          <ResourceLink label={`${item.desc} statistic resource`} link={item.link} />
        )}
      </p>
    </motion.div>
  );
}

export default StatisticsItem;
