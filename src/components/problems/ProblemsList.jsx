import { problems } from "../../utils/constants";
import HorizontalScroll from "./HorizontalScroll";
import ProblemItem from "./ProblemItem";
function ProblemsList() {
  return (
    <section id="problems" className="responsive-container mt-24">
      <div className="space-y-2 text-center">
        <h2 className="heading-2">
          What are the <span className="underlined-word">problems?</span>
        </h2>
        <p className="text-lg text-gray-600">
          Unfortunately, time loss is not the biggest problem. <br /> there is
          more…
        </p>
      </div>

      <HorizontalScroll>
        {problems.map((problem) => {
          return <ProblemItem key={problem.id} problem={problem} />;
        })}
      </HorizontalScroll>
    </section>
  );
}

export default ProblemsList;
