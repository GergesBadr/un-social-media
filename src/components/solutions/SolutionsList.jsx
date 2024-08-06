import { useRef } from "react";
import { solutions } from "../../utils/constants";
import SolutionsItem from "./SolutionsItem";
import { useScroll } from "framer-motion";

function SolutionsList() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="w-full basis-1/2 2xl:basis-[70%]">
      {solutions.map((solution, index) => {
        const length = solutions.length;
        return (
          <SolutionsItem
            key={solution.id}
            index={index}
            length={length}
            progress={scrollYProgress}
            solution={solution}
          />
        );
      })}
    </div>
  );
}

export default SolutionsList;
