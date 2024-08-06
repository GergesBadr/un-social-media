import { motion, useTransform } from "framer-motion";

function SolutionsItem({ index, length, progress, solution }) {
  const inSmallScreens = window.innerWidth < 768;
  const rotateValues = !inSmallScreens
    ? `${index % 2 === 0 ? index * 1 : index * -1}deg`
    : "";

  const range = [index * 0.25, 1];
  const targetScale = [1, 1 - (length - index) * 0.05];
  const scale = useTransform(progress, range, targetScale);

  return (
    <div className="sticky top-0 flex h-[80dvh] items-start justify-center overflow-y-auto lg:top-24">
      <motion.div
        className="relative rounded-2xl p-6 text-white"
        style={{
          top: `${index * 20}px`,
          rotate: rotateValues,
          scale,
          backgroundColor: solution.bgColor,
        }}
      >
        <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-custom-yellow font-semibold text-primary-dark">
          {solution.id}
        </span>
        <h3 className="heading-3 mb-6 text-center"> {solution.title} </h3>
        <div className="space-y-4"> {solution.content} </div>
      </motion.div>
    </div>
  );
}

export default SolutionsItem;
